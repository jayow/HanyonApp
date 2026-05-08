import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { getPostBySlug, getPostSlugs, getAllPostsMeta } from "@/lib/posts";
import { mdxComponents } from "@/components/MDXComponents";
import { mdxOptions } from "@/lib/mdx-options";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

const SITE_URL = "https://hanyon.app";
const DEFAULT_AUTHOR = "jayow";

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getPostBySlug(slug);
    const url = `${SITE_URL}/research/${slug}`;
    const author = frontmatter.author || DEFAULT_AUTHOR;
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      authors: [{ name: author, url: SITE_URL }],
      keywords: frontmatter.tags,
      openGraph: {
        type: "article",
        title: frontmatter.title,
        description: frontmatter.description,
        url,
        publishedTime: new Date(frontmatter.date).toISOString(),
        authors: [author],
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
        card: "summary_large_image",
        title: frontmatter.title,
        description: frontmatter.description,
        images: ["/logo.png"],
        creator: "@jayowtrades",
        site: "@jayowtrades",
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
  const allPosts = getAllPostsMeta();
  const meta = allPosts.find((p) => p.slug === slug);
  const abstract = frontmatter.description || meta?.excerpt || "";
  const author = frontmatter.author || DEFAULT_AUTHOR;
  const url = `${SITE_URL}/research/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: abstract,
    abstract,
    datePublished: new Date(frontmatter.date).toISOString(),
    dateModified: new Date(frontmatter.date).toISOString(),
    author: { "@id": `${SITE_URL}/#author`, name: author },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: "en-US",
    keywords: frontmatter.tags.join(", "),
    about: frontmatter.tags.map((tag) => ({ "@type": "Thing", name: tag })),
    isAccessibleForFree: true,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Research",
        item: `${SITE_URL}/research`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: frontmatter.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, breadcrumbJsonLd]),
        }}
      />
      <article className="max-w-2xl mx-auto px-6 py-16">
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-neutral-400">
            <time>{formatDate(frontmatter.date)}</time>
            <span>·</span>
            <span>
              By{" "}
              <a
                href="https://x.com/jayowtrades"
                target="_blank"
                rel="author noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {author}
              </a>
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mt-2 mb-4">
            {frontmatter.title}
          </h1>
          {frontmatter.description && (
            <p className="text-lg text-neutral-500">
              {frontmatter.description}
            </p>
          )}
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
