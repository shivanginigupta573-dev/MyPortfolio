
"use client";

import { useState, type PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

export function AnimatedBlueWaves() {
  const reduceMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 50, y: 40, active: false });

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 45,
    damping: 22,
    mass: 1,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 45,
    damping: 22,
    mass: 1,
  });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    setPointer({ x: x * 100, y: y * 100, active: true });
    pointerX.set((x - 0.5) * 24);
    pointerY.set((y - 0.5) * 12);
  }

  function handlePointerLeave() {
    setPointer((current) => ({ ...current, active: false }));
    pointerX.set(0);
    pointerY.set(0);
  }

  const drift = (duration: number, delay = 0) =>
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
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="pointer-events-auto absolute inset-x-0 bottom-0 z-0 h-[360px] overflow-hidden sm:h-[430px] lg:h-[500px]"
    >
      {/* Ambient colour behind the mist */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#C5E4FF]/60 via-[#EAF5FF]/30 to-transparent dark:from-[#071329] dark:via-[#10213D]/60 dark:to-transparent" />

      {/* Cursor-following glow */}
      <motion.div
        className="pointer-events-none absolute h-[300px] w-[300px] rounded-full blur-[85px] transition-opacity duration-700 sm:h-[420px] sm:w-[420px]"
        animate={{ opacity: pointer.active ? 0.8 : 0.35 }}
        transition={{ duration: 0.5 }}
        style={{
          left: `${pointer.x}%`,
          top: `${pointer.y}%`,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(96,165,250,0.42) 0%, rgba(147,197,253,0.18) 38%, transparent 72%)",
        }}
      />

      {/* Slow, soft atmospheric layers */}
      <motion.div
        className="absolute -inset-x-[12%] bottom-[2%] h-[85%] rounded-[50%] bg-[#B9DDFB]/45 blur-[65px] dark:bg-[#244B83]/30"
        animate={reduceMotion ? {} : { x: [0, 35, -12, 0], y: [0, -15, 5, 0] }}
        transition={drift(24)}
        style={{ x: smoothX, y: smoothY }}
      />

      <motion.div
        className="absolute -inset-x-[18%] bottom-[-20%] h-[85%] rounded-[50%] bg-[#8CC8FF]/35 blur-[75px] dark:bg-[#1D3F70]/45"
        animate={reduceMotion ? {} : { x: [0, -35, 18, 0], y: [0, 12, -8, 0] }}
        transition={drift(30, 2)}
      />

      <motion.div
        className="absolute -left-[15%] bottom-[10%] h-[65%] w-[75%] rounded-[50%] bg-white/50 blur-[65px] dark:bg-[#4778B8]/15"
        animate={reduceMotion ? {} : { x: [0, 30, -20, 0], scale: [1, 1.08, 0.98, 1] }}
        transition={drift(27, 1)}
      />

      <motion.div
        className="absolute -right-[20%] bottom-[-2%] h-[75%] w-[80%] rounded-[50%] bg-[#9ACBFF]/40 blur-[80px] dark:bg-[#152F56]/50"
        animate={reduceMotion ? {} : { x: [0, -28, 12, 0], scale: [1, 0.96, 1.04, 1] }}
        transition={drift(32, 3)}
      />

      {/* Fine luminous strands instead of solid ribbons */}
      <motion.svg
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-50 dark:opacity-40"
        fill="none"
        style={{ x: smoothX, y: smoothY }}
      >
        <motion.path
          d="M-40 310 C180 240 310 350 540 300 S900 245 1100 295 S1330 265 1480 290"
          stroke="#77B9F5"
          strokeWidth="1.5"
          animate={
            reduceMotion
              ? {}
              : {
                  d: [
                    "M-40 310 C180 240 310 350 540 300 S900 245 1100 295 S1330 265 1480 290",
                    "M-40 280 C180 330 350 255 550 310 S900 335 1100 275 S1330 320 1480 260",
                    "M-40 310 C180 240 310 350 540 300 S900 245 1100 295 S1330 265 1480 290",
                  ],
                }
          }
          transition={drift(20)}
        />
        <motion.path
          d="M-40 365 C170 320 370 390 570 350 S930 320 1130 365 S1350 340 1480 355"
          stroke="#A9D6FF"
          strokeWidth="1"
          animate={
            reduceMotion
              ? {}
              : {
                  d: [
                    "M-40 365 C170 320 370 390 570 350 S930 320 1130 365 S1350 340 1480 355",
                    "M-40 345 C180 395 370 330 575 370 S930 380 1135 340 S1350 380 1480 335",
                    "M-40 365 C170 320 370 390 570 350 S930 320 1130 365 S1350 340 1480 355",
                  ],
                }
          }
          transition={drift(26, 1)}
        />
      </motion.svg>

      {/* Tiny drifting lights */}
      {[
        { left: "12%", top: "58%", delay: 0, duration: 6 },
        { left: "26%", top: "35%", delay: 1.2, duration: 7 },
        { left: "43%", top: "68%", delay: 0.6, duration: 5 },
        { left: "62%", top: "43%", delay: 2, duration: 8 },
        { left: "78%", top: "62%", delay: 0.8, duration: 6 },
        { left: "91%", top: "38%", delay: 1.6, duration: 7 },
      ].map((particle, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-[#60A5FA] shadow-[0_0_14px_4px_rgba(96,165,250,0.2)] dark:bg-[#B9D9FF] dark:shadow-[0_0_16px_5px_rgba(96,165,250,0.35)]"
          style={{ left: particle.left, top: particle.top }}
          animate={
            reduceMotion
              ? { opacity: 0.5 }
              : {
                  opacity: [0.15, 0.8, 0.25],
                  y: [0, -13, 4],
                  scale: [0.8, 1.4, 0.9],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
