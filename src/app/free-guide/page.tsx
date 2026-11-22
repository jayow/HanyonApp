import type { Metadata } from "next";
import Image from "next/image";
import { TallyEmbed } from "@/components/TallyEmbed";
import { Fraunces, DM_Sans } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const TALLY_FORM_ID = "Qo7A6l";

export const metadata: Metadata = {
  title: { absolute: "Zero to First Yield: a free beginner guide to DeFi" },
  description:
    "A free guide to learning crypto and DeFi from zero, safely. Get it right away.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
  openGraph: {
    title: "Zero to First Yield (free guide)",
    description:
      "Want to learn crypto, but scared and don't know where to start? Get the free guide.",
    url: "https://hanyon.app/free-guide",
  },
};

const worries = [
  "I'm scared of losing my money.",
  "There are so many scams. I don't know who to trust.",
  "Wallets, seed phrases, DeFi. It's all so confusing.",
  "I don't even know where to start.",
];

const steps = [
  "Learn what crypto is",
  "Open an exchange account and buy USDC",
  "Set up your own wallet",
  "Send USDC to your wallet",
  "Pick a DeFi lending app",
  "Make a small deposit and check it weekly",
  "Withdraw back to fiat",
];

const extras = [
  "The scams that catch beginners, and how to spot them",
  "4 questions to ask before you deposit anywhere",
  "A simple checklist for every step",
  "Official links to bookmark, no referral links",
];

const faqs = [
  {
    q: "Is it really free?",
    a: "Yes. Put in your email and you get the full guide right away.",
  },
  {
    q: "Do I need any crypto experience?",
    a: "No. It starts from what crypto is and builds up one step at a time.",
  },
  {
    q: "Do I need money to start?",
    a: "Not to read it. When you're ready to try, start with a small amount you can afford to lose, and always do a small test first.",
  },
  {
    q: "Which apps does it use?",
    a: "Solana, with lending apps like Kamino and Jupiter Lend.",
  },
  {
    q: "Is this financial advice?",
    a: "No. It is education only. You make your own decisions, and there are no guaranteed returns.",
  },
];

const H = `${fraunces.className} text-[#191b19]`;

export default function FreeGuidePage() {
  return (
    <div
      className={`${dmSans.className} min-h-screen bg-[#f6f5f1] text-[#191b19]`}
    >
      <div className="h-1.5 bg-[#1f7a4a]" />
      <div className="max-w-3xl mx-auto px-6">
        {/* Hero + form */}
        <section className="pt-16 pb-12 sm:pt-24">
          <p className="text-sm font-medium tracking-wide text-[#1f7a4a] uppercase">
            Free guide · Focused Fire Trader
          </p>
          <h1 className={`${H} mt-5 text-4xl sm:text-5xl leading-[1.08]`}>
            Want to learn crypto, but scared and don&apos;t know where to start?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#3f443f]">
            Get the free guide <em>Zero to First Yield</em>. It shows you, step
            by step, how to go from zero to your first small DeFi deposit, and
            back to fiat, without falling for scams.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#3f443f]">
            Put in your email below and you&apos;ll get it right away.
          </p>
          <div
            id="get-guide"
            className="scroll-mt-8 mt-8 rounded-lg bg-white/60 p-2 sm:p-4"
          >
            <TallyEmbed formId={TALLY_FORM_ID} title="Get the free guide" />
          </div>
          <p className="mt-3 text-sm text-[#5f655f]">
            Form not loading?{" "}
            <a
              href={`https://tally.so/r/${TALLY_FORM_ID}`}
              className="underline underline-offset-4"
            >
              Open it here
            </a>
            .
          </p>
        </section>

        {/* Problem */}
        <section className="py-12 border-t border-[#dedcd4]">
          <h2 className={`${H} text-3xl`}>Sound familiar?</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {worries.map((w) => (
              <li
                key={w}
                className="rounded-md bg-[#e7eee8] px-5 py-4 leading-snug"
              >
                &ldquo;{w}&rdquo;
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-[#3f443f]">
            You&apos;re not alone. This is where most people stop. The guide is
            built for exactly this: one safe path, plain words, and small
            amounts first.
          </p>
        </section>

        {/* What's inside */}
        <section className="py-12 border-t border-[#dedcd4]">
          <h2 className={`${H} text-3xl`}>What&apos;s inside the guide</h2>
          <p className="mt-3 text-[#3f443f]">
            Seven simple steps, from zero to your first position and back.
          </p>
          <ol className="mt-8 space-y-4">
            {steps.map((m, i) => (
              <li key={m} className="flex items-center gap-4">
                <span
                  className={`${fraunces.className} flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1f7a4a] text-lg text-white`}
                >
                  {i + 1}
                </span>
                <span className="text-lg">{m}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-bold text-lg">Plus:</p>
          <ul className="mt-3 space-y-3">
            {extras.map((item) => (
              <li key={item} className="flex gap-3 text-lg leading-snug">
                <span className="mt-1 text-[#1f7a4a]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Why DeFi */}
        <section className="py-12 border-t border-[#dedcd4]">
          <h2 className={`${H} text-3xl`}>Yield beyond the bank</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3f443f]">
            When you put money in a bank, the bank lends it out and keeps most
            of the interest. In DeFi, you can lend directly through code, and
            the borrowers pay you. There are other kinds of yield too, like
            trading fees and network rewards.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#3f443f]">
            It also comes with real risks. The guide shows you both sides: where
            yield comes from, who pays it, and how to tell a real opportunity
            from a trap.
          </p>
        </section>

        {/* About */}
        <section className="py-12 border-t border-[#dedcd4]">
          <h2 className={`${H} text-3xl`}>Who made this</h2>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src="/defi-course-jake.jpg"
              alt="Jake from Focused Fire Trader"
              width={640}
              height={640}
              className="h-36 w-36 shrink-0 rounded-full object-cover"
            />
            <p className="text-lg leading-relaxed text-[#3f443f]">
              Hi, I&apos;m Jake. I&apos;m a blockchain data analyst and
              I&apos;ve worked as a DeFi risk analyst. I teach crypto through
              Focused Fire Trader with one rule: survival and calibration over
              hype. No signals, no &ldquo;get rich quick&rdquo;, just the skills
              to do it safely yourself.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-t border-[#dedcd4]">
          <h2 className={`${H} text-3xl`}>Questions</h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-bold text-lg">{f.q}</dt>
                <dd className="mt-1 text-[#3f443f] leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
          <a
            href="#get-guide"
            className="mt-10 inline-block rounded-md bg-[#1f7a4a] px-6 py-3 font-medium text-white hover:bg-[#19633c] transition-colors"
          >
            Get the free guide
          </a>
          <p className="mt-6 text-[#3f443f] leading-relaxed">
            Want more help after the guide? A full course is coming soon, and
            everyone who gets the guide hears about it first, with an early bird
            discount.
          </p>
        </section>

        <footer className="py-10 border-t border-[#dedcd4] text-sm text-[#5f655f]">
          <p>
            Educational only. Not financial advice. No guaranteed returns.
            Crypto and DeFi carry real risk, including loss of your money.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Focused Fire Trader
          </p>
        </footer>
      </div>
    </div>
  );
}
