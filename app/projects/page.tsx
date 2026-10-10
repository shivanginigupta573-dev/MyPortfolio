import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-8">
      <div className="max-w-3xl space-y-3">
        <SectionLabel number="01">All Systems &amp; Software</SectionLabel>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
          Engineering Projects
        </h1>
        <p className="text-base text-ink/75 font-sans leading-relaxed">
          Detailed technical breakdowns of full-stack web platforms, NLP processing systems, and multi-agent algorithms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
