import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";
import { skillCategories } from "@/data/skills";
import { experienceData } from "@/data/experience";
import { TechTag } from "@/components/ui/TechTag";
import { Terminal, BookOpen, Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <SectionLabel number="01">About &amp; Background</SectionLabel>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="font-mono text-base text-brand font-semibold">
          &quot;{siteConfig.engineeringPhilosophy}&quot;
        </p>
        <p className="text-base font-sans text-ink/80 leading-relaxed pt-2">
          {siteConfig.bio} I believe in writing readable code, defining clear API boundaries, and testing internal logic thoroughly.
        </p>
      </div>

      {/* Skills Inventory */}
      <div className="space-y-4">
        <h2 className="font-mono text-lg font-bold text-ink uppercase tracking-wide border-b border-sky/30 pb-2 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-brand" />
          <span>// Technical Skills &amp; Stack</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="rounded-xl border border-sky/40 bg-canvas p-5 shadow-notebook">
              <h3 className="font-mono text-sm font-bold text-ink mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <TechTag key={skill.name} name={skill.name} size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-4">
        <h2 className="font-mono text-lg font-bold text-ink uppercase tracking-wide border-b border-sky/30 pb-2 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-brand" />
          <span>// Experience &amp; Building</span>
        </h2>
        <div className="space-y-6">
          {experienceData.map((item) => (
            <div key={item.id} className="rounded-xl border border-sky/40 bg-canvas p-6 shadow-notebook">
              <div className="flex flex-wrap items-center justify-between border-b border-sky/20 pb-3 mb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-ink">{item.role}</h3>
                  <span className="font-mono text-xs text-brand">{item.company} — {item.location}</span>
                </div>
                <span className="font-mono text-xs text-ink/60 bg-ice px-2.5 py-1 rounded border border-sky/30">
                  {item.period}
                </span>
              </div>
              <ul className="space-y-2 text-sm text-ink/80 font-sans list-disc list-inside">
                {item.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
