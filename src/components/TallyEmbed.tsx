"use client";

import Script from "next/script";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

// Embeds a Tally form and lets Tally's script size the iframe to fit the form.
export function TallyEmbed({ formId, title }: { formId: string; title: string }) {
  const src = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
  return (
    <>
      <iframe
        data-tally-src={src}
        loading="lazy"
        width="100%"
        height="800"
        title={title}
        className="w-full border-0"
      />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.Tally?.loadEmbeds()}
        onReady={() => window.Tally?.loadEmbeds()}
      />
    </>
  );
}
