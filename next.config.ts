import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Course funnel pages are link-only: keep them out of search results.
  // Old guide PDF link from before the rename.
  async redirects() {
    return [
      {
        source: "/zero-to-first-yield.pdf",
        destination: "/first-steps-into-crypto.pdf",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/defi-course/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/free-guide",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/first-steps-into-crypto.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
