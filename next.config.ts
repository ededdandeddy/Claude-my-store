import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow external image domains so next/image can optimize them
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
