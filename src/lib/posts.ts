import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostFrontmatter, PostMeta } from "@/types";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): {
  frontmatter: PostFrontmatter;
  content: string;
} {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    frontmatter: data as PostFrontmatter,
    content,
  };
}

function extractExcerpt(content: string, maxLen = 200): string {
  const lines = content.split("\n");
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("#")) continue;
    if (line === "---") continue;
    if (line.startsWith("- ") || line.startsWith("| ")) continue;
    if (/^\*[^*]+\*$/.test(line)) continue;
    const stripped = line
      .replace(/<sup>[\s\S]*?<\/sup>/g, "")
      .replace(/<[^>]+>/g, "")
      .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\s+/g, " ")
      .trim();
    if (stripped.length < 30) continue;
    if (stripped.length <= maxLen) return stripped;
    return stripped.slice(0, maxLen).replace(/\s+\S*$/, "") + "…";
  }
  return "";
}

export function getAllPostsMeta(): PostMeta[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => {
      const { frontmatter, content } = getPostBySlug(slug);
      return { ...frontmatter, slug, excerpt: extractExcerpt(content) };
    })
    .filter((post) => post.published)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}
