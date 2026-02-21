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

const SITE_URL = "https://hanyon.app";

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getPostBySlug(slug);
    const url = `${SITE_URL}/research/${slug}`;
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        type: "article",
        title: frontmatter.title,
        description: frontmatter.description,
        url,
        publishedTime: new Date(frontmatter.date).toISOString(),
        tags: frontmatter.tags,
        siteName: "Hanyon Analytics",
        images: [
          {
            url: "/logo.png",
            width: 512,
            height: 512,
            alt: "Hanyon Analytics",
          },
        ],
      },
      twitter: {
        card: "summary",
        title: frontmatter.title,
        description: frontmatter.description,
        images: ["/logo.png"],
      },
      alternates: {
        canonical: url,
      },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: new Date(frontmatter.date).toISOString(),
    author: {
      "@type": "Organization",
      name: "Hanyon Analytics",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Hanyon Analytics",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/research/${slug}`,
    },
    keywords: frontmatter.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-2xl mx-auto px-6 py-16">
        <header className="mb-12">
          <time className="text-sm text-neutral-400">
            {formatDate(frontmatter.date)}
          </time>
          <h1 className="text-3xl font-bold tracking-tight mt-2 mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-lg text-neutral-500">
            {frontmatter.description}
          </p>
        </header>

        <div>
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{ mdxOptions }}
          />
        </div>
      </article>
    </>
  );
}
