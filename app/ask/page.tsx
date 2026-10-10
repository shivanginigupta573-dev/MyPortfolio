import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AssistantPreview } from "@/components/home/AssistantPreview";

export default function AskPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-8">
      <div className="max-w-3xl space-y-3">
        <SectionLabel number="01">Interactive Portfolio Query</SectionLabel>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
          Ask My Portfolio
        </h1>
        <p className="text-base text-ink/75 font-sans leading-relaxed">
          Interactive portfolio query interface. (RAG assistant integration planned for upcoming milestone).
        </p>
      </div>

      <AssistantPreview />
    </div>
  );
}
