"use client";

import React from "react";
import { motion } from "motion/react";

export function AnimatedBlueWaves() {
  return (
    <div className="pointer-events-none relative -mb-1 mt-10 w-full overflow-hidden leading-none select-none sm:mt-14">
      <svg
        className="relative block h-[110px] w-full sm:h-[150px] md:h-[200px] lg:h-[240px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={{
            d: [
              "M0,160 C180,120 360,220 560,180 C760,140 940,220 1110,170 C1230,135 1340,120 1440,150 L1440,320 L0,320 Z",
              "M0,188 C210,130 420,260 590,190 C770,120 980,235 1160,190 C1270,162 1360,172 1440,195 L1440,320 L0,320 Z",
              "M0,160 C180,120 360,220 560,180 C760,140 940,220 1110,170 C1230,135 1340,120 1440,150 L1440,320 L0,320 Z",
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          fill="#E3F2FD"
          className="opacity-80 dark:fill-[#111C2E] dark:opacity-90"
        />

        <motion.path
          animate={{
            d: [
              "M0,210 C200,150 350,245 540,205 C710,170 920,210 1080,190 C1220,172 1335,190 1440,210 L1440,320 L0,320 Z",
              "M0,182 C210,240 410,150 590,205 C760,260 960,175 1140,200 C1260,220 1365,205 1440,188 L1440,320 L0,320 Z",
              "M0,210 C200,150 350,245 540,205 C710,170 920,210 1080,190 C1220,172 1335,190 1440,210 L1440,320 L0,320 Z",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          fill="#90CAF9"
          className="opacity-80 dark:fill-[#1D314F] dark:opacity-80"
        />

        <motion.path
          animate={{
            d: [
              "M0,245 C180,200 340,250 520,228 C720,205 930,248 1120,220 C1260,198 1345,188 1440,210 L1440,320 L0,320 Z",
              "M0,222 C230,268 420,198 620,230 C760,255 980,205 1160,225 C1280,236 1370,220 1440,200 L1440,320 L0,320 Z",
              "M0,245 C180,200 340,250 520,228 C720,205 930,248 1120,220 C1260,198 1345,188 1440,210 L1440,320 L0,320 Z",
            ],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
          fill="#2196F3"
          className="opacity-85 dark:fill-[#2563EB] dark:opacity-70"
        />

        <motion.path
          animate={{
            d: [
              "M0,270 C250,250 410,255 570,272 C760,292 950,262 1110,255 C1230,250 1350,265 1440,262 L1440,320 L0,320 Z",
              "M0,258 C260,278 420,246 610,272 C780,295 970,252 1120,268 C1250,280 1355,272 1440,258 L1440,320 L0,320 Z",
              "M0,270 C250,250 410,255 570,272 C760,292 950,262 1110,255 C1230,250 1350,265 1440,262 L1440,320 L0,320 Z",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          fill="#0D47A1"
          className="dark:fill-[#0B1220] dark:opacity-100"
        />
      </svg>
    </div>
  );
}
