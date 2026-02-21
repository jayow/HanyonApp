import type { Project } from "@/types";

export function AppCard({ project }: { project: Project }) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-neutral-200 rounded-lg p-6 hover:border-neutral-400 transition-colors group"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-semibold text-lg group-hover:underline underline-offset-4 decoration-neutral-400">
          {project.name}
        </h2>
        <svg
          className="w-4 h-4 text-neutral-400 mt-1 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
      <p className="text-neutral-500 mt-2 text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono text-neutral-500 bg-neutral-100 rounded px-2 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
