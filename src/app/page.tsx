import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Hanyon Analytics</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-lg">
          Self-taught data analyst, DeFi researcher, and builder with a
          background in risk analysis and technical trading.
        </p>
        <p className="text-lg text-neutral-500 leading-relaxed">
          I build open-source tools for on-chain analytics and write
          independent research on DeFi, market mechanics, and Web3.
        </p>
        <div className="flex gap-6 pt-4">
          <Link
            href="/research"
            className="text-neutral-900 underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900 transition-colors"
          >
            Read research &rarr;
          </Link>
          <Link
            href="/apps"
            className="text-neutral-900 underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900 transition-colors"
          >
            View apps &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
