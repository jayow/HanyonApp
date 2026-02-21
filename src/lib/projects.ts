import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "polymarket-dashboard",
    description:
      "Interactive dashboard for tracking and analyzing Polymarket prediction market data, positions, and market trends.",
    techStack: ["TypeScript", "React", "Polymarket API"],
    githubUrl: "https://github.com/jayow/polymarket-dashboard",
    url: "https://polyfilter.hanyon.app/",
    category: "analytics",
  },
  {
    name: "PolyPNL",
    description:
      "Profit and loss tracker for Polymarket positions. Monitors portfolio performance across prediction market bets.",
    techStack: ["TypeScript", "Polymarket API"],
    githubUrl: "https://github.com/jayow/PolyPNL",
    url: "https://polypnl.hanyon.app/",
    category: "analytics",
  },
  {
    name: "solanaliduitydepth",
    description:
      "Analyzer for Solana liquidity depth across DEX pools. Visualizes order book depth and liquidity distribution.",
    techStack: ["JavaScript", "Solana Web3.js"],
    githubUrl: "https://github.com/jayow/solanaliduitydepth",
    url: "https://liquiditydepth.hanyon.app/",
    category: "defi",
  },
  {
    name: "solstice_presale",
    description:
      "Presale status tracker for Solstice token sale via Legion. Monitors allocation and sale progress.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/jayow/solstice_presale",
    url: "https://solstice.hanyon.app/",
    category: "tools",
  },
  {
    name: "infinex-sale-monitor",
    description:
      "Real-time monitoring dashboard for the Infinex token presale on Base. Tracks sale progress with live countdown and metrics.",
    techStack: ["TypeScript", "Next.js", "Base"],
    githubUrl: "https://github.com/jayow/infinex",
    url: "https://infinex.hanyon.app/",
    category: "analytics",
  },
  {
    name: "moltdefense",
    description: "Defense analysis and monitoring tool.",
    techStack: ["JavaScript"],
    githubUrl: "https://github.com/jayow/moltdefense",
    url: "https://www.moltdefense.xyz/",
    category: "other",
  },
];
