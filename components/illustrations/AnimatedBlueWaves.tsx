"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "motion/react";

interface AnimatedBlueWavesProps {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  pointerPresence: MotionValue<number>;
}

const SVG_WIDTH = 1440;
const SVG_HEIGHT = 900;

interface WaveLayer {
  baseline: number;
  amplitude: number;
  phase: number;
  ripple: number;
  color: string;
  darkColor: string;
  opacity: number;
  darkOpacity: number;
  parallax: number;
}

const waveLayers: WaveLayer[] = [
  {
    baseline: 545,
    amplitude: 42,
    phase: 0.3,
    ripple: 26,
    color: "url(#wave-pale)",
    darkColor: "url(#wave-dark-pale)",
    opacity: 0.7,
    darkOpacity: 0.52,
    parallax: -24,
  },
  {
    baseline: 620,
    amplitude: 50,
    phase: 1.8,
    ripple: -34,
    color: "url(#wave-sky)",
    darkColor: "url(#wave-dark-sky)",
    opacity: 0.58,
    darkOpacity: 0.58,
    parallax: 31,
  },
  {
    baseline: 710,
    amplitude: 44,
    phase: 3.1,
    ripple: 40,
    color: "url(#wave-blue)",
    darkColor: "url(#wave-dark-blue)",
    opacity: 0.36,
    darkOpacity: 0.54,
    parallax: -40,
  },
  {
    baseline: 800,
    amplitude: 34,
    phase: 4.4,
    ripple: -28,
    color: "url(#wave-deep)",
    darkColor: "url(#wave-dark-deep)",
    opacity: 0.2,
    darkOpacity: 0.55,
    parallax: 48,
  },
];

