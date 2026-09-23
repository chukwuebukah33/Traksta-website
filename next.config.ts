import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev server is bound to 0.0.0.0 and opened at 127.0.0.1.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
