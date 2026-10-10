"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function EngineeringIntro() {
  return (
    <section className="relative py-16 md:py-20 bg-ink text-canvas dark:bg-dark-bg dark:text-dark-text transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-canvas dark:text-dark-text">
            How I Approach Building Software
          </h2>

          <p className="text-base sm:text-lg font-sans text-sky/90 dark:text-dark-muted leading-relaxed max-w-2xl mx-auto">
            I enjoy starting from a clean slate—designing data structures, building APIs, and refining how components communicate. For me, good code is readable, predictable, and simple to maintain.
          </p>

          <div className="pt-2">
            <ArrowLink href="/about" className="text-sky dark:text-dark-accent hover:text-canvas dark:hover:text-dark-text">
              Read more about my background
            </ArrowLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
