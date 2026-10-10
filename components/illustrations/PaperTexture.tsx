import React from "react";

export function PaperTexture() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.035] mix-blend-multiply">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="paper-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain)" />
      </svg>
    </div>
  );
}
