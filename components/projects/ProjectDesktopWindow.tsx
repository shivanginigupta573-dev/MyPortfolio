import Image from "next/image";
import { ArrowUpRight, GitBranch, Minus, Square, X } from "lucide-react";
import { Project } from "@/types";

interface ProjectDesktopWindowProps {
  project: Project;
  index: number;
}

function WindowControls() {
  return (
    <div aria-hidden="true" className="flex items-center gap-1.5 text-sky/80">
      <span className="h-2.5 w-2.5 rounded-full bg-[#f6b7b1]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#f2d28d]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#a8d4bc]" />
    </div>
  );
}

function StudySpherePreview() {
  return (
    <div
      aria-label="Illustrative StudySphere interface preview showing study planning and a consistency heatmap"
      className="h-full min-h-48 bg-[#f6f9ff] p-3 text-slate-700 dark:bg-[#101e31] dark:text-slate-200 sm:min-h-56 sm:p-4"
    >
      <div className="flex h-full min-h-40 overflow-hidden rounded-lg border border-slate-200/80 bg-white dark:border-slate-700 dark:bg-[#142238]">
        <div className="hidden w-24 shrink-0 border-r border-slate-100 bg-[#f8faff] p-3 text-[9px] text-slate-500 dark:border-slate-700 dark:bg-[#17263c] sm:block">
          <p className="mb-4 font-semibold text-[#315d9c] dark:text-blue-200">
            StudySphere
          </p>
          <p className="mb-2 rounded bg-blue-50 px-2 py-1 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200">
            Study plan
          </p>
          <p className="mb-2 px-2 py-1">Notes</p>
          <p className="px-2 py-1">Resources</p>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-3 p-3 sm:p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-[0.16em] text-slate-400">
                Illustrative interface
              </p>
              <p className="mt-1 text-xs font-semibold sm:text-sm">Study plan</p>
            </div>
            <span className="rounded-full bg-blue-50 px-2 py-1 text-[8px] text-blue-700 dark:bg-blue-950/60 dark:text-blue-200">
              Weekly view
            </span>
          </div>
          <div className="grid flex-1 grid-cols-[1fr_auto] gap-3">
            <div className="space-y-2 rounded-md border border-slate-100 p-2 dark:border-slate-700">
              <div className="h-1.5 w-2/5 rounded-full bg-blue-200 dark:bg-blue-800" />
              <div className="h-1.5 w-4/5 rounded-full bg-slate-100 dark:bg-slate-700" />
              <div className="h-1.5 w-3/5 rounded-full bg-slate-100 dark:bg-slate-700" />
              <div className="h-1.5 w-2/3 rounded-full bg-slate-100 dark:bg-slate-700" />
            </div>
            <div className="flex w-28 flex-col justify-between rounded-md border border-slate-100 p-2 dark:border-slate-700 sm:w-36">
              <span className="text-[8px] text-slate-500 dark:text-slate-400">
                Consistency
              </span>
              <div
                aria-hidden="true"
                className="grid grid-cols-7 gap-1"
              >
                {Array.from({ length: 28 }, (_, cell) => (
                  <span
                    key={cell}
                    className={`aspect-square rounded-[2px] ${
                      cell % 5 === 0
                        ? "bg-blue-200 dark:bg-blue-800"
                        : cell % 3 === 0
                          ? "bg-blue-100 dark:bg-blue-900"
                          : "bg-slate-100 dark:bg-slate-700"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommentLensPreview() {
  return (
    <div
      aria-label="Illustrative CommentLens interface preview showing its comment analysis pipeline"
      className="h-full min-h-48 bg-[#f4f8ff] p-3 text-slate-700 dark:bg-[#101e31] dark:text-slate-200 sm:min-h-56 sm:p-4"
    >
      <div className="flex h-full min-h-40 flex-col rounded-lg border border-slate-200/80 bg-white p-3 dark:border-slate-700 dark:bg-[#142238] sm:p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-[8px] uppercase tracking-[0.16em] text-slate-400">
              Illustrative interface
            </p>
            <p className="mt-1 text-xs font-semibold sm:text-sm">
              Comment analysis
            </p>
          </div>
          <span className="rounded-md border border-slate-200 px-2 py-1 text-[8px] text-slate-500 dark:border-slate-600 dark:text-slate-300">
            YouTube comments
          </span>
        </div>
        <div className="grid flex-1 grid-cols-4 items-center gap-2">
          {[
            "Clean",
            "Embed",
            "Reduce",
            "Cluster",
          ].map((stage, stageIndex) => (
            <div className="flex min-w-0 flex-col items-center gap-2" key={stage}>
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-[9px] font-medium sm:h-11 sm:w-11 ${
                  stageIndex === 3
                    ? "border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-700 dark:bg-blue-950/60 dark:text-blue-200"
                    : "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                0{stageIndex + 1}
              </div>
              <span className="text-center text-[8px] sm:text-[9px]">
                {stage}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-[8px] text-slate-500 dark:border-slate-700 dark:text-slate-400">
          <span>Sentence Transformers</span>
          <span>UMAP</span>
          <span>HDBSCAN</span>
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.id === "commonroom") {
    return (
      <div className="relative aspect-[1.85] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src="/images/commonroom-homepage.png"
          alt="CommonRoom campus marketplace homepage"
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-[center_80%]"
        />
      </div>
    );
  }

  if (project.id === "studysphere") {
    return <StudySpherePreview />;
  }

  return <CommentLensPreview />;
}

export function ProjectDesktopWindow({
  project,
  index,
}: ProjectDesktopWindowProps) {
  return (
    <article
      className={`group relative min-w-0 overflow-hidden rounded-2xl border border-white/90 bg-white/90 shadow-[0_18px_48px_-24px_rgba(35,80,130,0.36)] ring-1 ring-blue-900/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-24px_rgba(35,80,130,0.42)] dark:border-slate-700/80 dark:bg-[#142238]/95 dark:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.62)] dark:ring-white/[0.04] dark:hover:shadow-[0_24px_55px_-24px_rgba(20,75,145,0.56)] ${
        project.id === "commonroom"
          ? "xl:col-span-7 xl:-rotate-[0.35deg]"
          : project.id === "studysphere"
            ? "xl:col-start-9 xl:col-span-4 xl:mt-10 xl:rotate-[0.35deg]"
            : "xl:col-start-4 xl:col-span-6 xl:-mt-3"
      }`}
    >
      <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-700/80">
        <WindowControls />
        <span className="min-w-0 flex-1 truncate rounded-md border border-slate-100 bg-slate-50/80 px-3 py-1 text-center font-mono text-[9px] text-slate-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400">
          {project.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </span>
        <div aria-hidden="true" className="flex items-center gap-1 text-slate-400">
          <Minus className="h-3 w-3" />
          <Square className="h-2.5 w-2.5" />
          <X className="h-3 w-3" />
        </div>
      </div>

      <ProjectPreview project={project} />

      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand dark:text-dark-accent">
              0{index + 1} / {project.category}
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-ink dark:text-dark-text sm:text-[1.7rem]">
              {project.title}
            </h3>
            <p className="mt-1 max-w-xl text-xs leading-relaxed text-ink/70 dark:text-dark-muted sm:text-sm">
              {project.description}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source repository on GitHub`}
                title={`${project.title} on GitHub`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sky/40 text-ink transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:border-slate-600 dark:text-dark-text dark:hover:border-dark-accent dark:hover:text-dark-accent dark:focus-visible:ring-dark-accent dark:focus-visible:ring-offset-[#142238]"
              >
                <GitBranch className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-blue-50 px-3 text-[11px] font-semibold text-ink transition hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:bg-blue-950/60 dark:text-blue-100 dark:hover:bg-blue-900/70 dark:focus-visible:ring-dark-accent dark:focus-visible:ring-offset-[#142238]"
              >
                Live site
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3 dark:border-slate-700/80">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-sky/25 bg-ice/50 px-2.5 py-1 text-[9px] text-ink/75 dark:border-slate-600 dark:bg-slate-800/70 dark:text-dark-muted"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
