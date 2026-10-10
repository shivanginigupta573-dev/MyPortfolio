import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  number?: string;
  className?: string;
}

export function SectionLabel({ children, number, className }: SectionLabelProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-brand", className)}>
      <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
      {number && <span className="text-ink/60">{number}.</span>}
      <span>{children}</span>
      <span className="h-[1px] w-8 bg-sky/60" />
    </div>
  );
}
