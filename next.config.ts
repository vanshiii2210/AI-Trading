import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Ensure Next finds src/app even in monorepo / Vercel edge cases
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
