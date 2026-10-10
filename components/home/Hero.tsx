"use client";

import React from "react";
import { motion } from "motion/react";
import { PersonalWorkspaceIllustration } from "@/components/illustrations/PersonalWorkspaceIllustration";
import { AnimatedBlueWaves } from "@/components/illustrations/AnimatedBlueWaves";
import { siteConfig, siteHeroIntro } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-12 transition-colors duration-200 dark:bg-[#0B1220] md:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <h1 className="font-display text-[3.2rem] leading-[0.9] tracking-tight text-ink dark:text-dark-text sm:text-[5rem] lg:text-[6rem]">
              {siteConfig.tagline}
            </h1>

            <p className="mt-6 max-w-xl font-display text-[2rem] italic leading-[1.1] text-brand dark:text-dark-accent sm:text-[2.8rem]">
              {siteConfig.statement}
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/80 dark:text-dark-muted sm:text-lg">
              {siteHeroIntro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="flex justify-center lg:col-span-6 lg:justify-end"
          >
            <PersonalWorkspaceIllustration />
          </motion.div>
        </div>
      </div>

      <AnimatedBlueWaves />
    </section>
  );
}
