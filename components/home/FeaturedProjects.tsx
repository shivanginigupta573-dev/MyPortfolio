"use client";

import React from "react";
import { ProjectDesktopWindow } from "@/components/projects/ProjectDesktopWindow";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { projectsData } from "@/data/projects";

export function FeaturedProjects() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#edf6ff] py-16 transition-colors duration-300 dark:bg-[#0b1526] md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_16%_14%,rgba(255,255,255,0.82),transparent_38%),radial-gradient(ellipse_at_83%_29%,rgba(174,211,247,0.34),transparent_34%),radial-gradient(ellipse_at_68%_88%,rgba(255,255,255,0.62),transparent_34%)] dark:bg-[radial-gradient(ellipse_at_16%_14%,rgba(54,94,145,0.2),transparent_38%),radial-gradient(ellipse_at_83%_29%,rgba(49,91,148,0.2),transparent_34%),radial-gradient(ellipse_at_68%_88%,rgba(40,72,115,0.16),transparent_34%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-40 h-24 w-72 rounded-full bg-white/45 blur-3xl dark:bg-blue-200/[0.035]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-5 bottom-24 h-28 w-80 rounded-full bg-white/55 blur-3xl dark:bg-blue-200/[0.04]"
      />

      <div className="relative mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-sky/30 pb-5 dark:border-dark-surface">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brand dark:text-dark-accent">
              Selected work
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink dark:text-dark-text sm:text-5xl">
              Projects
            </h2>
          </div>
          <ArrowLink href="/projects">All projects</ArrowLink>
        </div>

        <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-12 xl:gap-x-7 xl:gap-y-8">
          {featuredProjects.map((project, index) => (
            <ProjectDesktopWindow
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
