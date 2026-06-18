import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow serving PDFs from public directory
  // No external image domains needed since we use emojis/CSS
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
