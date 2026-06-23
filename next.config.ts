import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "buku.jiwamu.com",
      },
    ],
  },
};

export default nextConfig;
