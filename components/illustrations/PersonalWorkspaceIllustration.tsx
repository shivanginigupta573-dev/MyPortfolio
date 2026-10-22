"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useSpring } from "motion/react";
import { Lottie, type LottieHandle } from "lottie-react";
import { Pause, Play } from "lucide-react";

export function PersonalWorkspaceIllustration() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(!reduceMotion);
  const [pointerInside, setPointerInside] = useState(false);
  const lottieRef = useRef<LottieHandle>(null);

  const pointerX = useSpring(0, { stiffness: 65, damping: 22 });
  const pointerY = useSpring(0, { stiffness: 65, damping: 22 });

  useEffect(() => {
    setMounted(true);
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(x * 10);
    pointerY.set(y * 7);
    setPointerInside(true);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
    setPointerInside(false);
  }

  function togglePlay() {
    if (isPlaying) {
      lottieRef.current?.pause();
      setIsPlaying(false);
    } else {
      lottieRef.current?.play();
      setIsPlaying(true);
    }
  }

  return (
    <div
      role="img"
      aria-label="Animated illustration of a developer girl coding at her desk"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="group relative mx-auto w-full max-w-[620px] select-none"
    >
      {/* Scoped CSS for light & dark theme styling of coder-girl Lottie animation */}
      <style>{`
        .coder-girl-lottie svg {
          overflow: visible !important;
        }
        .dark .coder-girl-lottie svg path[stroke]:not([stroke="none"]):not([stroke="transparent"]) {
          stroke: #60a5fa;
          transition: stroke 0.4s ease;
        }
        .dark .coder-girl-lottie svg path[fill*="255,255,255"],
        .dark .coder-girl-lottie svg path[fill*="255, 255, 255"],
        .dark .coder-girl-lottie svg path[fill="#ffffff"],
        .dark .coder-girl-lottie svg path[fill="#fff"] {
          fill: #dbeafe;
          transition: fill 0.4s ease;
        }
        .dark .coder-girl-lottie svg path[fill*="239,239,239"],
        .dark .coder-girl-lottie svg path[fill*="239, 239, 239"] {
          fill: #bfdbfe;
          transition: fill 0.4s ease;
        }
        .dark .coder-girl-lottie svg path[fill*="94,149"],
        .dark .coder-girl-lottie svg path[fill*="94, 149"] {
          fill: #2563eb;
          transition: fill 0.4s ease;
        }
      `}</style>

      {/* Dreamy blue atmosphere mist behind the illustration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-4 top-2 bottom-4 rounded-full bg-[#B9DDFB]/55 blur-[65px] dark:bg-[#1E40AF]/25 dark:blur-[80px]"
      />

      {/* Ambient drifting cloud highlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-[10%] h-24 w-44 rounded-full bg-white/60 blur-3xl dark:bg-[#60A5FA]/15"
        animate={
          reduceMotion
            ? {}
            : { x: [0, 14, -6, 0], y: [0, -5, 4, 0] }
        }
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Lottie container with spring parallax */}
      <motion.div
        className="coder-girl-lottie relative z-10 w-full overflow-visible"
        style={{
          x: pointerX,
          y: pointerY,
        }}
      >
        <div className="relative aspect-[1000/622] w-full">
          {mounted ? (
            <Lottie
              lottieRef={lottieRef}
              src="/animations/coder-girl.json"
              loop={!reduceMotion}
              autoplay={!reduceMotion}
              renderer="svg"
              rendererSettings={{
                preserveAspectRatio: "xMidYMid meet",
              }}
              className="h-full w-full drop-shadow-[0_8px_30px_rgba(13,71,161,0.06)] dark:drop-shadow-[0_8px_32px_rgba(59,130,246,0.2)]"
            />
          ) : (
            <div className="h-full w-full" />
          )}

          {/* Accessible play/pause affordance (WCAG 2.2.2 compliant) */}
          {mounted && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause animation" : "Play animation"}
              className="absolute bottom-2 right-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-[#0D47A1] opacity-70 shadow-sm backdrop-blur-md transition-all hover:opacity-100 hover:scale-105 active:scale-95 group-hover:opacity-100 dark:bg-[#111C2E]/70 dark:text-[#EAF2FF] dark:hover:bg-[#111C2E]"
            >
              {isPlaying ? (
                <Pause className="h-3 w-3" />
              ) : (
                <Play className="ml-0.5 h-3 w-3" />
              )}
            </button>
          )}
        </div>
      </motion.div>

      {/* Subtle grounding contact shadow beneath the workspace base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[6%] left-1/2 h-3.5 w-[64%] -translate-x-1/2 rounded-full bg-[#4A7BB0]/18 blur-md dark:bg-[#060D1A]/50"
      />

      {/* Soft pool of light beneath the desk, grounding the girl naturally with the blue waves */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1 left-1/2 h-9 w-[76%] -translate-x-1/2 rounded-full bg-[#60A5FA]/22 blur-2xl dark:bg-[#38BDF8]/18"
      />

      {/* Subtle responsive ambient glint */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[14%] h-2.5 w-2.5 rounded-full bg-[#90CAF9] dark:bg-[#60A5FA]"
        animate={
          reduceMotion
            ? { opacity: 0.45 }
            : { opacity: pointerInside ? 0.85 : 0.35, scale: pointerInside ? 1.2 : 1 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}

// Export alias for semantic clarity
export { PersonalWorkspaceIllustration as CoderGirlIllustration };
