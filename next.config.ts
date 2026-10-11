import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Keep www links on the same canonical origin without redirecting local development.
    return [{ source: "/:path*", has: [{ type: "host", value: "www.agackakantattoo.com" }], destination: "https://agackakantattoo.com/:path*", permanent: true }];
  },
};

export default nextConfig;
