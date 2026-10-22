import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { openSourceData } from "@/data/openSource";
import { TechTag } from "@/components/ui/TechTag";
import { GitPullRequest, ExternalLink } from "lucide-react";

export default function OpenSourcePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-8">
      <div className="max-w-3xl space-y-3">
        <SectionLabel number="01">Community &amp; Open Ecosystem</SectionLabel>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight dark:text-dark-text">
          Open Source Contributions
        </h1>
        <p className="text-base text-ink/75 font-sans leading-relaxed dark:text-dark-muted">
          Open source contributions, pull requests, and software community projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {openSourceData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-xl border border-sky/40 bg-canvas p-6 shadow-notebook dark:border-dark-surface dark:bg-dark-surface"
          >
            <div>
              <div className="flex items-center justify-between border-b border-sky/20 pb-3 mb-3 dark:border-dark-bg">
              <div className="flex items-center gap-2 text-brand font-mono text-xs font-bold dark:text-dark-accent">
                  <GitPullRequest className="h-4 w-4" />
                  <span>{item.role}</span>
                </div>
                <span className="font-mono text-[11px] text-ink/60 bg-ice px-2 py-0.5 rounded border border-sky/30 dark:border-slate-600 dark:bg-dark-bg dark:text-dark-muted">
                  {item.year}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2 dark:text-dark-text">
                <span>{item.projectName}</span>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${item.projectName}`}
                    className="text-sky hover:text-brand transition-colors dark:text-dark-muted dark:hover:text-dark-accent"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </h3>

              <p className="mt-2 text-xs font-sans text-ink/75 leading-relaxed dark:text-dark-muted">
                {item.description}
              </p>

              {item.contributions && (
                <ul className="mt-4 space-y-3 border-t border-sky/20 pt-3 dark:border-dark-bg">
                  {item.contributions.map((contribution) => (
                    <li key={contribution.id} className="text-xs leading-relaxed">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <a
                          href={contribution.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-brand hover:underline dark:text-dark-accent"
                        >
                          {contribution.reference}: {contribution.title}
                        </a>
                        <span className="rounded-full bg-ice px-2 py-0.5 font-mono text-[10px] text-ink/70 dark:bg-dark-bg dark:text-dark-muted">
                          {contribution.status}
                        </span>
                      </div>
                      <p className="mt-1 text-ink/70 dark:text-dark-muted">
                        {contribution.detail}
                        {contribution.relatedUrl && (
                          <>
                            {" "}
                            <a
                              href={contribution.relatedUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-brand hover:underline dark:text-dark-accent"
                            >
                              {contribution.relatedReference}
                            </a>
                          </>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 rounded border border-sky/30 bg-ice/40 p-2.5 text-xs font-sans text-ink/80 dark:border-slate-600 dark:bg-dark-bg dark:text-dark-muted">
                <strong className="font-mono font-semibold text-brand dark:text-dark-accent">Impact: </strong>
                {item.impact}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-sky/20 pt-4 dark:border-dark-bg">
              {item.technologies.map((tech) => (
                <TechTag key={tech} name={tech} size="sm" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
