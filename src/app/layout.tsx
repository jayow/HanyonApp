import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://hanyon.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hanyon Analytics",
    template: "%s | Hanyon Analytics",
  },
  description:
    "Independent DeFi research, on-chain analytics, and open-source tools for Web3 and prediction markets.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Hanyon Analytics",
    title: "Hanyon Analytics",
    description:
      "Independent DeFi research, on-chain analytics, and open-source tools for Web3 and prediction markets.",
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
    title: "Hanyon Analytics",
    description:
      "Independent DeFi research, on-chain analytics, and open-source tools for Web3 and prediction markets.",
    images: ["/logo.png"],
    creator: "@jayowtrades",
    site: "@jayowtrades",
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Hanyon Analytics",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  description:
    "Independent research on DeFi, on-chain capital markets, prediction markets, and the convergence of crypto infrastructure with traditional finance.",
  founder: { "@id": `${SITE_URL}/#author` },
  sameAs: [
    "https://x.com/jayowtrades",
    "https://github.com/jayow",
    "https://dune.com/jayow",
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#author`,
  name: "jayow",
  alternateName: "jayowtrades",
  url: SITE_URL,
  sameAs: [
    "https://x.com/jayowtrades",
    "https://github.com/jayow",
    "https://dune.com/jayow",
  ],
  jobTitle: "Independent Researcher",
  worksFor: { "@id": `${SITE_URL}/#organization` },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Hanyon Analytics",
  description:
    "Independent research on DeFi, on-chain capital markets, prediction markets, and tokenization.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-neutral-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationJsonLd,
              personJsonLd,
              websiteJsonLd,
            ]),
          }}
        />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
