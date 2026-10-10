"use client";

import React from "react";
import { openSourceData } from "@/data/openSource";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { GitPullRequest, ExternalLink } from "lucide-react";

export function OpenSourcePreview() {
  return (
    <section className="relative py-16 md:py-24 border-t border-sky/20 dark:border-dark-surface bg-ice/30 dark:bg-dark-surface/40 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-sky/20 dark:border-dark-surface pb-4">
          <div className="space-y-1">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink dark:text-dark-text tracking-tight">
              Open Source
            </h2>
            <p className="text-sm font-sans text-ink/70 dark:text-dark-muted">
              Contributions, bug fixes, and community projects.
            </p>
          </div>

          <ArrowLink href="/open-source">
            View Contributions
          </ArrowLink>
        </div>

        {/* Minimal Editorial List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openSourceData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-sky/30 dark:border-dark-surface bg-canvas dark:bg-dark-surface p-6 shadow-soft dark:shadow-soft-dark"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-sans text-brand dark:text-dark-accent">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <GitPullRequest className="h-3.5 w-3.5" />
                    {item.role}
                  </span>
                  <span className="text-ink/50 dark:text-dark-muted">{item.year}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-ink dark:text-dark-text flex items-center gap-1.5">
                  <span>{item.projectName}</span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky hover:text-brand dark:text-dark-muted dark:hover:text-dark-accent"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </h3>

                <p className="text-xs font-sans text-ink/75 dark:text-dark-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-sky/20 dark:border-dark-bg text-xs font-sans text-ink/70 dark:text-dark-muted">
                <span className="font-semibold text-brand dark:text-dark-accent">Focus: </span>
                {item.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
