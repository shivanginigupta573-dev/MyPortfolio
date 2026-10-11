"use client";

import { motion } from "motion/react";
import { PersonalWorkspaceIllustration } from "@/components/illustrations/PersonalWorkspaceIllustration";
import { AnimatedBlueWaves } from "@/components/illustrations/AnimatedBlueWaves";

export function Hero() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-canvas transition-colors duration-300 dark:bg-dark-bg sm:min-h-[800px] lg:flex lg:min-h-[calc(100svh-68px)] lg:items-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_25%_30%,rgba(144,202,249,0.15),transparent_52%)] dark:bg-[radial-gradient(ellipse_at_65%_45%,rgba(59,130,246,0.13),transparent_55%)]"
      />

      <AnimatedBlueWaves />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-[360px] pt-20 sm:px-10 sm:pb-[410px] sm:pt-24 lg:px-12 lg:pb-52 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-20 max-w-[680px]"
        >

          <h1 className="font-display text-[4.25rem] leading-[0.88] tracking-[-0.035em] text-ink dark:text-dark-text sm:text-[6rem] md:text-[7rem] lg:text-[7.5rem]">
            Hi, I&apos;m
            <br />
            <span className="text-brand dark:text-dark-accent">
              Shivangini.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/80 dark:text-dark-muted sm:text-xl">
            Undergrad CS student at NIT Durgapur.
          </p>
        </motion.div>

        {/* Illustration on mobile and tablet */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="absolute bottom-[105px] right-0 z-10 w-[min(78vw,380px)] sm:bottom-[105px] sm:right-[3%] sm:w-[min(65vw,440px)] lg:hidden"
        >
          <PersonalWorkspaceIllustration />
        </motion.div>
      </div>

      {/* Illustration on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        className="pointer-events-auto absolute bottom-[100px] right-[4%] z-10 hidden w-[min(44vw,560px)] lg:block xl:right-[8%]"
      >
        <PersonalWorkspaceIllustration />
      </motion.div>
    </section>
  );
}
