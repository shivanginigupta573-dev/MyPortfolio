import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-sky/30 dark:border-dark-surface bg-canvas dark:bg-dark-surface p-6 shadow-soft dark:shadow-soft-dark transition-all duration-200 hover:-translate-y-1 hover:border-brand dark:hover:border-dark-accent">
      <div className="space-y-3">
        {/* Category & Index */}
        <div className="flex items-center justify-between font-sans text-xs font-semibold text-brand dark:text-dark-accent">
          <span>0{index + 1} — {project.category}</span>
          <span className="text-ink/60 dark:text-dark-muted font-normal">{project.role}</span>
        </div>

        {/* Project Title */}
        <h3 className="font-display text-2xl font-bold text-ink dark:text-dark-text group-hover:text-brand dark:group-hover:text-dark-accent transition-colors">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        {/* Short Tagline */}
        <p className="text-sm font-sans font-medium text-ink/80 dark:text-dark-text">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm font-sans text-ink/70 dark:text-dark-muted leading-relaxed">
          {project.description}
        </p>

        {/* Key Engineering Detail */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="pt-2">
            <p className="text-xs font-sans text-ink/80 dark:text-dark-muted">
              <strong className="text-brand dark:text-dark-accent font-semibold">Engineering Note: </strong>
              {project.architectureHighlights[0]}
            </p>
          </div>
        )}
      </div>

      {/* Footer Tech Stack & Link */}
      <div className="mt-6 border-t border-sky/20 dark:border-dark-bg pt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5 text-xs font-sans text-ink/70 dark:text-dark-muted">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded bg-ice/60 dark:bg-dark-bg px-2 py-0.5 text-[11px]">
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-brand dark:text-dark-accent hover:underline"
        >
          <span>View Project</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
