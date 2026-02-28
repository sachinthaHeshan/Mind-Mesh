import type { NextConfig } from "next";

// GitHub Pages is served from /repo-name; configure-pages only injects into .js/.cjs/.mjs, not .ts
const isGitHubPages = typeof process.env.GITHUB_REPOSITORY === "string";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGitHubPages ? `/${repoName}` : "";
const assetPrefix = basePath;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: assetPrefix || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
