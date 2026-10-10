"use client";

import React from "react";
import { motion } from "motion/react";

export function AnimatedBlueWaves() {
  return (
    <div className="relative w-full overflow-hidden leading-none select-none pointer-events-none -mb-1 pt-12">
      <svg
        className="relative block w-full h-[100px] sm:h-[140px] md:h-[180px] lg:h-[220px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layer 1: Pale / Light Blue Wave */}
        <motion.path
          animate={{
            d: [
              "M0,160 C320,300 420,100 720,200 C1020,300 1200,120 1440,180 L1440,320 L0,320 Z",
              "M0,180 C360,120 480,260 720,160 C960,260 1180,160 1440,200 L1440,320 L0,320 Z",
              "M0,160 C320,300 420,100 720,200 C1020,300 1200,120 1440,180 L1440,320 L0,320 Z",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          fill="#E3F2FD"
          className="dark:fill-[#111C2E] opacity-70 dark:opacity-60"
        />

        {/* Layer 2: Sky Blue Wave */}
        <motion.path
          animate={{
            d: [
              "M0,200 C240,120 480,240 720,180 C960,120 1200,240 1440,190 L1440,320 L0,320 Z",
              "M0,170 C300,250 540,150 720,220 C900,150 1140,250 1440,180 L1440,320 L0,320 Z",
              "M0,200 C240,120 480,240 720,180 C960,120 1200,240 1440,190 L1440,320 L0,320 Z",
            ],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          fill="#90CAF9"
          className="dark:fill-[#1E293B] opacity-75 dark:opacity-80"
        />

        {/* Layer 3: Vibrant Royal Blue Wave */}
        <motion.path
          animate={{
            d: [
              "M0,240 C360,180 540,280 720,220 C900,160 1260,260 1440,220 L1440,320 L0,320 Z",
              "M0,220 C320,270 600,180 720,240 C840,300 1180,180 1440,230 L1440,320 L0,320 Z",
              "M0,240 C360,180 540,280 720,220 C900,160 1260,260 1440,220 L1440,320 L0,320 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          fill="#2196F3"
          className="dark:fill-[#2563EB] opacity-60 dark:opacity-50"
        />

        {/* Layer 4: Deep Ink Blue Base Transition Layer */}
        <motion.path
          animate={{
            d: [
              "M0,270 C300,240 600,280 720,260 C960,240 1200,280 1440,260 L1440,320 L0,320 Z",
              "M0,260 C340,280 580,240 720,270 C860,250 1140,270 1440,255 L1440,320 L0,320 Z",
              "M0,270 C300,240 600,280 720,260 C960,240 1200,280 1440,260 L1440,320 L0,320 Z",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          fill="#0D47A1"
          className="dark:fill-[#0B1220] opacity-90 dark:opacity-100"
        />
      </svg>
    </div>
  );
}
