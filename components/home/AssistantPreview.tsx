"use client";

import React, { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Sparkles, Bot, ArrowRight, MessageSquare, Code2 } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

function suggestedPrompts(firstName: string) {
  return [
    "What is CommonRoom's architecture stack?",
    "How does Swarm Grid handle concurrency?",
    "Explain CommentLens NLP pipeline.",
    `What are ${firstName}'s key engineering principles?`,
  ];
}

export function AssistantPreview() {
  const firstName = siteConfig.name.split(" ")[0] ?? siteConfig.name;
  const prompts = suggestedPrompts(firstName);
  const [selectedPrompt, setSelectedPrompt] = useState(prompts[0]);

  return (
    <section className="relative py-16 md:py-24 border-t border-sky/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-sky/40 bg-gradient-to-br from-canvas via-ice/40 to-canvas p-8 md:p-12 shadow-notebook">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4">
              <SectionLabel number="05">Interactive Assistant Preview</SectionLabel>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
                Ask My Portfolio
              </h2>

              <p className="text-base text-ink/80 font-sans leading-relaxed">
                Query this portfolio directly. Get grounded answers regarding system architecture decisions, backend endpoints, concurrency design, and technical skills.
              </p>

              <div className="pt-2">
                <Button href="/ask" size="lg">
                  <Sparkles className="h-4 w-4 text-brand" />
                  <span>Launch Interactive Assistant</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Teaser Demo Box */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-sky/40 bg-canvas p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-sky/20 pb-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-brand font-bold">
                    <Bot className="h-4 w-4" />
                    <span>Portfolio AI Context Assistant</span>
                  </div>
                  <span className="text-[11px] text-ink/60 bg-ice px-2 py-0.5 rounded border border-sky/30">
                    Preview Mode
                  </span>
                </div>

                {/* Sample Prompt Selector */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-ink/70">// Try sample queries:</div>
                  <div className="flex flex-wrap gap-2">
                    {prompts.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => setSelectedPrompt(prompt)}
                        className={`rounded-md px-3 py-1.5 font-mono text-xs text-left transition-all ${
                          selectedPrompt === prompt
                            ? "bg-brand text-canvas font-medium shadow-sm"
                            : "bg-ice/70 text-ink hover:bg-ice border border-sky/30"
                        }`}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Assistant Answer Box */}
                <div className="rounded-lg bg-ice/40 p-4 border border-sky/30 font-mono text-xs text-ink/90 space-y-2">
                  <div className="flex items-center gap-1.5 text-brand font-bold text-[11px]">
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Query: {selectedPrompt}</span>
                  </div>
                  <p className="font-sans text-xs text-ink/80 leading-relaxed border-t border-sky/20 pt-2">
                    {selectedPrompt.includes("CommonRoom") &&
                      "CommonRoom is a real-time collaborative workspace. The frontend is built on Next.js, connecting via WebSockets to Django REST Framework backend with PostgreSQL persistence."}
                    {selectedPrompt.includes("Swarm Grid") &&
                      "Swarm Grid uses Python's multiprocessing module to distribute multi-agent exploration tasks across independent process pools with shared memory synchronization."}
                    {selectedPrompt.includes("CommentLens") &&
                      "CommentLens runs a Python NLP pipeline (tokenization, TF-IDF, clustering) serving dynamic REST APIs consumed by a React data-viz dashboard."}
                    {selectedPrompt.includes("principles") &&
                      "Focus on contract stability, deep system understanding ('underneath the button'), zero dynamic type errors, and minimalist dependencies."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
