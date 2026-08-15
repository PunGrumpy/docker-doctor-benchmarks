# [docker-doctor-benchmarks](https://docker-doctor.vercel.app/leaderboard)

Reproducible [`docker-doctor`](https://github.com/PunGrumpy/docker-doctor) scores for popular open-source projects that ship Dockerfiles and Compose files.

The scores below are produced by GitHub Actions on a monthly cron (and on demand). Every entry is scanned with a pinned [`@docker-doctor/cli`](https://www.npmjs.com/package/@docker-doctor/cli) against a fresh sparse clone of the upstream repo, and the resulting JSON is committed alongside this README so the leaderboard is fully auditable.

## Leaderboard

<!-- LEADERBOARD:START -->

| Rank | Project | Score | Errors | Warnings | Info | Docker files | Commit |
| --: | --- | :-- | --: | --: | --: | --: | :-: |
| 1 | [Plausible](https://github.com/plausible/analytics) | 🟢 `███████████████████░` **97**/100 | 0 | 0 | 2 | 1 | `a3fd4b9` |
| 2 | [Umami](https://github.com/umami-software/umami) | 🟡 `████████████████░░░░` **80**/100 | 0 | 3 | 4 | 2 | `de474a1` |
| 3 | [Sentry](https://github.com/getsentry/sentry) | 🟠 `███████████████░░░░░` **73**/100 | 0 | 5 | 2 | 1 | `6b9292a` |
| 4 | [Dub](https://github.com/dubinc/dub) | 🟠 `██████████████░░░░░░` **70**/100 | 0 | 6 | 1 | 1 | `8dcff67` |
| 5 | [Outline](https://github.com/outline/outline) | 🟠 `████████████░░░░░░░░` **60**/100 | 0 | 8 | 4 | 3 | `1309dc2` |
| 6 | [Uptime Kuma](https://github.com/louislam/uptime-kuma) | 🔴 `████████░░░░░░░░░░░░` **40**/100 | 0 | 14 | 8 | 7 | `b980621` |
| 7 | [Twenty](https://github.com/twentyhq/twenty) | 🔴 `███████░░░░░░░░░░░░░` **36**/100 | 1 | 12 | 14 | 5 | `ff44e37` |
| 8 | [Appsmith](https://github.com/appsmithorg/appsmith) | 🔴 `███████░░░░░░░░░░░░░` **33**/100 | 0 | 17 | 10 | 7 | `6902861` |
| 9 | [Cal.com](https://github.com/calcom/cal.com) | 🔴 `██████░░░░░░░░░░░░░░` **28**/100 | 1 | 17 | 11 | 7 | `176037d` |
| 10 | [Hoppscotch](https://github.com/hoppscotch/hoppscotch) | 🔴 `████░░░░░░░░░░░░░░░░` **20**/100 | 0 | 25 | 13 | 5 | `1acb8a3` |
| 11 | [Formbricks](https://github.com/formbricks/formbricks) | 🔴 `███░░░░░░░░░░░░░░░░░` **14**/100 | 0 | 33 | 5 | 3 | `ace2c9b` |
| 12 | [NocoDB](https://github.com/nocodb/nocodb) | 🔴 `█░░░░░░░░░░░░░░░░░░░` **6**/100 | 0 | 49 | 0 | 15 | `6a7caa3` |
| 13 | [Ghost](https://github.com/TryGhost/Ghost) | 🔴 `█░░░░░░░░░░░░░░░░░░░` **4**/100 | 0 | 52 | 16 | 14 | `5f649f3` |
| 14 | [Directus](https://github.com/directus/directus) | 🔴 `█░░░░░░░░░░░░░░░░░░░` **3**/100 | 0 | 59 | 7 | 4 | `cb846b6` |
| 15 | [Immich](https://github.com/immich-app/immich) | 🔴 `█░░░░░░░░░░░░░░░░░░░` **3**/100 | 0 | 58 | 19 | 11 | `f9c05af` |
| 16 | [Plane](https://github.com/makeplane/plane) | 🔴 `█░░░░░░░░░░░░░░░░░░░` **3**/100 | 0 | 48 | 46 | 14 | `1c8a60f` |
| 17 | [Supabase](https://github.com/supabase/supabase) | 🔴 `█░░░░░░░░░░░░░░░░░░░` **3**/100 | 0 | 61 | 9 | 17 | `9be60ca` |
| 18 | [Metabase](https://github.com/metabase/metabase) | 🔴 `░░░░░░░░░░░░░░░░░░░░` **2**/100 | 0 | 69 | 16 | 11 | `45dfb5a` |
| 19 | [n8n](https://github.com/n8n-io/n8n) | 🔴 `░░░░░░░░░░░░░░░░░░░░` **1**/100 | 0 | 69 | 38 | 17 | `b186fa8` |
| 20 | [Grafana](https://github.com/grafana/grafana) | 🔴 `░░░░░░░░░░░░░░░░░░░░` **0**/100 | 2 | 148 | 84 | 96 | `59a8cbb` |

<sub>Last updated <strong>2026-08-15T07:23:05.901Z</strong> · `@docker-doctor/cli` `0.4.1` · 20 scored, 0 failed · raw results in [`results/latest.json`](results/latest.json)</sub>

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
