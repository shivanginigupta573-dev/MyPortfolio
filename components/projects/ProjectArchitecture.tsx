import React from "react";
import { Project } from "@/types";
import { SystemFlow } from "@/components/diagrams/SystemFlow";
import { CommentClustering } from "@/components/diagrams/CommentClustering";
import { SwarmGrid } from "@/components/diagrams/SwarmGrid";

interface ProjectArchitectureProps {
  project: Project;
}

export function ProjectArchitecture({ project }: ProjectArchitectureProps) {
  return (
    <div className="py-8 space-y-6">
      <h3 className="font-mono text-lg font-bold text-ink uppercase tracking-wide border-b border-sky/30 pb-2">
        // Technical Architecture & Execution Blueprint
      </h3>

      <div className="text-sm font-sans text-ink/80 leading-relaxed space-y-4">
        <p>{project.fullDescription || project.description}</p>
      </div>

      {/* Embed appropriate interactive diagram based on project */}
      <div className="mt-8">
        {project.id === "commonroom" && <SystemFlow />}
        {project.id === "commentlens" && <CommentClustering />}
        {project.id === "swarm-grid" && <SwarmGrid />}
      </div>
    </div>
  );
}
