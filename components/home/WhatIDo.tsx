import Reveal from "@/components/ui/Reveal";
import { Code2, Puzzle, GitPullRequest, Sparkles } from "lucide-react";

const items = [
  { icon: Code2, title: "Build modern web apps", sub: "with clean code & great UX" },
  { icon: Puzzle, title: "Solve complex problems", sub: "through competitive programming" },
  { icon: GitPullRequest, title: "Explore open source", sub: "and contribute to the community" },
  { icon: Sparkles, title: "Keep learning", sub: "because there’s always more" },
];

export default function WhatIDo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal><h2 className="mb-10 text-2xl">What I do</h2></Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, sub }, i) => (
          <Reveal key={title} delay={i * 0.12}>
            <div className="glass-card h-full p-6">
              <Icon className="mb-4 text-sky-300" />
              <h3 className="font-medium">{title}</h3>
              <p className="mt-1 text-sm text-slate-400">{sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}