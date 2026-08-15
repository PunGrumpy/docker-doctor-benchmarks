#!/usr/bin/env node
// Scans every repo in repos.yaml with a pinned @docker-doctor/cli and writes
// results/latest.json, results/leaderboard.json, and results/per-repo/<slug>.json.
// Run with `bun run scan` (needs git + bunx on PATH).
//
// Design constraints (do not regress):
// - The CLI version is PINNED so results are reproducible and comparable.
// - Clones are blobless + sparse (Docker files only): a scan downloads
//   kilobytes, not the repo. docker-doctor never needs the other files.
// - The CLI exits 1 when a score is < 50, so exit codes mean nothing here —
//   only failure to produce parseable JSON counts as a scan failure.
// - A repo where discovery finds zero Docker files is recorded with
//   status "error", never ranked (an empty checkout would otherwise score
//   a perfect 100).

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { parse as parseYaml } from "yaml";

const DOCTOR_VERSION = "0.4.1";
const RESULTS_SCHEMA_VERSION = 1;
const REPORT_SCHEMA_VERSION = 2; // @docker-doctor/core JsonReport schema

const SPARSE_PATTERNS = [
  "**/Dockerfile*",
  "**/*.dockerfile",
  "**/docker-compose*.yml",
  "**/docker-compose*.yaml",
  "**/compose*.yml",
  "**/compose*.yaml",
  "**/.dockerignore",
];

const CLONE_TIMEOUT_MS = 180_000;
const SCAN_TIMEOUT_MS = 120_000;

const ROOT = new URL("..", import.meta.url);
const RESULTS_DIR = new URL("./results/", ROOT);
const PER_REPO_DIR = new URL("./per-repo/", RESULTS_DIR);

const run = (cmd, args, opts = {}) => {
  const res = spawnSync(cmd, args, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    ...opts,
  });
  if (res.error) {
    throw new Error(`${cmd} ${args[0]}: ${res.error.message}`);
  }
  return res;
};

const git = (args, cwd, timeout) => {
  const res = run("git", args, { cwd, timeout });
  if (res.status !== 0) {
    throw new Error(`git ${args[0]} failed: ${res.stderr.trim().slice(0, 300)}`);
  }
  return res.stdout.trim();
};

const scanRepo = ({ githubUrl, name, ref, slug }) => {
  const startedAt = Date.now();
  const base = {
    doctorVersion: DOCTOR_VERSION,
    githubUrl,
    name,
    ref: ref ?? "HEAD",
    schemaVersion: RESULTS_SCHEMA_VERSION,
    slug,
  };
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "dd-scan-"));
  try {
    git(
      [
        "clone",
        "--depth",
        "1",
        "--filter=blob:none",
        "--no-checkout",
        "--single-branch",
        ...(ref ? ["--branch", ref] : []),
        githubUrl,
        dir,
      ],
      undefined,
      CLONE_TIMEOUT_MS
    );
    git(
      ["sparse-checkout", "set", "--no-cone", ...SPARSE_PATTERNS],
      dir,
      CLONE_TIMEOUT_MS
    );
    git(["checkout"], dir, CLONE_TIMEOUT_MS);
    const commitSha = git(["rev-parse", "HEAD"], dir);

    // Exit code is score-dependent — parseable stdout is the success signal.
    const res = run("bunx", [`@docker-doctor/cli@${DOCTOR_VERSION}`, "--json"], {
      cwd: dir,
      timeout: SCAN_TIMEOUT_MS,
    });
    const report = JSON.parse(res.stdout);
    if (report.schemaVersion !== REPORT_SCHEMA_VERSION) {
      throw new Error(
        `CLI report schemaVersion ${report.schemaVersion} != ${REPORT_SCHEMA_VERSION}; scores would not be comparable`
      );
    }

    const dockerfileCount = report.project.dockerfiles.length;
    const composeFileCount = report.project.composeFiles.length;
    if (dockerfileCount + composeFileCount === 0) {
      throw new Error("discovery found no Dockerfiles or compose files");
    }

    const counts = { error: 0, info: 0, warning: 0 };
    for (const diag of report.diagnostics) {
      counts[diag.severity] += 1;
    }

    return {
      ...base,
      commitSha,
      composeFileCount,
      dockerfileCount,
      errorCount: counts.error,
      errorMessage: null,
      infoCount: counts.info,
      scanElapsedMs: Date.now() - startedAt,
      scannedAt: new Date().toISOString(),
      score: report.score,
      scoreLabel: report.label,
      status: "ok",
      totalDiagnosticCount: report.diagnostics.length,
      warningCount: counts.warning,
    };
  } catch (err) {
    return {
      ...base,
      commitSha: null,
      errorMessage: String(err.message ?? err),
      scanElapsedMs: Date.now() - startedAt,
      scannedAt: new Date().toISOString(),
      score: null,
      status: "error",
    };
  } finally {
    fs.rmSync(dir, { force: true, recursive: true });
  }
};

const config = parseYaml(
  fs.readFileSync(new URL("./repos.yaml", ROOT), "utf8")
);
const repos = config.repos;

const slugs = new Set();
for (const repo of repos) {
  if (!(repo.slug && repo.name && repo.githubUrl)) {
    throw new Error(`repos.yaml entry missing slug/name/githubUrl: ${JSON.stringify(repo)}`);
  }
  if (slugs.has(repo.slug)) {
    throw new Error(`repos.yaml has a duplicate slug: ${repo.slug}`);
  }
  slugs.add(repo.slug);
}

fs.mkdirSync(PER_REPO_DIR, { recursive: true });

const results = [];
for (const target of repos) {
  const entry = scanRepo(target);
  results.push(entry);
  console.error(
    entry.status === "ok"
      ? `ok   ${entry.slug} score=${entry.score}`
      : `FAIL ${entry.slug}: ${entry.errorMessage}`
  );
}

const writeJson = (url, value) => {
  fs.writeFileSync(url, `${JSON.stringify(value, null, 2)}\n`);
};

const generatedAt = new Date().toISOString();

for (const entry of results) {
  writeJson(new URL(`./${entry.slug}.json`, PER_REPO_DIR), entry);
}

writeJson(new URL("./latest.json", RESULTS_DIR), {
  doctorVersion: DOCTOR_VERSION,
  generatedAt,
  results,
  schemaVersion: RESULTS_SCHEMA_VERSION,
});

const ranked = results
  .filter((entry) => entry.status === "ok")
  .sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug))
  .map((entry) => ({
    commitSha: entry.commitSha,
    composeFileCount: entry.composeFileCount,
    dockerfileCount: entry.dockerfileCount,
    errorCount: entry.errorCount,
    githubUrl: entry.githubUrl,
    infoCount: entry.infoCount,
    name: entry.name,
    score: entry.score,
    scoreLabel: entry.scoreLabel,
    slug: entry.slug,
    warningCount: entry.warningCount,
  }));

writeJson(new URL("./leaderboard.json", RESULTS_DIR), {
  doctorVersion: DOCTOR_VERSION,
  entries: ranked,
  generatedAt,
  schemaVersion: RESULTS_SCHEMA_VERSION,
});

const failed = results.length - ranked.length;
console.error(
  `wrote results/: ${ranked.length} scored, ${failed} failed`
);

// A few flaky repos must not kill the monthly run, but a majority failing
// means the scanner itself is broken.
if (failed * 2 > results.length) {
  process.exit(1);
}
