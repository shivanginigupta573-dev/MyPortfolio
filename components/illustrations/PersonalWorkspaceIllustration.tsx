"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

export function PersonalWorkspaceIllustration() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex cursor-pointer select-none items-center justify-center p-2 sm:p-4"
    >
      <motion.div
        animate={{
          rotateY: mousePos.x * 12,
          rotateX: -mousePos.y * 10,
          y: mousePos.y * 4,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full max-w-[540px]"
      >
        <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-sky-200/60 via-sky-100/20 to-transparent blur-2xl dark:from-[#1E3A5F]/60 dark:via-[#0F172A]/10" />

        <svg
          viewBox="0 0 520 390"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 h-auto w-full drop-shadow-[0_10px_25px_rgba(13,71,161,0.15)]"
        >
          <g transform="translate(40 270)">
            <path d="M0 18 C90 2 190 4 260 18 C305 27 370 30 420 20 V58 H0 Z" fill="#E3F2FD" className="dark:fill-[#1B2B45]" />
            <path d="M0 18 C90 2 190 4 260 18 C305 27 370 30 420 20" stroke="#90CAF9" strokeWidth="2" className="dark:stroke-[#60A5FA]" strokeLinecap="round"/> 
          </g>

          <g transform="translate(84 228) rotate(-4)">
            <rect x="0" y="0" width="118" height="82" rx="10" fill="#FAFCFE" stroke="#90CAF9" strokeWidth="2" className="dark:fill-[#111C2E] dark:stroke-[#3B82F6]" />
            <line x1="59" y1="0" x2="59" y2="82" stroke="#90CAF9" strokeWidth="1.5" strokeDasharray="4 4" className="dark:stroke-[#60A5FA]" />
            <path d="M16 22 H42 M16 34 H31 M16 46 H36" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" className="dark:stroke-[#60A5FA]" />
            <circle cx="82" cy="31" r="12" fill="none" stroke="#0D47A1" strokeWidth="2" className="dark:stroke-[#60A5FA]" />
            <path d="M82 45 V59" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" className="dark:stroke-[#60A5FA]" />
          </g>

          <g transform="translate(45 156)">
            <rect x="0" y="0" width="26" height="52" rx="7" fill="#E3F2FD" stroke="#0D47A1" strokeWidth="2" className="dark:fill-[#172338] dark:stroke-[#60A5FA]"/>
            <path d="M26 10 C36 8 38 24 26 25" stroke="#0D47A1" strokeWidth="2" fill="none" className="dark:stroke-[#60A5FA]"/>
            <path d="M8 -10 C3 -25 14 -32 12 -41" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" fill="none" className="dark:stroke-[#60A5FA]" />
            <path d="M15 -14 C12 -28 21 -34 18 -44" stroke="#90CAF9" strokeWidth="2" strokeLinecap="round" fill="none" className="dark:stroke-[#60A5FA]" />
          </g>

          <g transform="translate(276 166)">
            <rect x="0" y="0" width="126" height="85" rx="10" fill="#0D47A1" className="dark:fill-[#1D314F]"/>
            <rect x="7" y="7" width="112" height="71" rx="6" fill="#F8FCFF" stroke="#E3F2FD" strokeWidth="2" className="dark:fill-[#0B1220] dark:stroke-[#24375B]"/>
            <rect x="20" y="20" width="44" height="5" rx="2.5" fill="#2196F3"/>
            <rect x="20" y="31" width="70" height="5" rx="2.5" fill="#90CAF9" className="dark:fill-[#60A5FA]"/>
            <rect x="20" y="42" width="62" height="5" rx="2.5" fill="#0D47A1" fillOpacity="0.8" className="dark:fill-[#EAF2FF] dark:fill-opacity-70"/>
            <rect x="20" y="53" width="84" height="5" rx="2.5" fill="#2196F3"/>
            <path d="M0 90 L126 90 L116 82 L10 82 Z" fill="#90CAF9" className="dark:fill-[#24375B]"/>
            <rect x="41" y="82" width="44" height="5" rx="2.5" fill="#0D47A1" fillOpacity="0.7" className="dark:fill-[#60A5FA]"/>
          </g>

          <g transform="translate(168 148)">
            <path d="M45 0 C70 18 86 22 109 46 C126 63 128 98 120 112 L42 112 C30 96 22 65 30 34 C35 15 39 12 45 0Z" fill="#1A4A9D" className="dark:fill-[#2D5FA6]"/>
            <path d="M42 48 C62 67 101 80 122 88" stroke="#E3F2FD" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
            <path d="M38 90 C94 115 131 109 161 88" stroke="#EAF2FF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" className="dark:opacity-80"/>

            <g transform="translate(82 46)">
              <circle cx="0" cy="0" r="57" fill="#F5CBB5"/>
              <path d="M-35 -40 C-2 -68 34 -68 52 -36 C60 -20 58 2 48 18 C31 48 12 64 -24 59 C-46 54 -59 31 -58 7 C-58 -13 -50 -28 -35 -40Z" fill="#1D3557" className="dark:fill-[#0F172A]"/>
              <path d="M-6 -34 C23 -35 46 -15 50 8 C53 27 44 46 19 53 C-2 61 -27 58 -39 41 C-51 24 -52 2 -42 -18 C-33 -30 -19 -38 -6 -34Z" fill="#2D4F87" className="dark:fill-[#203B6B]"/>
              <path d="M-7 -31 C13 -38 39 -37 46 -18 C50 -7 49 11 40 22 C28 36 11 41 -8 35 C-21 29 -33 15 -32 -1 C-31 -15 -22 -27 -7 -31Z" fill="#F5CBB5"/>
              <path d="M-18 42 C-1 32 24 35 44 46 C60 55 71 71 73 89 C50 104 26 111 -1 107 C-26 102 -42 87 -47 68 C-48 60 -38 49 -18 42Z" fill="#E3F2FD" className="dark:fill-[#182A46]"/>
              <path d="M-22 26 C-16 16 -9 11 0 10 C11 9 17 18 15 29 C13 41 2 50 -13 50 C-29 50 -38 39 -35 31 C-32 29 -29 28 -22 26Z" fill="#F5CBB5"/>
              <path d="M-1 -43 C-15 -33 -25 -22 -29 -2 C-34 24 -28 49 -7 62 C7 72 24 72 35 64 C52 51 56 24 51 -5 C47 -23 34 -41 20 -49 C10 -54 4 -52 -1 -43Z" fill="#2E4A7B" className="dark:fill-[#142746]"/>
              <path d="M-7 23 C-19 31 -29 43 -27 58 C-25 72 -12 78 2 78 C18 78 31 69 37 55 C44 39 35 20 18 17 C10 15 0 18 -7 23Z" fill="#F7D7C5"/>
              <circle cx="-14" cy="-6" r="2.5" fill="#0B1220"/>
              <circle cx="20" cy="-4" r="2.5" fill="#0B1220"/>
              <path d="M-12 12 C-3 18 10 18 19 11" stroke="#0D47A1" strokeWidth="2" strokeLinecap="round"/>
              <path d="M-29 13 C-41 2 -43 -17 -31 -27" stroke="#1D3557" strokeWidth="3" strokeLinecap="round"/>
              <path d="M40 13 C55 3 62 -11 58 -24" stroke="#1D3557" strokeWidth="3" strokeLinecap="round"/>
            </g>

            <motion.g
              animate={{ rotate: mousePos.x * 12 }}
              transition={{ type: "spring", stiffness: 160, damping: 20 }}
              style={{ transformOrigin: "center" }}
            >
              <path d="M112 148 L170 150 L207 182 L153 185 L112 148Z" fill="#D9EAFB" className="dark:fill-[#2A3D5F]" />
              <path d="M134 121 L206 123 L222 153 L141 160 Z" fill="#CBE1FF" className="dark:fill-[#365581]" />
              <path d="M92 150 L116 150 L127 217 L92 231 Z" fill="#E3F2FD" className="dark:fill-[#182A46]"/>
              <path d="M92 231 L127 217 L215 223 L197 239 L119 245 Z" fill="#F8FBFF" className="dark:fill-[#12213A]"/>
            </motion.g>
          </g>

          <g transform="translate(335 270)">
            <path d="M0 0 C18 -12 25 -18 42 -20 C66 -23 77 -8 84 6 C92 21 86 39 68 45 C50 51 15 52 0 30 Z" fill="#0D47A1" className="dark:fill-[#203B6B]"/>
            <path d="M22 16 C18 7 23 0 31 0 C39 0 42 8 40 18 C37 28 29 30 22 16Z" fill="#EAF2FF" className="dark:fill-[#9DB2CE]" fillOpacity="0.6"/>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
