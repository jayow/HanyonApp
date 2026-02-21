import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "polymarket-dashboard",
    description:
      "Interactive dashboard for tracking and analyzing Polymarket prediction market data, positions, and market trends.",
    techStack: ["TypeScript", "React", "Polymarket API"],
    githubUrl: "https://github.com/jayow/polymarket-dashboard",
    category: "analytics",
  },
  {
    name: "PolyPNL",
    description:
      "Profit and loss tracker for Polymarket positions. Monitors portfolio performance across prediction market bets.",
    techStack: ["TypeScript", "Polymarket API"],
    githubUrl: "https://github.com/jayow/PolyPNL",
    category: "analytics",
  },
  {
    name: "solanaliduitydepth",
    description:
      "Analyzer for Solana liquidity depth across DEX pools. Visualizes order book depth and liquidity distribution.",
    techStack: ["JavaScript", "Solana Web3.js"],
    githubUrl: "https://github.com/jayow/solanaliduitydepth",
    category: "defi",
  },
  {
    name: "polymer-testnet",
    description:
      "Tools and utilities for interacting with the Polymer testnet. Includes deployment scripts and testing helpers.",
    techStack: ["JavaScript", "Polymer"],
    githubUrl: "https://github.com/jayow/polymer-testnet",
    category: "tools",
  },
  {
    name: "solstice_presale",
    description:
      "Presale status tracker for Solstice token sale via Legion. Monitors allocation and sale progress.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/jayow/solstice_presale",
    category: "tools",
  },
  {
    name: "moltdefense",
    description: "Defense analysis and monitoring tool.",
    techStack: ["JavaScript"],
    githubUrl: "https://github.com/jayow/moltdefense",
    category: "other",
  },
];
