
"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { AnimatedBlueWaves } from "@/components/illustrations/AnimatedBlueWaves";
import { PersonalWorkspaceIllustration } from "@/components/illustrations/PersonalWorkspaceIllustration";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const targetX = useMotionValue(0.5);
  const targetY = useMotionValue(0.5);
  const targetPresence = useMotionValue(0);
  const pointerX = useSpring(targetX, { stiffness: 55, damping: 24, mass: 0.8 });
  const pointerY = useSpring(targetY, { stiffness: 55, damping: 24, mass: 0.8 });
  const pointerPresence = useSpring(targetPresence, {
    stiffness: 45,
    damping: 22,
    mass: 0.9,
  });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    targetX.set(Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)));
    targetY.set(Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height)));
    targetPresence.set(1);
  }

  function handlePointerLeave() {
    targetX.set(0.5);
    targetY.set(0.5);
    targetPresence.set(0);
  }

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#FAFCFE] transition-colors duration-700 dark:bg-[#0B1220] sm:min-h-[820px] lg:min-h-[calc(100svh-76px)]"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_30%_35%,rgba(144,202,249,0.28),transparent_48%),radial-gradient(ellipse_at_78%_60%,rgba(191,219,254,0.24),transparent_38%)] dark:bg-[radial-gradient(ellipse_at_70%_35%,rgba(59,130,246,0.16),transparent_45%),radial-gradient(ellipse_at_30%_65%,rgba(30,64,120,0.22),transparent_45%)]"
      />

      <AnimatedBlueWaves
        pointerX={pointerX}
        pointerY={pointerY}
        pointerPresence={pointerPresence}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-2 px-6 pb-56 pt-16 sm:px-10 sm:pb-64 lg:grid-cols-[1.05fr_0.95fr] lg:gap-0 lg:px-12 lg:pb-40 lg:pt-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative z-20 text-center lg:text-left"
        >
          <h1 className="font-display text-[4.6rem] leading-[0.9] tracking-[-0.045em] text-[#0D47A1] dark:text-[#EAF2FF] sm:text-[6rem] md:text-[7rem] lg:text-[6.6rem] xl:text-[7.5rem]">
            Hi, I&apos;m
            <br />
            <span className="text-[#2196F3] dark:text-[#60A5FA]">
              Shivangini.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-[#336699] dark:text-[#B5C9E5] sm:text-lg lg:mx-0 lg:text-xl">
            Undergrad CS student at NIT Durgapur.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
          className="relative z-10 mx-auto mt-2 w-full max-w-[480px] sm:max-w-[540px] lg:mt-12 lg:max-w-[590px]"
        >
          <PersonalWorkspaceIllustration />
        </motion.div>
      </div>
    </section>
  );
}
