#!/usr/bin/env bun
// Splices the leaderboard table into README.md between the
// LEADERBOARD:START / LEADERBOARD:END markers, reading
// results/latest.json. Run with `bun run render` after a scan; CI runs it
// so the README table and the JSON can never drift apart.

import fs from "node:fs";

import type { ScanResult } from "./lib/types";

const ROOT = new URL("..", import.meta.url);
const README_URL = new URL("README.md", ROOT);
const LATEST_URL = new URL("results/latest.json", ROOT);

const START_MARKER = "<!-- LEADERBOARD:START -->";
const END_MARKER = "<!-- LEADERBOARD:END -->";

const BAR_WIDTH = 20;
const SCORE_SCALE = 100;

// Vendored copies of the web app's public/status icons — same bucket
// thresholds as packages/core scoring (90/75/50/0).
const bucketIcon = (score: number): string => {
  let bucket = { label: "Critical", slug: "critical" };
  if (score >= 90) {
    bucket = { label: "Excellent", slug: "excellent" };
  } else if (score >= 75) {
    bucket = { label: "Good", slug: "good" };
  } else if (score >= 50) {
    bucket = { label: "Needs Work", slug: "needs-work" };
  }
  return `<img src="assets/status/${bucket.slug}.svg" alt="${bucket.label}" width="10" height="10">`;
};

const bar = (score: number): string => {
  const filled = Math.round((score / SCORE_SCALE) * BAR_WIDTH);
  return `${"█".repeat(filled)}${"░".repeat(BAR_WIDTH - filled)}`;
};

interface Latest {
  doctorVersion: string;
  generatedAt: string;
  results: ScanResult[];
}

const latest = JSON.parse(fs.readFileSync(LATEST_URL, "utf-8")) as Latest;

const ok = latest.results
  .filter(
    (entry): entry is Extract<ScanResult, { status: "ok" }> =>
      entry.status === "ok"
  )
  .toSorted((a, b) => b.score - a.score || a.slug.localeCompare(b.slug));
const failedCount = latest.results.length - ok.length;

const SHORT_SHA_LENGTH = 7;

const rows = ok.map((entry, index) => {
  const files = entry.dockerfileCount + entry.composeFileCount;
  const sha = entry.commitSha.slice(0, SHORT_SHA_LENGTH);
  return `| ${index + 1} | [${entry.name}](${entry.githubUrl}) | ${bucketIcon(entry.score)} \`${bar(entry.score)}\` **${entry.score}**/100 | ${entry.errorCount} | ${entry.warningCount} | ${entry.infoCount} | ${files} | \`${sha}\` |`;
});

const table = [
  "",
  "| Rank | Project | Score | Errors | Warnings | Info | Docker files | Commit |",
  "| --: | --- | :-- | --: | --: | --: | --: | :-: |",
  ...rows,
  "",
  `<sub>Last updated <strong>${latest.generatedAt}</strong> · \`@docker-doctor/cli\` \`${latest.doctorVersion}\` · ${ok.length} scored, ${failedCount} failed · raw results in [\`results/latest.json\`](results/latest.json)</sub>`,
  "",
].join("\n");

const readme = fs.readFileSync(README_URL, "utf-8");
const start = readme.indexOf(START_MARKER);
const end = readme.indexOf(END_MARKER);
if (start === -1 || end === -1 || end < start) {
  throw new Error("README.md is missing the LEADERBOARD:START/END markers");
}

const next = `${readme.slice(0, start + START_MARKER.length)}\n${table}\n${readme.slice(end)}`;
if (next === readme) {
  console.error("README.md already up to date");
} else {
  fs.writeFileSync(README_URL, next);
  console.error("README.md leaderboard table updated");
}
