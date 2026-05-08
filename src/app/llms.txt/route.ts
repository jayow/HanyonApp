import { getAllPostsMeta } from "@/lib/posts";

const SITE_URL = "https://hanyon.app";

export function GET() {
  const posts = getAllPostsMeta();

  const researchLines = posts
    .map((post) => {
      const summary = post.description || post.excerpt;
      return `- [${post.title}](${SITE_URL}/research/${post.slug}): ${summary}`;
    })
    .join("\n");

  const text = `# Hanyon Analytics

> Independent research on DeFi, on-chain capital markets, prediction markets, and the convergence of crypto infrastructure with traditional finance. Authored by jayow (X: @jayowtrades).

Hanyon Analytics publishes independent research notes on real-world asset tokenization, prediction markets, and on-chain analytics. Each note is structured for technical and quantitative readers. The site also hosts open-source dashboards and tools.

## Research

${researchLines}

## Apps

- [Apps directory](${SITE_URL}/apps): Open-source dashboards and tools for on-chain analytics, prediction markets, and DeFi.

## Author

- [jayow on X](https://x.com/jayowtrades)
- [jayow on GitHub](https://github.com/jayow)
- [jayow on Dune](https://dune.com/jayow)

## Optional

- [Full content (all research in markdown)](${SITE_URL}/llms-full.txt): Full markdown content of all published research articles, intended for LLM ingestion.
- [RSS feed](${SITE_URL}/feed.xml)
- [Sitemap](${SITE_URL}/sitemap.xml)
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
