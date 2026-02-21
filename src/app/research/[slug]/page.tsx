import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { mdxComponents } from "@/components/MDXComponents";
import { mdxOptions } from "@/lib/mdx-options";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getPostBySlug(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-12">
        <time className="text-sm text-neutral-400">
          {formatDate(frontmatter.date)}
        </time>
        <h1 className="text-3xl font-bold tracking-tight mt-2 mb-4">
          {frontmatter.title}
        </h1>
        <p className="text-lg text-neutral-500">{frontmatter.description}</p>
      </header>

      <div>
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions }}
        />
      </div>
    </article>
  );
}
