"use client";

import { useState, useEffect, useRef, type PointerEvent } from "react";
import { motion, useSpring, useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";

/* ---------- optional Lottie support ---------- */
const LottiePlayer = dynamic<any>(
  () => import("lottie-react").then((mod) => mod.Lottie),
  { ssr: false }
);

/* Try to load a local Lottie JSON from public/animations/coder-girl.json.
   If the file doesn't exist the fetch 404s and we fall back to the SVG. */
function useLottieData() {
  const [data, setData] = useState<object | null>(null);
  const tried = useRef(false);

  useEffect(() => {
    if (tried.current) return;
    tried.current = true;
    fetch("/animations/coder-girl.json")
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.json();
      })
      .then(setData)
      .catch(() => {
        /* no Lottie file — use SVG fallback */
      });
  }, []);

  return data;
}

/* ---------- main component ---------- */
export function PersonalWorkspaceIllustration() {
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();
  const lottieData = useLottieData();

  const pointerX = useSpring(0, { stiffness: 90, damping: 20 });
  const pointerY = useSpring(0, { stiffness: 90, damping: 20 });

  useEffect(() => {
    setMounted(true);
  }, []);

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!mounted || e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(((e.clientX - rect.left) / rect.width - 0.5) * 10);
    pointerY.set(((e.clientY - rect.top) / rect.height - 0.5) * 8);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  const drift = (dur: number, delay = 0) =>
    reduceMotion
      ? { duration: 0 }
      : {
          duration: dur,
          delay,
          repeat: Infinity,
          repeatType: "mirror" as const,
          ease: "easeInOut" as const,
        };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative mx-auto w-full max-w-[620px] select-none"
      aria-label="Illustration of a young woman working on a laptop"
      role="img"
    >
      {/* ── Atmospheric glow behind character ── */}
      <div className="pointer-events-none absolute inset-[5%] rounded-full bg-[#B5D8FE]/40 blur-[80px] transition-all duration-700 dark:bg-[#1E3A6E]/35" />

      {/* ── Drifting cloud layers ── */}
      <motion.div
        className="pointer-events-none absolute -left-[15%] top-[10%] h-[45%] w-[60%] rounded-full bg-white/30 blur-[55px] dark:bg-[#2D4A7A]/20"
        animate={reduceMotion ? {} : { x: [0, 25, -10, 0], y: [0, -8, 4, 0] }}
        transition={drift(22)}
      />
      <motion.div
        className="pointer-events-none absolute -right-[10%] top-[20%] h-[40%] w-[55%] rounded-full bg-[#DDE9FA]/40 blur-[60px] dark:bg-[#1A3358]/25"
        animate={reduceMotion ? {} : { x: [0, -20, 15, 0], y: [0, 6, -5, 0] }}
        transition={drift(26, 1.5)}
      />

      {/* ── Dark-mode stars ── */}
      {mounted &&
        [
          { l: "8%", t: "12%", d: 4, del: 0 },
          { l: "88%", t: "8%", d: 5, del: 1 },
          { l: "75%", t: "28%", d: 3.5, del: 0.5 },
          { l: "15%", t: "38%", d: 6, del: 2 },
          { l: "92%", t: "42%", d: 4.5, del: 1.2 },
        ].map((s, i) => (
          <motion.span
            key={i}
            className="pointer-events-none absolute hidden h-1 w-1 rounded-full bg-[#BAE6FD] shadow-[0_0_6px_2px_rgba(186,230,253,0.4)] dark:block"
            style={{ left: s.l, top: s.t }}
            animate={
              reduceMotion
                ? { opacity: 0.5 }
                : { opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.3, 0.8] }
            }
            transition={drift(s.d, s.del)}
          />
        ))}

      {/* ── Main floating character ── */}
      <motion.div
        className="relative"
        style={{ x: pointerX, y: pointerY, transformPerspective: 900 }}
        animate={mounted && !reduceMotion ? { y: [0, -6, 0] } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {lottieData ? (
          /* ── Lottie animation (if coder-girl.json exists) ── */
          <LottiePlayer
            animationData={lottieData}
            loop
            autoplay
            className="relative z-10 h-auto w-full"
          />
        ) : (
          /* ── Beautiful editorial SVG illustration fallback ── */
          <SVGIllustration mounted={mounted} reduceMotion={!!reduceMotion} />
        )}
      </motion.div>

      {/* ── Laptop glow effect ── */}
      <div className="pointer-events-none absolute bottom-[18%] left-1/2 h-[30px] w-[45%] -translate-x-1/2 rounded-full bg-[#60A5FA]/15 blur-[25px] transition-colors duration-700 dark:bg-[#38BDF8]/20" />
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════
   Editorial-style SVG: seated girl with laptop
   Soft gradients · flowing dark hair · powder-blue sweater
   Natural proportions · storybook aesthetic
   ═════════════════════════════════════════════════════════════ */
function SVGIllustration({
  mounted,
  reduceMotion,
}: {
  mounted: boolean;
  reduceMotion: boolean;
}) {
  return (
    <svg
      viewBox="0 0 600 520"
      className="relative z-10 h-auto w-full overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Hair gradient — rich dark tones */}
        <linearGradient id="pw-hair" x1="260" y1="60" x2="380" y2="310" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A1A2E" />
          <stop offset="0.5" stopColor="#16213E" />
          <stop offset="1" stopColor="#0F0F1A" />
        </linearGradient>

        {/* Skin — warm natural */}
        <linearGradient id="pw-skin" x1="300" y1="100" x2="340" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FCDEC0" />
          <stop offset="1" stopColor="#F5C8A8" />
        </linearGradient>

        {/* Sweater — powder blue, soft */}
        <linearGradient id="pw-sweater" x1="220" y1="230" x2="420" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CADDF5" className="dark:[stop-color:#4B7EB8]" />
          <stop offset="0.5" stopColor="#A8C8EB" className="dark:[stop-color:#3A6496]" />
          <stop offset="1" stopColor="#8BB8E0" className="dark:[stop-color:#2D5280]" />
        </linearGradient>

        {/* Laptop body */}
        <linearGradient id="pw-laptop" x1="180" y1="330" x2="430" y2="410" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8EFF7" className="dark:[stop-color:#2A3F5F]" />
          <stop offset="1" stopColor="#C5D5E8" className="dark:[stop-color:#1C2D45]" />
        </linearGradient>

        {/* Laptop screen glow */}
        <radialGradient id="pw-screen-glow" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#E8F4FD" className="dark:[stop-color:#1A2E4A]" />
          <stop offset="1" stopColor="#D0E8FB" className="dark:[stop-color:#15253D]" />
        </radialGradient>

        {/* Cheek blush */}
        <radialGradient id="pw-blush">
          <stop stopColor="#F5B8A8" stopOpacity="0.5" />
          <stop offset="1" stopColor="#F5B8A8" stopOpacity="0" />
        </radialGradient>

        {/* Hair shine highlight */}
        <linearGradient id="pw-hair-shine" x1="280" y1="80" x2="340" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3A4A6E" stopOpacity="0.6" />
          <stop offset="1" stopColor="#1A1A2E" stopOpacity="0" />
        </linearGradient>

        {/* Chair */}
        <linearGradient id="pw-chair" x1="200" y1="350" x2="420" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4DFE8" className="dark:[stop-color:#1E2D42]" />
          <stop offset="1" stopColor="#B8C8D8" className="dark:[stop-color:#162235]" />
        </linearGradient>
      </defs>

      {/* ── Ground shadow ── */}
      <ellipse cx="310" cy="490" rx="210" ry="18" fill="#90CAF9" fillOpacity="0.12" className="dark:fill-[#0D1B30] dark:fill-opacity-60" />

      {/* ── Chair / seat ── */}
      <path d="M200 380 Q195 430 205 470 L220 470 Q218 440 220 410 Z" fill="url(#pw-chair)" />
      <path d="M420 380 Q425 430 415 470 L400 470 Q402 440 400 410 Z" fill="url(#pw-chair)" />
      <path d="M190 370 Q195 360 310 355 Q425 360 430 370 Q435 385 430 395 Q425 405 310 410 Q195 405 190 395 Z"
        fill="url(#pw-chair)" />
      {/* Chair back */}
      <path d="M195 370 Q200 280 220 250 Q260 225 310 220 Q360 225 400 250 Q420 280 425 370"
        fill="url(#pw-chair)" fillOpacity="0.7" />

      {/* ── Back hair flowing down ── */}
      <path d="M250 120 C220 140 200 200 210 280 C215 320 225 350 240 380 Q260 400 280 390 C270 350 258 300 255 250 C253 210 260 160 280 130 Z"
        fill="url(#pw-hair)" opacity="0.85" />
      <path d="M370 120 C400 150 420 210 415 280 C412 320 405 360 395 390 Q380 410 365 395 C372 355 380 310 383 260 C385 210 375 155 355 125 Z"
        fill="url(#pw-hair)" opacity="0.85" />

      {/* ── Sweater / torso ── */}
      <path d="M230 240 Q260 220 310 215 Q360 220 390 240 Q420 270 430 320 Q435 370 425 400 Q400 415 310 415 Q220 415 195 400 Q185 370 190 320 Q200 270 230 240Z"
        fill="url(#pw-sweater)" />
      {/* Sweater neckline */}
      <path d="M275 230 Q295 240 310 242 Q325 240 345 230" stroke="#9BB8D8" strokeWidth="2" strokeLinecap="round" fill="none" className="dark:stroke-[#6B94C0]" />
      {/* Sweater fold lines */}
      <path d="M250 300 Q280 310 310 308 Q340 310 370 300" stroke="#9BB8D8" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" className="dark:stroke-[#6B94C0]" />
      <path d="M240 340 Q275 348 310 347 Q345 348 380 340" stroke="#9BB8D8" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.3" className="dark:stroke-[#6B94C0]" />

      {/* ── Neck ── */}
      <path d="M295 200 L290 235 Q310 245 330 235 L325 200Z" fill="url(#pw-skin)" />

      {/* ── Face — soft oval ── */}
      <ellipse cx="310" cy="148" rx="52" ry="62" fill="url(#pw-skin)" />

      {/* ── Ears ── */}
      <ellipse cx="258" cy="155" rx="8" ry="12" fill="#F5C8A8" />
      <ellipse cx="362" cy="155" rx="8" ry="12" fill="#F5C8A8" />

      {/* ── Cheek blush ── */}
      <ellipse cx="280" cy="168" rx="14" ry="9" fill="url(#pw-blush)" />
      <ellipse cx="340" cy="168" rx="14" ry="9" fill="url(#pw-blush)" />

      {/* ── Eyes — expressive, softly drawn ── */}
      <g className="dark:opacity-90">
        {/* Left eye */}
        <ellipse cx="290" cy="145" rx="8" ry="9" fill="white" />
        <motion.ellipse
          cx="291" cy="146" rx="4.5" ry="5"
          fill="#2C1810"
          animate={mounted && !reduceMotion ? { scaleY: [1, 0.08, 1] } : {}}
          transition={{ duration: 0.15, delay: 3, repeat: Infinity, repeatDelay: 4 }}
        />
        <circle cx="293" cy="144" r="1.5" fill="white" />
        {/* Left upper eyelid line */}
        <path d="M279 138 Q290 132 301 138" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Left eyelash accents */}
        <path d="M280 138 L278 135" stroke="#1A1A2E" strokeWidth="1" strokeLinecap="round" />
        <path d="M299 138 L302 135" stroke="#1A1A2E" strokeWidth="1" strokeLinecap="round" />

        {/* Right eye */}
        <ellipse cx="330" cy="145" rx="8" ry="9" fill="white" />
        <motion.ellipse
          cx="331" cy="146" rx="4.5" ry="5"
          fill="#2C1810"
          animate={mounted && !reduceMotion ? { scaleY: [1, 0.08, 1] } : {}}
          transition={{ duration: 0.15, delay: 3, repeat: Infinity, repeatDelay: 4 }}
        />
        <circle cx="333" cy="144" r="1.5" fill="white" />
        {/* Right upper eyelid line */}
        <path d="M319 138 Q330 132 341 138" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M320 138 L318 135" stroke="#1A1A2E" strokeWidth="1" strokeLinecap="round" />
        <path d="M340 138 L343 135" stroke="#1A1A2E" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* ── Eyebrows — soft arcs ── */}
      <path d="M278 130 Q290 124 303 130" stroke="#2A1F1A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M317 130 Q330 124 343 130" stroke="#2A1F1A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* ── Nose — subtle ── */}
      <path d="M308 158 Q310 164 314 162" stroke="#E0A88A" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* ── Mouth — gentle smile ── */}
      <path d="M298 178 Q310 186 322 178" stroke="#D4847A" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Upper lip hint */}
      <path d="M303 176 Q310 172 317 176" stroke="#E09890" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* ── Hair — top, flowing, voluminous ── */}
      <path d="M255 130 C245 90 270 55 310 50 C350 55 375 90 365 130 Q370 95 355 72 C335 55 285 55 265 72 Q250 95 255 130Z"
        fill="url(#pw-hair)" />
      {/* Hair volume left */}
      <path d="M255 130 C240 110 235 140 240 165 C243 180 248 170 255 155 Q260 140 255 130Z"
        fill="url(#pw-hair)" />
      {/* Hair volume right */}
      <path d="M365 130 C380 110 385 140 380 165 C377 180 372 170 365 155 Q360 140 365 130Z"
        fill="url(#pw-hair)" />
      {/* Bangs / fringe */}
      <path d="M265 115 C270 85 295 65 310 63 C325 65 350 85 355 115 Q345 90 310 80 Q275 90 265 115Z"
        fill="url(#pw-hair)" />
      {/* Hair shine */}
      <path d="M285 75 Q300 68 315 75 Q305 85 285 75Z" fill="url(#pw-hair-shine)" />

      {/* ── Hair flowing over shoulders ── */}
      {/* Left side flowing hair */}
      <path d="M248 165 C240 200 235 260 242 320 Q245 340 250 350 Q255 345 253 320 C250 270 252 210 258 170Z"
        fill="url(#pw-hair)" opacity="0.9" />
      {/* Right side flowing hair */}
      <path d="M372 165 C380 200 385 260 378 320 Q375 340 370 350 Q365 345 367 320 C370 270 368 210 362 170Z"
        fill="url(#pw-hair)" opacity="0.9" />

      {/* ── Arms / Hands on laptop ── */}
      {/* Left arm - sleeve */}
      <path d="M220 290 Q200 310 195 340 Q192 360 200 375 L225 370 Q220 350 225 330 Q230 310 240 295Z"
        fill="url(#pw-sweater)" />
      {/* Left hand */}
      <motion.g
        animate={mounted && !reduceMotion ? { y: [0, -2, 0] } : {}}
        transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M200 370 Q195 380 210 385 Q225 388 235 383 Q240 378 235 372 Q225 368 210 368Z"
          fill="url(#pw-skin)" />
      </motion.g>

      {/* Right arm - sleeve */}
      <path d="M400 290 Q420 310 425 340 Q428 360 420 375 L395 370 Q400 350 395 330 Q390 310 380 295Z"
        fill="url(#pw-sweater)" />
      {/* Right hand */}
      <motion.g
        animate={mounted && !reduceMotion ? { y: [-2, 0, -2] } : {}}
        transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M420 370 Q425 380 410 385 Q395 388 385 383 Q380 378 385 372 Q395 368 410 368Z"
          fill="url(#pw-skin)" />
      </motion.g>

      {/* ── Laptop ── */}
      {/* Screen back */}
      <path d="M175 355 L190 300 Q195 290 205 290 L415 290 Q425 290 428 300 L445 355Z"
        fill="#8FB8DE" className="dark:fill-[#3A5A7E]" />
      {/* Screen face */}
      <rect x="195" y="298" width="230" height="50" rx="3" fill="url(#pw-screen-glow)" />

      {/* Code lines on screen */}
      <rect x="205" y="306" width="65" height="4" rx="2" fill="#7BAED4" className="dark:fill-[#4B8CC0]" opacity="0.8" />
      <rect x="278" y="306" width="40" height="4" rx="2" fill="#5D9BCE" className="dark:fill-[#3B7AB0]" opacity="0.6" />
      <rect x="205" y="316" width="45" height="3.5" rx="1.5" fill="#90C4E8" className="dark:fill-[#5B9ED4]" opacity="0.5" />
      <rect x="258" y="316" width="80" height="3.5" rx="1.5" fill="#6AADDA" className="dark:fill-[#4B8CC0]" opacity="0.6" />
      <rect x="205" y="326" width="100" height="3.5" rx="1.5" fill="#5D9BCE" className="dark:fill-[#3B7AB0]" opacity="0.5" />
      <rect x="312" y="326" width="35" height="3.5" rx="1.5" fill="#7BAED4" className="dark:fill-[#5B9ED4]" opacity="0.4" />
      <rect x="205" y="336" width="55" height="3.5" rx="1.5" fill="#90C4E8" className="dark:fill-[#6AADDA]" opacity="0.5" />

      {/* Laptop screen glow reflection */}
      <motion.rect
        x="195" y="298" width="230" height="50" rx="3"
        fill="#60A5FA" fillOpacity="0"
        animate={mounted && !reduceMotion ? { fillOpacity: [0, 0.06, 0] } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Keyboard base */}
      <path d="M170 355 L450 355 L465 378 Q468 382 462 382 L157 382 Q151 382 155 378 Z"
        fill="#D0DEE8" className="dark:fill-[#233A52]" />
      {/* Keyboard trackpad hint */}
      <rect x="285" y="362" width="50" height="12" rx="3" fill="#BDD0E0" className="dark:fill-[#2A4560]" />
      {/* Keyboard top edge highlight */}
      <line x1="175" y1="355" x2="445" y2="355" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" className="dark:stroke-[#4B6A8A]" />

      {/* ── Small decorative elements ── */}
      {/* Hair clip / accessory */}
      <circle cx="348" cy="78" r="5" fill="#90CAF9" className="dark:fill-[#38BDF8]" />
      <path d="M348 75 L349 77 L352 78 L349 79 L348 81 L347 79 L344 78 L347 77Z" fill="white" fillOpacity="0.9" />

      {/* Floating sparkle accents */}
      <motion.g
        animate={mounted && !reduceMotion ? { opacity: [0.3, 0.8, 0.3] } : { opacity: 0.5 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M140 200 L143 208 L151 211 L143 214 L140 222 L137 214 L129 211 L137 208Z"
          fill="#90CAF9" fillOpacity="0.7" className="dark:fill-[#38BDF8]" />
      </motion.g>
      <motion.g
        animate={mounted && !reduceMotion ? { opacity: [0.2, 0.7, 0.2] } : { opacity: 0.4 }}
        transition={{ duration: 5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M470 150 L472 156 L478 158 L472 160 L470 166 L468 160 L462 158 L468 156Z"
          fill="#90CAF9" fillOpacity="0.6" className="dark:fill-[#7DD3FC]" />
      </motion.g>
      <motion.circle
        cx="160" cy="310" r="2.5"
        fill="#60A5FA" className="dark:fill-[#93C5FD]"
        animate={mounted && !reduceMotion ? { opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.3, 0.8] } : {}}
        transition={{ duration: 3.5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="460" cy="260" r="2"
        fill="#90CAF9" className="dark:fill-[#BAE6FD]"
        animate={mounted && !reduceMotion ? { opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] } : {}}
        transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}