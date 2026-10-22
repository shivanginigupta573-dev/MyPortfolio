"use client";

import React from "react";
import { ArrowUpRight, Code2, Award, Terminal } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";

export function ProblemSolving() {
  const leetcodeUrl = siteConfig.socials.leetcode ?? "https://leetcode.com/u/Shivangini/";
  const githubUrl = siteConfig.socials.github;

  return (
    <section
      id="dsa"
      className="relative border-t border-sky/30 bg-[#FAFCFE] py-16 transition-colors duration-300 dark:border-slate-800 dark:bg-[#0B1220] md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-sky/20 pb-5 dark:border-slate-800">
          <div>
            <SectionLabel number="04">Algorithmic Practice</SectionLabel>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink dark:text-dark-text sm:text-5xl">
              DSA &amp; Problem Solving
            </h2>
          </div>
          <p className="max-w-md font-sans text-xs text-ink/70 dark:text-dark-muted sm:text-sm">
            Core focus on data structures, algorithmic complexity, and structured problem decomposition.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
          {/* Main Stat & Context Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-sky/30 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-[#111C2E]/90 lg:col-span-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ice px-3 py-1 font-mono text-[11px] font-semibold text-brand dark:bg-blue-950/70 dark:text-blue-300">
                  <Award className="h-3.5 w-3.5" />
                  <span>Resume Reported</span>
                </span>
                <span className="font-mono text-xs text-ink/60 dark:text-dark-muted">
                  C++ &bull; Python
                </span>
              </div>

              <div>
                <p className="font-display text-5xl font-bold tracking-tight text-ink dark:text-dark-text sm:text-6xl">
                  450+
                </p>
                <p className="mt-1 font-sans text-sm font-semibold text-brand dark:text-dark-accent">
                  Problems solved across LeetCode, CodeChef &amp; Codeforces
                </p>
              </div>

              <p className="font-sans text-xs leading-relaxed text-ink/75 dark:text-dark-muted sm:text-sm">
                Consistent practice focusing on time and space complexity, edge-case analysis, and clean algorithmic implementation.
              </p>
            </div>

            {/* Core DSA Topics */}
            <div className="mt-6 border-t border-sky/20 pt-4 dark:border-slate-800">
              <p className="font-mono text-[10px] uppercase tracking-wider text-ink/60 dark:text-dark-muted">
                Key topic coverage
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 font-mono text-[10px] text-ink/80 dark:text-slate-300">
                {[
                  "Arrays & Hashing",
                  "Binary Search",
                  "Trees & Graphs",
                  "Dynamic Programming",
                  "Two Pointers",
                  "Recursion",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md border border-sky/30 bg-ice/40 px-2 py-0.5 dark:border-slate-700 dark:bg-slate-800/60"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Platform Profiles */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {/* LeetCode Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-sky/30 bg-white/80 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/60 dark:border-slate-800 dark:bg-[#111C2E]/90 dark:hover:border-blue-500">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <Code2 className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink dark:text-dark-text">
                        LeetCode
                      </h3>
                      <p className="font-mono text-[11px] text-ink/60 dark:text-dark-muted">
                        @Shivangini
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
                    Verified
                  </span>
                </div>

                <p className="font-sans text-xs text-ink/75 dark:text-dark-muted leading-relaxed">
                  Regular problem solving with strong emphasis on algorithmic patterns, space-time efficiency, and interview preparation.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-sky/20 dark:border-slate-800">
                <a
                  href={leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Shivangini's LeetCode Profile (opens in new tab)"
                  className="inline-flex w-full items-center justify-between rounded-lg bg-ice/50 px-3 py-2 font-mono text-xs font-semibold text-brand transition hover:bg-ice hover:text-ink dark:bg-slate-800/60 dark:text-blue-300 dark:hover:bg-slate-800"
                >
                  <span>leetcode.com/u/Shivangini</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-sky/30 bg-white/80 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/60 dark:border-slate-800 dark:bg-[#111C2E]/90 dark:hover:border-blue-500">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                      <Terminal className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink dark:text-dark-text">
                        GitHub
                      </h3>
                      <p className="font-mono text-[11px] text-ink/60 dark:text-dark-muted">
                        @shivanginigupta573-dev
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
                    Verified
                  </span>
                </div>

                <p className="font-sans text-xs text-ink/75 dark:text-dark-muted leading-relaxed">
                  Repository implementations, open source pull requests, full-stack systems, and algorithmic codebases.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-sky/20 dark:border-slate-800">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Shivangini's GitHub Profile (opens in new tab)"
                  className="inline-flex w-full items-center justify-between rounded-lg bg-ice/50 px-3 py-2 font-mono text-xs font-semibold text-brand transition hover:bg-ice hover:text-ink dark:bg-slate-800/60 dark:text-blue-300 dark:hover:bg-slate-800"
                >
                  <span>github.com/shivanginigupta573-dev</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Additional Profiles Note */}
            <div className="rounded-xl border border-sky/20 bg-ice/30 p-4 text-xs font-sans text-ink/70 dark:border-slate-800 dark:bg-[#0c1728] dark:text-dark-muted sm:col-span-2">
              <span className="font-mono font-semibold text-brand dark:text-dark-accent">
                Note on CodeChef &amp; Codeforces:{" "}
              </span>
              Academic resume reports activity and 450+ combined problems across LeetCode, CodeChef, and Codeforces. Individual platform profile handles are provided upon request during recruitment reviews.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