function WavePath({
  layer,
  pointerX,
  pointerY,
  pointerPresence,
  reduceMotion,
  dark = false,
}: AnimatedBlueWavesProps & {
  layer: WaveLayer;
  reduceMotion: boolean;
  dark?: boolean;
}) {
  const path = useTransform(
    [pointerX, pointerY, pointerPresence],
    ([x, y, presence]) =>
      makeWavePath(
        layer,
        reduceMotion ? 0.5 : (x as number),
        reduceMotion ? 0.5 : (y as number),
        reduceMotion ? 0 : (presence as number)
      )
  );
  const translateX = useTransform(
    pointerX,
    (value) => (reduceMotion ? 0 : (value - 0.5) * layer.parallax)
  );

  return (
    <motion.path
      d={path}
      fill={dark ? layer.darkColor : layer.color}
      className={dark ? "hidden dark:block" : "dark:hidden"}
      opacity={dark ? layer.darkOpacity : layer.opacity}
      animate={reduceMotion ? {} : { y: [0, -7, 0] }}
      transition={{
        duration: 19 + layer.phase * 2,
        delay: layer.phase,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      style={{ x: translateX }}
    />
  );
}

function makeWavePath(
  layer: WaveLayer,
  pointerX: number,
  pointerY: number,
  presence: number
) {
  const points = Array.from({ length: 9 }, (_, index) => {
    const x = Math.round(((SVG_WIDTH / 8) * index) * 100) / 100;
    const broadWave =
      Math.sin((index / 8) * Math.PI * 2 + layer.phase) * layer.amplitude +
      Math.sin((index / 8) * Math.PI * 4 + layer.phase * 0.6) * 12;
    const distanceX = (x - pointerX * SVG_WIDTH) / 245;
    const distanceY = (layer.baseline - pointerY * SVG_HEIGHT) / 440;
    const influence = Math.exp(-(distanceX * distanceX) * 0.5 - distanceY * distanceY * 0.5);
    const localRipple =
      Math.sin(distanceX * 2.2) * influence * layer.ripple * presence;

    const y = Math.round((layer.baseline + broadWave + localRipple) * 100) / 100;
    return { x, y };
  });

  let path = `M ${points[0].x} ${points[0].y}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const middleX = Math.round(((current.x + next.x) / 2) * 100) / 100;
    const middleY = Math.round(((current.y + next.y) / 2) * 100) / 100;
    path += ` Q ${current.x} ${current.y} ${middleX} ${middleY}`;
  }
  const last = points[points.length - 1];
  path += ` Q ${last.x} ${last.y} ${SVG_WIDTH} ${last.y} L ${SVG_WIDTH} ${SVG_HEIGHT} L 0 ${SVG_HEIGHT} Z`;
  return path;
}

export function AnimatedBlueWaves({
  pointerX,
  pointerY,
  pointerPresence,
}: AnimatedBlueWavesProps) {
  const reduceMotion = useReducedMotion();
  const glowLeft = useTransform(pointerX, (value) => `${value * 100}%`);
  const glowTop = useTransform(pointerY, (value) => `${value * 100}%`);
  const glowOpacity = useTransform(pointerPresence, [0, 1], [0, 0.66]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#C5E4FF]/60 via-[#EAF5FF]/30 to-transparent dark:from-[#071329] dark:via-[#10213D]/50 dark:to-transparent" />

      {/* Atmospheric haze layer softly unifying waves with background */}
      <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-[#BBDDFB]/30 via-[#DCEEFE]/15 to-transparent dark:from-[#08152D]/50 dark:via-[#0F2242]/20 dark:to-transparent" />

      <motion.div
        className="absolute h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[420px] sm:w-[420px]"
        style={{
          left: glowLeft,
          top: glowTop,
          opacity: reduceMotion ? 0 : glowOpacity,
          background:
            "radial-gradient(circle, rgba(96,165,250,0.28) 0%, rgba(147,197,253,0.12) 40%, transparent 72%)",
        }}
      />

      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="wave-pale" x1="0" x2="0.85" y1="0" y2="1">
            <stop stopColor="#FAFCFE" stopOpacity="0.85" />
            <stop offset="0.5" stopColor="#EEF7FE" stopOpacity="0.65" />
            <stop offset="1" stopColor="#E3F2FD" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="wave-sky" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#E3F2FD" />
            <stop offset="1" stopColor="#90CAF9" />
          </linearGradient>
          <linearGradient id="wave-blue" x1="0" x2="1" y1="0" y2="0.8">
            <stop stopColor="#90CAF9" />
            <stop offset="1" stopColor="#2196F3" />
          </linearGradient>
          <linearGradient id="wave-deep" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#2196F3" />
            <stop offset="1" stopColor="#0D47A1" />
          </linearGradient>
          <linearGradient id="wave-dark-pale" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#2E4D74" stopOpacity="0.85" />
            <stop offset="0.5" stopColor="#244165" stopOpacity="0.75" />
            <stop offset="1" stopColor="#1B365A" />
          </linearGradient>
          <linearGradient id="wave-dark-sky" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#315B8D" />
            <stop offset="1" stopColor="#193C68" />
          </linearGradient>
          <linearGradient id="wave-dark-blue" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#244E80" />
            <stop offset="1" stopColor="#142F54" />
          </linearGradient>
          <linearGradient id="wave-dark-deep" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#1C3C66" />
            <stop offset="1" stopColor="#10213D" />
          </linearGradient>
        </defs>

        {waveLayers.map((layer, index) => (
          <WavePath
            key={`light-${index}`}
            layer={layer}
            pointerX={pointerX}
            pointerY={pointerY}
            pointerPresence={pointerPresence}
            reduceMotion={Boolean(reduceMotion)}
          />
        ))}
        {waveLayers.map((layer, index) => (
          <WavePath
            key={`dark-${index}`}
            layer={layer}
            pointerX={pointerX}
            pointerY={pointerY}
            pointerPresence={pointerPresence}
            reduceMotion={Boolean(reduceMotion)}
            dark
          />
        ))}
      </svg>

      {/* Ambient mist drifts independently of the cursor-reactive filled waves. */}
      <motion.div
        className="absolute -inset-x-[12%] bottom-[4%] h-[38%] rounded-[50%] bg-[#B9DDFB]/30 blur-[70px] dark:bg-[#244B83]/20"
        animate={reduceMotion ? {} : { x: [0, 28, -12, 0], y: [0, -12, 5, 0] }}
        transition={{ duration: 26, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
    </div>
  );
}
