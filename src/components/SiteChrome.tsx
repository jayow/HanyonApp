"use client";

import { usePathname } from "next/navigation";

// Pages that use their own standalone layout (no Hanyon header or footer).
const STANDALONE_PATHS = ["/defi-course", "/free-guide"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (STANDALONE_PATHS.some((p) => pathname?.startsWith(p))) return null;
  return <>{children}</>;
}
