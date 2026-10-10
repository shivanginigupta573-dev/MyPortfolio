import React from "react";
import { cn } from "@/lib/utils";

interface TechTagProps {
  name: string;
  size?: "sm" | "md";
  className?: string;
}

export function TechTag({ name, size = "sm", className }: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md font-mono transition-colors border border-sky/40 bg-ice/70 text-ink hover:border-brand/50 hover:bg-ice",
        size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs",
        className
      )}
    >
      <span className="mr-1 text-brand/70">#</span>
      {name}
    </span>
  );
}
