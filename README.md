# [docker-doctor-benchmarks](https://docker-doctor.vercel.app/leaderboard)

Reproducible [`docker-doctor`](https://github.com/PunGrumpy/docker-doctor) scores for popular open-source projects that ship Dockerfiles and Compose files.

The scores below are produced by GitHub Actions on a monthly cron (and on demand). Every entry is scanned with a pinned [`@docker-doctor/cli`](https://www.npmjs.com/package/@docker-doctor/cli) against a fresh sparse clone of the upstream repo, and the resulting JSON is committed alongside this README so the leaderboard is fully auditable.

## Leaderboard

<!-- LEADERBOARD:START -->

| Rank | Project | Score | Errors | Warnings | Info | Docker files | Commit |
| --: | --- | :-- | --: | --: | --: | --: | :-: |
| 1 | [Plausible](https://github.com/plausible/analytics) | <img src="assets/status/excellent.svg" alt="Excellent" width="10" height="10"> `███████████████████░` **97**/100 | 0 | 0 | 2 | 1 | `d21298d` |
| 2 | [Sentry](https://github.com/getsentry/sentry) | <img src="assets/status/good.svg" alt="Good" width="10" height="10"> `███████████████░░░░░` **77**/100 | 0 | 4 | 2 | 1 | `0e17e34` |
| 3 | [Dub](https://github.com/dubinc/dub) | <img src="assets/status/needs-work.svg" alt="Needs Work" width="10" height="10"> `██████████████░░░░░░` **70**/100 | 0 | 6 | 1 | 1 | `7e01013` |
| 4 | [Outline](https://github.com/outline/outline) | <img src="assets/status/needs-work.svg" alt="Needs Work" width="10" height="10"> `████████████░░░░░░░░` **60**/100 | 0 | 8 | 4 | 3 | `41d6c05` |
| 5 | [Umami](https://github.com/umami-software/umami) | <img src="assets/status/needs-work.svg" alt="Needs Work" width="10" height="10"> `██████████░░░░░░░░░░` **50**/100 | 0 | 11 | 4 | 3 | `ec0ff50` |
| 6 | [Twenty](https://github.com/twentyhq/twenty) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `████████░░░░░░░░░░░░` **42**/100 | 1 | 10 | 10 | 4 | `e556d5d` |
| 7 | [Uptime Kuma](https://github.com/louislam/uptime-kuma) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `████████░░░░░░░░░░░░` **39**/100 | 0 | 14 | 10 | 8 | `e7420f8` |
| 8 | [Appsmith](https://github.com/appsmithorg/appsmith) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `██████░░░░░░░░░░░░░░` **32**/100 | 0 | 17 | 11 | 7 | `e23611f` |
| 9 | [Cal.com](https://github.com/calcom/cal.com) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `██████░░░░░░░░░░░░░░` **28**/100 | 1 | 17 | 11 | 7 | `54343aa` |
| 10 | [Directus](https://github.com/directus/directus) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `████░░░░░░░░░░░░░░░░` **20**/100 | 0 | 27 | 6 | 4 | `e9f5ef3` |
| 11 | [Hoppscotch](https://github.com/hoppscotch/hoppscotch) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `████░░░░░░░░░░░░░░░░` **20**/100 | 0 | 25 | 13 | 5 | `63273f8` |
| 12 | [Formbricks](https://github.com/formbricks/formbricks) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `█░░░░░░░░░░░░░░░░░░░` **6**/100 | 0 | 49 | 6 | 4 | `13fa6bd` |
| 13 | [NocoDB](https://github.com/nocodb/nocodb) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `█░░░░░░░░░░░░░░░░░░░` **6**/100 | 0 | 49 | 0 | 15 | `95f3c25` |
| 14 | [Immich](https://github.com/immich-app/immich) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `░░░░░░░░░░░░░░░░░░░░` **2**/100 | 0 | 60 | 20 | 11 | `8e3267d` |
| 15 | [Plane](https://github.com/makeplane/plane) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `░░░░░░░░░░░░░░░░░░░░` **2**/100 | 0 | 54 | 54 | 14 | `c7a5afe` |
| 16 | [Supabase](https://github.com/supabase/supabase) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `░░░░░░░░░░░░░░░░░░░░` **2**/100 | 0 | 70 | 8 | 20 | `7b08726` |
| 17 | [Ghost](https://github.com/TryGhost/Ghost) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `░░░░░░░░░░░░░░░░░░░░` **1**/100 | 1 | 67 | 18 | 20 | `34ab9ae` |
| 18 | [Metabase](https://github.com/metabase/metabase) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `░░░░░░░░░░░░░░░░░░░░` **1**/100 | 0 | 71 | 16 | 11 | `b6907da` |
| 19 | [n8n](https://github.com/n8n-io/n8n) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `░░░░░░░░░░░░░░░░░░░░` **1**/100 | 0 | 69 | 38 | 18 | `d12cab0` |
| 20 | [Grafana](https://github.com/grafana/grafana) | <img src="assets/status/critical.svg" alt="Critical" width="10" height="10"> `░░░░░░░░░░░░░░░░░░░░` **0**/100 | 2 | 148 | 83 | 96 | `0340cda` |

<sub>Last updated <strong>2026-10-01T12:29:02.198Z</strong> · `@docker-doctor/cli` `0.4.1` · 20 scored, 0 failed · raw results in [`results/latest.json`](results/latest.json)</sub>

<!-- LEADERBOARD:END -->

## How it works

1. [`repos.yaml`](repos.yaml) lists every benchmark target with its GitHub URL and any per-repo overrides (`ref`, display name). The schema is validated by zod in [`scripts/lib/config.ts`](scripts/lib/config.ts).
2. The [`Scan`](.github/workflows/scan.yml) workflow walks the list. Each entry gets a blobless sparse clone of its default branch — Dockerfiles, Compose files, and `.dockerignore` only, kilobytes instead of the whole repo — and one run of `bunx @docker-doctor/cli --json` at the repo root. The CLI discovers Docker files recursively, lints them, and computes a 0–100 score. A repo where discovery finds nothing is recorded as a failure, never ranked.
3. The scan writes [`results/latest.json`](results/latest.json), [`results/leaderboard.json`](results/leaderboard.json), and `results/per-repo/<slug>.json`, regenerates this README's table, and opens a PR — never a direct push — so every score change gets a human review before the leaderboard picks it up.

The harness pins nothing about the upstream repos by default — every entry tracks `HEAD` of its default branch, and the SHA actually scanned is recorded in each result row so any score is reproducible. To pin a branch or tag, set the `ref` field on a `repos.yaml` entry. The CLI version **is** pinned (`DOCTOR_VERSION` in [`scripts/scan.ts`](scripts/scan.ts)): scores are only comparable within one CLI version, and bumping it deliberately re-baselines every number.

These are static-analysis lint findings, not a vulnerability audit. A low score means the Docker files leave best practices on the table, not that the project is unsafe to run — and **all** Docker files in the repo count, including dev/test compose files that are often intentionally loose.

## Consuming the leaderboard

Every scan writes [`results/leaderboard.json`](results/leaderboard.json) — a slim, stable JSON blob that downstream consumers can fetch and drop in. The [docker-doctor website](https://docker-doctor.vercel.app/leaderboard) reads it directly.

**Stable URL** (always `main`, always the latest merged run):

```
https://raw.githubusercontent.com/PunGrumpy/docker-doctor-benchmarks/main/results/leaderboard.json
```

**Schema**:

```ts
interface Leaderboard {
  schemaVersion: 1;
  generatedAt: string; // ISO 8601 UTC
  doctorVersion: string; // e.g. "0.4.1"
  entries: Array<{
    slug: string; // "uptime-kuma"
    name: string; // "Uptime Kuma"
    githubUrl: string; // "https://github.com/louislam/uptime-kuma"
    commitSha: string; // SHA actually scanned
    score: number; // 0–100
    scoreLabel: string; // "Excellent 🏆"
    errorCount: number;
    warningCount: number;
    infoCount: number;
    dockerfileCount: number;
    composeFileCount: number;
  }>; // sorted desc by score
}
```

The blob is rewritten on every merged scan, so even when scores don't change the `generatedAt` timestamp does — diff or skip in your downstream as needed.

## Adding a project

Open a PR that adds an entry to [`repos.yaml`](repos.yaml) (public GitHub repos with at least one Dockerfile or Compose file). The schema is defined and validated in [`scripts/lib/config.ts`](scripts/lib/config.ts):

```yaml
- slug: my-project # kebab-case, must be unique
  name: My Project # display name in the leaderboard
  githubUrl: https://github.com/owner/repo
  ref: v2 # optional, branch or tag; default: default-branch HEAD
  notes: monorepo # optional, free-form
```

Once merged, the entry shows up the next time the workflow runs (monthly cron, or click _Run workflow_ on the **Scan** action). To get a fresh score after improving your Docker files, open an issue asking for a re-scan.

Run the same check locally:

```sh
bunx @docker-doctor/cli
```

## Reproducing locally

```bash
bun install
bun run scan     # scan every repos.yaml entry → results/
bun run render   # splice the table into this README
```

Bump `DOCTOR_VERSION` in [`scripts/scan.ts`](scripts/scan.ts) to scan with a different CLI version (this re-baselines every score — do it deliberately).

## Layout

| Path | What |
| --- | --- |
| [`repos.yaml`](repos.yaml) | Benchmark targets (canonical source of truth). |
| [`results/latest.json`](results/latest.json) | Full snapshot of the most recent run, including failures; auto-generated. |
| [`results/leaderboard.json`](results/leaderboard.json) | Slim ranked blob for downstream consumers; auto-generated. |
| `results/per-repo/<slug>.json` | Per-repo result; auto-generated. |
| [`scripts/`](scripts) | The harness (config loader, scanner, README renderer). |
| [`.github/workflows/scan.yml`](.github/workflows/scan.yml) | The automation. |

## License

[MIT](LICENSE)
