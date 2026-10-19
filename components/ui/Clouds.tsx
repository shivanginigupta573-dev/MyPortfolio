"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const blobs = {
  back: [
    { w: "70%", h: 220, left: "-10%", bottom: 60, dur: 70, op: 0.7 },
    { w: "60%", h: 200, left: "45%", bottom: 80, dur: 90, op: 0.6 },
  ],
  front: [
    { w: "80%", h: 260, left: "-15%", bottom: -90, dur: 80, op: 1 },
    { w: "70%", h: 240, left: "35%", bottom: -110, dur: 100, op: 1 },
  ],
};

export default function Clouds({ layer }: { layer: "back" | "front" }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, layer === "back" ? 40 : -60]);

  return (
    <motion.div
      style={{ y }}
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-[55%] ${layer === "back" ? "z-[1]" : "z-20"}`}
    >
      {blobs[layer].map((b, i) => (
        <div
          key={i}
          className="cloud"
          style={{
            width: b.w,
            height: b.h,
            left: b.left,
            bottom: b.bottom,
            opacity: b.op,
            animationDuration: `${b.dur}s`,
          }}
        />
      ))}
    </motion.div>
  );
}