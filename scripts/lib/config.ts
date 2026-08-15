import fs from "node:fs";
import { parse as parseYaml } from "yaml";
import { z } from "zod";

const repoSchema = z.object({
  githubUrl: z
    .string()
    .regex(
      /^https:\/\/github\.com\/[^/]+\/[^/]+$/,
      "githubUrl must be https://github.com/<owner>/<repo>"
    ),
  name: z.string().min(1),
  notes: z.string().optional(),
  ref: z.string().min(1).optional(),
  slug: z
    .string()
    .regex(/^[a-z0-9][a-z0-9-]*$/, "slug must be filename-safe kebab-case"),
});

const configSchema = z.object({
  repos: z.array(repoSchema).min(1),
});

export type RepoTarget = z.infer<typeof repoSchema>;

export const loadConfig = (url: URL): RepoTarget[] => {
  const { repos } = configSchema.parse(
    parseYaml(fs.readFileSync(url, "utf8"))
  );
  const slugs = new Set<string>();
  for (const repo of repos) {
    if (slugs.has(repo.slug)) {
      throw new Error(`repos.yaml has a duplicate slug: ${repo.slug}`);
    }
    slugs.add(repo.slug);
  }
  return repos;
};
