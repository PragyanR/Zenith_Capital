import type { NextConfig } from "next";

// GitHub Pages serves this repo at /Zenith_Capital. Set BASE_PATH="" for a custom domain or Vercel.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
