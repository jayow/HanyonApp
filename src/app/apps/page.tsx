import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { AppCard } from "@/components/AppCard";

export const metadata: Metadata = {
  title: "Apps",
  description: "Tools and projects built for Web3 and prediction markets.",
};

export default function AppsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Apps</h1>
      <p className="text-neutral-500 mb-12">
        Tools and dashboards for on-chain analytics and prediction markets.
      </p>
      <div className="grid gap-6">
        {projects.map((project) => (
          <AppCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
