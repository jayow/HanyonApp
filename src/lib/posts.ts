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

export function getAllPostsMeta(): PostMeta[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => {
      const { frontmatter } = getPostBySlug(slug);
      return { ...frontmatter, slug };
    })
    .filter((post) => post.published)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}
