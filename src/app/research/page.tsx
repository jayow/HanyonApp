import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Writing about Web3, prediction markets, and on-chain analytics.",
};

export default function ResearchPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Research</h1>
      <p className="text-neutral-500 mb-12">
        Writing about markets, mechanisms, and the systems behind them.
      </p>
      <div className="space-y-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      {posts.length === 0 && (
        <p className="text-neutral-400 italic">
          No posts yet. Check back soon.
        </p>
      )}
    </div>
  );
}
