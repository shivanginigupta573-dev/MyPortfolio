"use client";

import React from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { projectsData } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-16 md:py-24 bg-canvas dark:bg-dark-bg transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-sky/20 dark:border-dark-surface pb-4">
          <div className="space-y-1">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink dark:text-dark-text tracking-tight">
              Selected Projects
            </h2>
            <p className="text-sm font-sans text-ink/70 dark:text-dark-muted">
              Web platforms, language analysis, and distributed execution.
            </p>
          </div>

          <ArrowLink href="/projects">
            View All Projects
          </ArrowLink>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
