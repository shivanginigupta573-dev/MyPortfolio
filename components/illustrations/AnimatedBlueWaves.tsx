"use client";
import type { PointerEvent } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

export function AnimatedBlueWaves() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 65,
    damping: 24,
    mass: 0.8,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 55,
    damping: 25,
    mass: 0.8,
  });

 function handlePointerMove(event: PointerEvent<HTMLDivElement>)  {
    if (reduceMotion || event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    pointerX.set(x * 18);
    pointerY.set(y * 8);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  const animation = (duration: number, delay = 0) =>
    reduceMotion
      ? { duration: 0 }
      : {
          duration,
          delay,
          repeat: Infinity,
          repeatType: "mirror" as const,
          ease: "easeInOut" as const,
        };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="absolute inset-x-0 bottom-0 z-0 h-[270px] overflow-hidden sm:h-[330px] lg:h-[360px]"
      aria-hidden="true"
    >
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-sky/20 via-transparent to-transparent dark:from-blue-950/30" />

      <motion.div
        className="absolute inset-0"
        style={{
          x: reduceMotion ? 0 : smoothX,
          y: reduceMotion ? 0 : smoothY,
        }}
      >
        <svg
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Furthest, softest layer */}
          <motion.path
            d="M0 145 C180 85 340 180 520 140 S850 80 1040 135 S1280 90 1440 125 V360 H0 Z"
            animate={
              reduceMotion
                ? {}
                : {
                    d: [
                      "M0 145 C180 85 340 180 520 140 S850 80 1040 135 S1280 90 1440 125 V360 H0 Z",
                      "M0 125 C180 165 360 90 540 145 S850 170 1040 115 S1280 155 1440 105 V360 H0 Z",
                      "M0 145 C180 85 340 180 520 140 S850 80 1040 135 S1280 90 1440 125 V360 H0 Z",
                    ],
                  }
            }
            transition={animation(22)}
            className="fill-[#E3F2FD] opacity-75 dark:fill-[#13233D] dark:opacity-90"
          />

          {/* Middle wave */}
          <motion.path
            d="M0 195 C180 135 350 225 550 190 S880 145 1060 190 S1300 145 1440 180 V360 H0 Z"
            animate={
              reduceMotion
                ? {}
                : {
                    d: [
                      "M0 195 C180 135 350 225 550 190 S880 145 1060 190 S1300 145 1440 180 V360 H0 Z",
                      "M0 175 C190 220 365 150 560 195 S875 215 1065 165 S1300 200 1440 155 V360 H0 Z",
                      "M0 195 C180 135 350 225 550 190 S880 145 1060 190 S1300 145 1440 180 V360 H0 Z",
                    ],
                  }
            }
            transition={animation(18, 0.3)}
            className="fill-[#90CAF9] opacity-80 dark:fill-[#1B3152] dark:opacity-95"
          />

          {/* Strong blue layer */}
          <motion.path
            d="M0 235 C190 190 360 260 560 225 S900 200 1080 230 S1310 205 1440 220 V360 H0 Z"
            animate={
              reduceMotion
                ? {}
                : {
                    d: [
                      "M0 235 C190 190 360 260 560 225 S900 200 1080 230 S1310 205 1440 220 V360 H0 Z",
                      "M0 220 C190 260 365 205 565 235 S900 245 1085 210 S1310 235 1440 200 V360 H0 Z",
                      "M0 235 C190 190 360 260 560 225 S900 200 1080 230 S1310 205 1440 220 V360 H0 Z",
                    ],
                  }
            }
            transition={animation(15, 0.6)}
            className="fill-[#2196F3] opacity-75 dark:fill-[#2455A5] dark:opacity-80"
          />

          {/* Deep foreground wave */}
          <motion.path
            d="M0 275 C210 250 370 295 570 278 S900 260 1080 280 S1320 260 1440 270 V360 H0 Z"
            animate={
              reduceMotion
                ? {}
                : {
                    d: [
                      "M0 275 C210 250 370 295 570 278 S900 260 1080 280 S1320 260 1440 270 V360 H0 Z",
                      "M0 260 C210 290 380 265 575 285 S900 285 1090 265 S1320 285 1440 255 V360 H0 Z",
                      "M0 275 C210 250 370 295 570 278 S900 260 1080 280 S1320 260 1440 270 V360 H0 Z",
                    ],
                  }
            }
            transition={animation(19, 0.2)}
            className="fill-[#0D47A1] opacity-90 dark:fill-[#0B1220] dark:opacity-100"
          />
        </svg>
      </motion.div>

      {/* A subtle highlight along the top edge of the waves */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[38%] h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent dark:via-dark-accent/30"
      />
    </div>
  );
}