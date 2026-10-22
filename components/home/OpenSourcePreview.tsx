"use client";

import React from "react";
import { ExternalLink, GitBranch } from "lucide-react";
import { wagtailContribution } from "@/data/openSource";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function OpenSourcePreview() {
  return (
    <section className="relative border-t border-sky/20 bg-[#f4f8fd] py-16 transition-colors duration-300 dark:border-dark-surface dark:bg-[#0d192b] md:py-20">
      <div className="mx-auto max-w-7xl space-y-7 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand dark:text-dark-accent">
              Open source
            </p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-ink dark:text-dark-text sm:text-4xl">
              Wagtail
            </h2>
            <p className="mt-1 text-sm text-ink/70 dark:text-dark-muted">
              Bakery demo contributions
            </p>
          </div>
          <ArrowLink href="/open-source">All contributions</ArrowLink>
        </div>

        <article className="overflow-hidden rounded-2xl border border-white/90 bg-white/90 shadow-[0_18px_48px_-24px_rgba(35,80,130,0.3)] ring-1 ring-blue-900/[0.04] dark:border-slate-700/80 dark:bg-[#142238]/95 dark:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.55)] dark:ring-white/[0.04]">
          <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-700/80">
            <div aria-hidden="true" className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f6b7b1]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f2d28d]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#a8d4bc]" />
            </div>
            <span className="min-w-0 flex-1 truncate rounded-md border border-slate-100 bg-slate-50/80 px-3 py-1 text-center font-mono text-[9px] text-slate-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400">
              wagtail / bakerydemo
            </span>
            <GitBranch
              aria-hidden="true"
              className="h-3.5 w-3.5 text-slate-400"
            />
          </div>

          <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div className="flex flex-col justify-between gap-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand dark:text-dark-accent">
                  {wagtailContribution.role} · {wagtailContribution.year}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink dark:text-dark-text sm:text-3xl">
                  {wagtailContribution.projectName}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/70 dark:text-dark-muted">
                  {wagtailContribution.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://shivangini.pythonanywhere.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-blue-50 px-3 text-xs font-semibold text-ink transition hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:bg-blue-950/60 dark:text-blue-100 dark:hover:bg-blue-900/70 dark:focus-visible:ring-dark-accent dark:focus-visible:ring-offset-[#142238]"
                >
                  Demo site
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://github.com/shivanginigupta573-dev/wagtail-demo-site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-sky/35 px-3 text-xs font-semibold text-ink transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:border-slate-600 dark:text-dark-text dark:hover:border-dark-accent dark:hover:text-dark-accent dark:focus-visible:ring-dark-accent dark:focus-visible:ring-offset-[#142238]"
                >
                  Demo repository
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <ul className="divide-y divide-slate-100 dark:divide-slate-700/80">
              {wagtailContribution.contributions.map((record) => (
                <li
                  key={record.id}
                  className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 py-3 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0 flex-1">
                    <a
                      href={record.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-ink hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:text-dark-text dark:hover:text-dark-accent dark:focus-visible:ring-dark-accent"
                    >
                      <span className="font-mono text-[10px] text-brand dark:text-dark-accent">
                        {record.reference}
                      </span>{" "}
                      {record.title}
                    </a>
                    <p className="mt-1 text-[11px] leading-relaxed text-ink/65 dark:text-dark-muted">
                      {record.detail}
                      {record.relatedUrl && (
                        <>
                          {" "}
                          <a
                            href={record.relatedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-brand underline decoration-brand/40 underline-offset-2 hover:decoration-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:text-dark-accent dark:focus-visible:ring-dark-accent"
                          >
                            {record.relatedReference}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-1 font-mono text-[9px] ${
                      record.status === "Merged"
                        ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200"
                        : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    {record.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
