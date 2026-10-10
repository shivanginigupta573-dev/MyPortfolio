import React from "react";
import { Project } from "@/types";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="border-b border-sky/30 pb-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand hover:text-ink transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <span className="font-mono text-xs font-bold text-brand uppercase bg-ice px-2.5 py-1 rounded border border-sky/40">
          {project.category}
        </span>
        <span className="font-mono text-xs text-ink/70">Role: {project.role}</span>
      </div>

      <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-ink">
        {project.title}
      </h1>
      <p className="mt-2 text-lg font-mono text-ink/80">{project.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <TechTag key={tech} name={tech} size="md" />
        ))}
      </div>
    </div>
  );
}
