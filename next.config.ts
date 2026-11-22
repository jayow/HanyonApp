import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Course funnel pages are link-only: keep them out of search results.
  async headers() {
    return [
      {
        source: "/defi-course",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/free-guide",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/zero-to-first-yield.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
