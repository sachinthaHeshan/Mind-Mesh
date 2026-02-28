import type { NextConfig } from "next";

// GitHub Pages is served from /repo-name; use BASE_PATH from workflow (configure-pages output) when set
const basePath = process.env.BASE_PATH ?? "";
const assetPrefix = basePath ? `${basePath}/` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
