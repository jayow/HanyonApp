export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
  author?: string;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  excerpt: string;
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  url?: string;
  category: "analytics" | "defi" | "tools" | "other";
}
