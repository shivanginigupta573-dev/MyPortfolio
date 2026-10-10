import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  type?: "diagonal" | "straight";
  className?: string;
}

export function ArrowLink({
  href,
  children,
  external = false,
  type = "diagonal",
  className,
}: ArrowLinkProps) {
  const Icon = type === "diagonal" ? ArrowUpRight : ArrowRight;

  const content = (
    <span className={cn("group inline-flex items-center gap-1 font-mono text-sm font-semibold text-brand transition-colors hover:text-ink", className)}>
      <span>{children}</span>
      <Icon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
