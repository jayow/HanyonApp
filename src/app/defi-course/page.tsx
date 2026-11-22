import type { Metadata } from "next";
import Image from "next/image";
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

export const metadata: Metadata = {
  title: { absolute: "Zero to First Yield: a beginner DeFi course" },
  description:
    "Learn crypto and DeFi from zero, safely, at your own pace. Join the early bird list.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
  openGraph: {
    title: "Zero to First Yield",
    description:
      "Want to learn crypto, but scared and don't know where to start? Join the early bird list.",
    url: "https://hanyon.app/defi-course",
  },
};

const worries = [
  "Scared of losing money",
  "Too many scams",
  "Wallets are confusing",
  "No idea where to start",
];

const modules = [
  "Crypto and DeFi Basics",
  "Navigating Crypto Securely",
  "Crypto Wallet Setup",
  "Exchange On and Off Ramping",
  "How to Find Yield",
  "Earning Yield on Your First DeFi Position",
  "DeFi Yield, Risks and Managing Your Position",
  "DeFi Primitives: Lending, Pools, Yield Tokenization",
];

const outcomes = [
  "Your own secure wallet",
  "Your first DeFi position",
  "A full trip back to your bank",
  "A plan you can run on your own",
];

const plans = [
  {
    name: "Self paced",
    price: "4,999",
    regular: "7,999",
    note: "Learn at your own pace",
    items: ["All 8 modules", "Step by step videos", "Slides and checklists"],
    href: "/defi-course/enroll?plan=self",
    featured: false,
  },
  {
    name: "4 week guided program",
    price: "19,999",
    regular: "25,000",
    note: "Only 10 seats · live calls start Dec 10",
    items: [
      "Everything in self paced",
      "Weekly live calls",
      "Q&A and a review of your plan",
    ],
    href: "/defi-course/enroll?plan=guided",
    featured: true,
  },
];

const faqs = [
  { q: "Need experience?", a: "No. We start from zero." },
  { q: "How much money?", a: "A small amount you can afford to lose." },
  {
    q: "When do lessons start?",
    a: "The video lessons are available Dec 10.",
  },
  { q: "Financial advice?", a: "No. Education only. No guaranteed returns." },
];

const H = `${fraunces.className} text-[#191b19]`;

export default function DefiCoursePage() {
  return (
    <div
      className={`${dmSans.className} min-h-screen bg-[#f6f5f1] text-[#191b19]`}
    >
      <div className="h-1.5 bg-[#1f7a4a]" />
      <div className="max-w-3xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-16 pb-14 sm:pt-24">
          <h1 className={`${H} text-4xl sm:text-6xl leading-[1.05]`}>
            Learn crypto. Earn your first DeFi yield. Safely.
          </h1>
          <a
            href="#offers"
            className="mt-8 inline-block rounded-md bg-[#1f7a4a] px-7 py-4 text-lg font-medium text-white hover:bg-[#19633c] transition-colors"
          >
            See the plans
          </a>
        </section>

        {/* Problem */}
        <section className="py-12 border-t border-[#dedcd4]">
          <h2 className={`${H} text-3xl`}>Sound familiar?</h2>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {worries.map((w) => (
              <li
                key={w}
                className="rounded-md bg-[#e7eee8] px-5 py-5 text-lg font-bold leading-snug"
              >
                &ldquo;{w}&rdquo;
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg text-[#3f443f]">
            This course fixes all four.
          </p>
        </section>

        {/* Topics */}
        <section className="py-12 border-t border-[#dedcd4]">
          <h2 className={`${H} text-3xl`}>What you&apos;ll learn</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {modules.map((m, i) => (
              <li
                key={m}
                className="flex items-center gap-4 rounded-md border border-[#dedcd4] bg-white/60 px-5 py-4"
              >
                <span
                  className={`${fraunces.className} text-3xl text-[#1f7a4a]`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-bold leading-snug">{m}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Outcomes */}
        <section className="py-12 border-t border-[#dedcd4]">
          <h2 className={`${H} text-3xl`}>By the end, you&apos;ll have</h2>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {outcomes.map((o) => (
              <li
                key={o}
                className="rounded-md bg-[#1f7a4a] px-5 py-5 text-lg font-bold leading-snug text-white"
              >
                {o}
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section className="py-12 border-t border-[#dedcd4]">
          <div className="flex items-center gap-6">
            <Image
              src="/defi-course-jake.jpg"
              alt="Jake, the course teacher"
              width={640}
              height={640}
              className="h-28 w-28 shrink-0 rounded-full object-cover"
            />
            <div>
              <h2 className={`${H} text-2xl`}>Hi, I&apos;m Jake</h2>
              <p className="mt-2 text-lg text-[#3f443f]">
                Educator, crypto trader and heavy DeFi user. Blockchain data
                analyst and former DeFi risk analyst.
              </p>
            </div>
          </div>
        </section>

        {/* Offers */}
        <section
          id="offers"
          className="scroll-mt-8 py-12 border-t border-[#dedcd4]"
        >
          <p className="inline-block rounded-full bg-[#e7eee8] px-4 py-1 text-sm font-bold text-[#1f7a4a]">
            Presale · early bird until Dec 5
          </p>
          <h2 className={`${H} mt-4 text-3xl`}>Pick your plan</h2>
          <p className="mt-3 text-lg text-[#3f443f]">
            Lock in the early bird price now. Video lessons available Dec 10.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-lg p-6 ${
                  p.featured
                    ? "bg-[#1f7a4a] text-white"
                    : "border border-[#dedcd4] bg-white/60"
                }`}
              >
                <p className="text-lg font-bold">{p.name}</p>
                <p className={`mt-1 text-sm ${p.featured ? "text-white/80" : "text-[#5f655f]"}`}>
                  {p.note}
                </p>
                <p className={`${fraunces.className} mt-5 text-4xl`}>
                  PHP {p.price}
                </p>
                <p className={`mt-1 text-sm line-through ${p.featured ? "text-white/70" : "text-[#5f655f]"}`}>
                  PHP {p.regular}
                </p>
                <ul className="mt-5 space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className={p.featured ? "text-white" : "text-[#1f7a4a]"}>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  className={`mt-6 block rounded-md px-6 py-3 text-center font-medium transition-colors ${
                    p.featured
                      ? "bg-white text-[#1f7a4a] hover:bg-[#e7eee8]"
                      : "bg-[#1f7a4a] text-white hover:bg-[#19633c]"
                  }`}
                >
                  Enroll
                </a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-[#5f655f]">
            Pay by bank transfer or GCash. Not ready yet?{" "}
            <a href="/free-guide" className="underline underline-offset-4">
              Get the free guide
            </a>
            .
          </p>
        </section>

        {/* FAQ */}
        <section className="py-12 border-t border-[#dedcd4]">
          <h2 className={`${H} text-3xl`}>Questions</h2>
          <dl className="mt-6 space-y-4">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-bold text-lg">{f.q}</dt>
                <dd className="text-[#3f443f]">{f.a}</dd>
              </div>
            ))}
          </dl>
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
