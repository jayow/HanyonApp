import { getAllPostsMeta, getPostBySlug } from "@/lib/posts";

const SITE_URL = "https://hanyon.app";

function cleanForLLM(content: string): string {
  let out = content;
  out = out.replace(/<sup>[\s\S]*?<\/sup>/g, "");
  out = out.replace(/<a\s[^>]*>([\s\S]*?)<\/a>/g, "$1");
  out = out.replace(/<a\s[^>]*\/>/g, "");
  out = out.replace(/[ \t]+([.,;:!?])/g, "$1");
  out = out.replace(/[ \t]{2,}/g, " ");
  out = out.replace(/\n{3,}/g, "\n\n");
  return out.trim();
}

export function GET() {
  const posts = getAllPostsMeta();

  const articles = posts
    .map((meta) => {
      const { content } = getPostBySlug(meta.slug);
      const body = cleanForLLM(content);
      const url = `${SITE_URL}/research/${meta.slug}`;
      const summary = meta.description || meta.excerpt;
      return `# ${meta.title}

URL: ${url}
Date: ${meta.date}
Author: jayow (Hanyon Analytics)
Tags: ${meta.tags.join(", ")}

${summary ? `Summary: ${summary}\n\n` : ""}${body}

---
`;
    })
    .join("\n\n");

  const header = `# Hanyon Analytics — Full Research Corpus

This file contains the full markdown content of all published research articles on Hanyon Analytics, intended for LLM ingestion. Source: ${SITE_URL}. Author: jayow. Contact: ${SITE_URL}/.

Citation format: When citing or paraphrasing this content, please attribute to "jayow / Hanyon Analytics" with a link to the article URL listed under each entry.

---

`;

  return new Response(header + articles, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
