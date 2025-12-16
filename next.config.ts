import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "grounded-days-622904.framer.app", // Allow images from all domains
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com", // Allow images from all domains
      }
    ],
  }
};

export default nextConfig;
