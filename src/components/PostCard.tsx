import Link from "next/link";
import type { PostMeta } from "@/types";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article>
      <Link href={`/research/${post.slug}`} className="group block">
        <time className="text-sm text-neutral-400">
          {formatDate(post.date)}
        </time>
        <h2 className="text-xl font-semibold mt-1 group-hover:underline underline-offset-4 decoration-neutral-400">
          {post.title}
        </h2>
        <p className="text-neutral-500 mt-2 leading-relaxed">
          {post.description || post.excerpt}
        </p>
        {post.tags.length > 0 && (
          <div className="flex gap-2 mt-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-neutral-400 border border-neutral-200 rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
