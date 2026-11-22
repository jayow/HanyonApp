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
  title: { absolute: "Enroll: Zero to First Yield" },
  robots: { index: false, follow: false },
};

const PLANS = {
  self: { name: "Self paced", price: "4,999" },
  guided: { name: "4 week guided program", price: "19,999" },
} as const;

// Tally payment proof form.
const PROOF_FORM_LINK = "https://tally.so/r/Vpz8X6";

const H = `${fraunces.className} text-[#191b19]`;

export default async function EnrollPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;
  const p = plan === "guided" ? PLANS.guided : PLANS.self;

  return (
    <div
      className={`${dmSans.className} min-h-screen bg-[#f6f5f1] text-[#191b19]`}
    >
      <div className="h-1.5 bg-[#1f7a4a]" />
      <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
        <a
          href="/defi-course#offers"
          className="text-sm text-[#5f655f] underline underline-offset-4"
        >
          Back to the plans
        </a>
        <h1 className={`${H} mt-6 text-4xl`}>Enroll: {p.name}</h1>
        <p className={`${fraunces.className} mt-4 text-4xl text-[#1f7a4a]`}>
          PHP {p.price}
        </p>
        <p className="mt-1 text-[#5f655f]">Early bird price until Dec 5</p>

        <ol className="mt-10 space-y-3 text-lg">
          <li>
            <span className="font-bold">1.</span> Scan a QR code below and pay
            exactly PHP {p.price}.
          </li>
          <li>
            <span className="font-bold">2.</span> Screenshot your receipt.
          </li>
          <li>
            <span className="font-bold">3.</span>{" "}
            <a href={PROOF_FORM_LINK} className="underline underline-offset-4">
              Fill in this form
            </a>{" "}
            with your name, email and the screenshot.
          </li>
        </ol>
        <p className="mt-3 text-[#3f443f]">
          You&apos;ll get your course access within 24 hours.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-bold">Bank transfer (BPI, InstaPay)</p>
            <Image
              src="/pay-bpi-qr.png"
              alt="BPI InstaPay QR code"
              width={846}
              height={900}
              className="mt-3 w-full max-w-xs rounded-lg"
            />
          </div>
          <div>
            <p className="font-bold">GCash</p>
            <Image
              src="/pay-gcash-qr.jpg"
              alt="GCash QR code"
              width={515}
              height={1000}
              className="mt-3 w-full max-w-[220px] rounded-lg"
            />
          </div>
        </div>

        <p className="mt-10 text-sm text-[#5f655f]">
          Transfer fees may apply. Educational only. Not financial advice. No
          guaranteed returns.
        </p>
      </div>
    </div>
  );
}
