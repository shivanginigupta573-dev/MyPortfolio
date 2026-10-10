import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { ProjectArchitecture } from "@/components/projects/ProjectArchitecture";
import { notFound } from "next/navigation";

export default function CommonRoomProjectPage() {
  const project = projectsData.find((p) => p.slug === "commonroom");

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <ProjectHeader project={project} />
      <ProjectArchitecture project={project} />
    </div>
  );
}
