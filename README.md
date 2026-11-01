# [docker-doctor-benchmarks](https://docker-doctor.vercel.app/leaderboard)

Reproducible [`docker-doctor`](https://github.com/PunGrumpy/docker-doctor) scores for popular open-source projects that ship Dockerfiles and Compose files.

The scores below are produced by GitHub Actions on a monthly cron (and on demand). Every entry is scanned with a pinned [`@docker-doctor/cli`](https://www.npmjs.com/package/@docker-doctor/cli) against a fresh sparse clone of the upstream repo, and the resulting JSON is committed alongside this README so the leaderboard is fully auditable.

## Leaderboard

<!-- LEADERBOARD:START -->

| Rank | Project | Score | Errors | Warnings | Info | Docker files | Commit |
| --: | --- | :-- | --: | --: | --: | --: | :-: |
| 1 | [Plausible](https://github.com/plausible/analytics) | <img src="assets/status/excellent.svg" alt="Excellent" width="10" height="10"> `███████████████████░` **96**/100 | 0 | 0 | 3 | 1 | `02cfac1` |
| 2 | [Sentry](https://github.com/getsentry/sentry) | <img src="assets/status/excellent.svg" alt="Excellent" width="10" height="10"> `███████████████████░` **93**/100 | 0 | 1 | 1 | 1 | `063a6cb` |
| 3 | [Grafana](https://github.com/grafana/grafana) | <img src="assets/status/good.svg" alt="Good" width="10" height="10"> `██████████████████░░` **88**/100 | 5 | 171 | 81 | 96 | `01f74f7` |
| 4 | [Uptime Kuma](https://github.com/louislam/uptime-kuma) | <img src="assets/status/good.svg" alt="Good" width="10" height="10"> `█████████████████░░░` **87**/100 | 0 | 17 | 10 | 8 | `cbd357e` |
| 5 | [Appsmith](https://github.com/appsmithorg/appsmith) | <img src="assets/status/good.svg" alt="Good" width="10" height="10"> `█████████████████░░░` **86**/100 | 0 | 16 | 9 | 7 | `7bf6d36` |
| 6 | [Outline](https://github.com/outline/outline) | <img src="assets/status/good.svg" alt="Good" width="10" height="10"> `█████████████████░░░` **83**/100 | 0 | 9 | 4 | 3 | `5b13e91` |
| 7 | [Ghost](https://github.com/TryGhost/Ghost) | <img src="assets/status/good.svg" alt="Good" width="10" height="10"> `████████████████░░░░` **82**/100 | 1 | 64 | 19 | 20 | `45498ed` |
| 8 | [Supabase](https://github.com/supabase/supabase) | <img src="assets/status/good.svg" alt="Good" width="10" height="10"> `████████████████░░░░` **79**/100 | 2 | 76 | 8 | 20 | `a05e7ec` |
| 9 | [Twenty](https://github.com/twentyhq/twenty) | <img src="assets/status/good.svg" alt="Good" width="10" height="10"> `████████████████░░░░` **79**/100 | 1 | 15 | 11 | 5 | `6a1f828` |
| 10 | [Cal.com](https://github.com/calcom/cal.com) | <img src="assets/status/good.svg" alt="Good" width="10" height="10"> `████████████████░░░░` **78**/100 | 1 | 25 | 9 | 7 | `f972fee` |
| 11 | [Plane](https://github.com/makeplane/plane) | <img src="assets/status/good.svg" alt="Good" width="10" height="10"> `███████████████░░░░░` **77**/100 | 0 | 50 | 54 | 14 | `b98e1de` |
| 12 | [Hoppscotch](https://github.com/hoppscotch/hoppscotch) | <img src="assets/status/needs-work.svg" alt="Needs Work" width="10" height="10"> `██████████████░░░░░░` **71**/100 | 0 | 27 | 11 | 5 | `39d2565` |
| 13 | [Umami](https://github.com/umami-software/umami) | <img src="assets/status/needs-work.svg" alt="Needs Work" width="10" height="10"> `██████████████░░░░░░` **71**/100 | 0 | 17 | 4 | 3 | `559e3c6` |
| 14 | [NocoDB](https://github.com/nocodb/nocodb) | <img src="assets/status/needs-work.svg" alt="Needs Work" width="10" height="10"> `██████████████░░░░░░` **70**/100 | 3 | 88 | 0 | 15 | `8dd1fcc` |
| 15 | [n8n](https://github.com/n8n-io/n8n) | <img src="assets/status/needs-work.svg" alt="Needs Work" width="10" height="10"> `██████████████░░░░░░` **68**/100 | 1 | 120 | 40 | 20 | `f5ed6cc` |
| 16 | [Immich](https://github.com/immich-app/immich) | <img src="assets/status/needs-work.svg" alt="Needs Work" width="10" height="10"> `█████████████░░░░░░░` **67**/100 | 0 | 72 | 22 | 11 | `b7510e7` |
| 17 | [Metabase](https://github.com/metabase/metabase) | <img src="assets/status/needs-work.svg" alt="Needs Work" width="10" height="10"> `█████████████░░░░░░░` **63**/100 | 0 | 92 | 22 | 12 | `085a8e1` |
| 18 | [Dub](https://github.com/dubinc/dub) | <img src="assets/status/needs-work.svg" alt="Needs Work" width="10" height="10"> `████████████░░░░░░░░` **62**/100 | 0 | 8 | 1 | 1 | `6b463b4` |
| 19 | [Directus](https://github.com/directus/directus) | <img src="assets/status/needs-work.svg" alt="Needs Work" width="10" height="10"> `███████████░░░░░░░░░` **57**/100 | 0 | 38 | 5 | 4 | `c40ab79` |
| 20 | [Formbricks](https://github.com/formbricks/formbricks) | <img src="assets/status/needs-work.svg" alt="Needs Work" width="10" height="10"> `██████████░░░░░░░░░░` **51**/100 | 0 | 68 | 11 | 6 | `fa28916` |

<sub>Last updated <strong>2026-11-01T12:42:34.027Z</strong> · `@docker-doctor/cli` `0.7.0` · 20 scored, 0 failed · raw results in [`results/latest.json`](results/latest.json)</sub>

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
