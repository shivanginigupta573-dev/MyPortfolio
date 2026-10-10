"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { PersonalWorkspaceIllustration } from "@/components/illustrations/PersonalWorkspaceIllustration";
import { AnimatedBlueWaves } from "@/components/illustrations/AnimatedBlueWaves";
import { ArrowDown } from "lucide-react";
import { siteConfig, siteHeroIntro } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 bg-canvas dark:bg-dark-bg transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Main Greeting */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink dark:text-dark-text">
              {siteConfig.tagline.replace(/^Hello,/i, "Hi,")}
            </h1>

            {/* Natural Intro */}
            <p className="font-display italic text-xl sm:text-2xl font-medium text-brand dark:text-dark-accent leading-snug">
              {siteConfig.statement}
            </p>

            {/* Short Supporting Bio (1-2 sentences max, no buzzwords) */}
            <p className="max-w-xl text-base text-ink/80 dark:text-dark-muted font-sans leading-relaxed">
              {siteHeroIntro}
            </p>

            {/* Simple Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Button href="#projects" size="md">
                <span>View Projects</span>
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="secondary" size="md">
                <span>Get In Touch</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Original Editorial Workspace Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <PersonalWorkspaceIllustration />
          </motion.div>
        </div>
      </div>

      {/* Organic Animated Blue Waves Transition Layer */}
      <AnimatedBlueWaves />
    </section>
  );
}
