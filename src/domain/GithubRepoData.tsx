// Generated using https://app.quicktype.io/

import { z } from "zod";

export const githubRepoDataSchema = z.object({
  stargazers_count: z.number(),
  watchers_count: z.number(),
  language: z.string(),
  has_issues: z.boolean(),
  has_projects: z.boolean(),
  has_downloads: z.boolean(),
  has_wiki: z.boolean(),
  has_pages: z.boolean(),
  has_discussions: z.boolean(),
  forks_count: z.number(),
  mirror_url: z.null(),
  archived: z.boolean(),
  disabled: z.boolean(),
  open_issues_count: z.number(),
  allow_forking: z.boolean(),
  is_template: z.boolean(),
  web_commit_signoff_required: z.boolean(),
  topics: z.array(z.string()),
  visibility: z.string(),
  forks: z.number(),
  open_issues: z.number(),
  watchers: z.number(),
  default_branch: z.string(),
  temp_clone_token: z.null(),
  network_count: z.number(),
  subscribers_count: z.number(),
});

export type GithubRepoData = z.infer<typeof githubRepoDataSchema>;
