
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

  const [pointer, setPointer] = useState({
    x: 50,
    y: 50,
    active: false,
  });

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 35,
    damping: 24,
    mass: 1.2,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 35,
    damping: 24,
    mass: 1.2,
  });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    setPointer({
      x: x * 100,
      y: y * 100,
      active: true,
    });

    pointerX.set((x - 0.5) * 22);
    pointerY.set((y - 0.5) * 12);
  }

  function handlePointerLeave() {
    setPointer((current) => ({
      ...current,
      active: false,
    }));

    pointerX.set(0);
    pointerY.set(0);
  }

  const float = (duration: number, delay = 0) => ({
    duration: reduceMotion ? 0 : duration,
    delay: reduceMotion ? 0 : delay,
    repeat: reduceMotion ? 0 : Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut" as const,
  });

  return (
    <div
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[390px] overflow-hidden sm:h-[470px] lg:h-[540px]"
    >
      {/* Base atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#B7DBFF]/55 via-[#E5F3FF]/35 to-transparent dark:from-[#08152B] dark:via-[#10213D]/50 dark:to-transparent" />

      {/* Wide, soft pools of mist */}
      <motion.div
        className="absolute -inset-x-[25%] bottom-[-28%] h-[100%] rounded-[50%] bg-[#C5E4FF]/65 blur-[90px] dark:bg-[#244B83]/35"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 28, -18, 0],
                y: [0, -12, 8, 0],
                scale: [1, 1.04, 0.98, 1],
              }
        }
        transition={float(25)}
      />

      <motion.div
        className="absolute -left-[20%] bottom-[2%] h-[82%] w-[85%] rounded-[50%] bg-[#E3F2FD]/75 blur-[75px] dark:bg-[#244B83]/25"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 34, -12, 0],
                y: [0, -18, 5, 0],
                scale: [1, 1.06, 0.99, 1],
              }
        }
        transition={float(29, 1)}
      />

      <motion.div
        className="absolute -right-[22%] bottom-[-4%] h-[85%] w-[85%] rounded-[50%] bg-[#90CAF9]/35 blur-[85px] dark:bg-[#1D3F70]/40"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, -30, 15, 0],
                y: [0, 10, -14, 0],
                scale: [1, 0.97, 1.05, 1],
              }
        }
        transition={float(32, 2)}
      />

      {/* Cursor-responsive light */}
      <motion.div
        className="absolute h-[280px] w-[280px] rounded-full blur-[75px] sm:h-[390px] sm:w-[390px]"
        style={{
          left: `${pointer.x}%`,
          top: `${pointer.y}%`,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(96,165,250,0.34) 0%, rgba(147,197,253,0.16) 42%, transparent 72%)",
        }}
        animate={{
          opacity: reduceMotion ? 0.25 : pointer.active ? 0.9 : 0.35,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Fine, luminous wave contours */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: reduceMotion ? 0 : smoothX,
          y: reduceMotion ? 0 : smoothY,
        }}
      >
        <svg
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="none"
        >
          <motion.path
            d="M-40 330 C180 245 340 370 550 315 S910 250 1110 310 S1350 265 1480 285"
            stroke="#77B9F5"
            strokeWidth="1.4"
            opacity="0.55"
            animate={
              reduceMotion
                ? {}
                : {
                    d: [
                      "M-40 330 C180 245 340 370 550 315 S910 250 1110 310 S1350 265 1480 285",
                      "M-40 300 C190 350 350 265 560 325 S910 355 1110 285 S1350 330 1480 265",
                      "M-40 330 C180 245 340 370 550 315 S910 250 1110 310 S1350 265 1480 285",
                    ],
                  }
            }
            transition={float(23)}
          />

          <motion.path
            d="M-40 375 C190 320 370 400 575 355 S930 330 1135 375 S1360 340 1480 360"
            stroke="#A9D6FF"
            strokeWidth="1"
            opacity="0.65"
            animate={
              reduceMotion
                ? {}
                : {
                    d: [
                      "M-40 375 C190 320 370 400 575 355 S930 330 1135 375 S1360 340 1480 360",
                      "M-40 350 C190 395 375 335 580 380 S930 380 1135 345 S1360 385 1480 335",
                      "M-40 375 C190 320 370 400 575 355 S930 330 1135 375 S1360 340 1480 360",
                    ],
                  }
            }
            transition={float(28, 1)}
          />

          <motion.path
            d="M-40 420 C200 390 400 440 620 405 S950 390 1170 420 S1380 400 1480 410"
            stroke="#FFFFFF"
            strokeWidth="1.1"
            opacity="0.5"
            animate={
              reduceMotion
                ? {}
                : {
                    d: [
                      "M-40 420 C200 390 400 440 620 405 S950 390 1170 420 S1380 400 1480 410",
                      "M-40 400 C200 435 400 390 620 425 S950 425 1170 395 S1380 425 1480 395",
                      "M-40 420 C200 390 400 440 620 405 S950 390 1170 420 S1380 400 1480 410",
                    ],
                  }
            }
            transition={float(31, 2)}
          />
        </svg>
      </motion.div>

      {/* Quiet, drifting points of light */}
      {[
        { left: "12%", top: "65%", delay: 0, duration: 7 },
        { left: "28%", top: "42%", delay: 1, duration: 8 },
        { left: "46%", top: "72%", delay: 2, duration: 6 },
        { left: "67%", top: "48%", delay: 0.5, duration: 9 },
        { left: "82%", top: "65%", delay: 1.5, duration: 7 },
        { left: "93%", top: "40%", delay: 2.5, duration: 8 },
      ].map((particle, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-[#60A5FA] shadow-[0_0_12px_3px_rgba(96,165,250,0.18)] dark:bg-[#B9D9FF] dark:shadow-[0_0_15px_4px_rgba(96,165,250,0.3)]"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={
            reduceMotion
              ? { opacity: 0.4 }
              : {
                  opacity: [0.15, 0.65, 0.25],
                  y: [0, -10, 3],
                  scale: [0.8, 1.25, 0.9],
                }
          }
          transition={float(particle.duration, particle.delay)}
        />
      ))}
    </div>
  );
}
