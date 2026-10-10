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
      className="relative flex items-center justify-center p-4 select-none cursor-pointer"
    >
      <motion.div
        animate={{
          rotateY: mousePos.x * 12,
          rotateX: -mousePos.y * 12,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full max-w-sm sm:max-w-md"
      >
        {/* Soft Background Warm Glow */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-ice/60 via-sky/30 to-transparent dark:from-dark-surface dark:via-dark-brand/20 blur-xl opacity-80" />

        {/* Editorial Desk Workspace SVG */}
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-auto drop-shadow-sm"
        >
          {/* Desk Mat & Surface */}
          <rect x="40" y="240" width="320" height="8" rx="4" fill="#0D47A1" className="dark:fill-[#3B82F6]" fillOpacity="0.8" />
          <rect x="70" y="248" width="10" height="35" rx="2" fill="#90CAF9" className="dark:fill-[#1E293B]" />
          <rect x="320" y="248" width="10" height="35" rx="2" fill="#90CAF9" className="dark:fill-[#1E293B]" />

          {/* Open Notebook with handwritten code sketch */}
          <g transform="translate(65, 175) rotate(-4)">
            <rect x="0" y="0" width="90" height="60" rx="4" fill="#FAFCFE" stroke="#90CAF9" strokeWidth="1.5" className="dark:fill-[#111C2E] dark:stroke-[#336699]" />
            <line x1="45" y1="0" x2="45" y2="60" stroke="#90CAF9" strokeWidth="1" strokeDasharray="3 3" />
            {/* Hand-drawn sketch lines */}
            <path d="M12 18 L35 18 M12 28 L28 28 M12 38 L32 38" stroke="#2196F3" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="68" cy="25" r="10" fill="none" stroke="#0D47A1" className="dark:stroke-[#60A5FA]" strokeWidth="1.5" />
            <path d="M68 35 L68 45" stroke="#2196F3" strokeWidth="1.5" strokeDasharray="2 2" />
          </g>

          {/* Coffee Mug with subtle animated steam */}
          <g transform="translate(170, 195)">
            <rect x="0" y="0" width="22" height="26" rx="4" fill="#FAFCFE" stroke="#0D47A1" strokeWidth="1.5" className="dark:fill-[#111C2E] dark:stroke-[#60A5FA]" />
            <path d="M22 6 C28 6, 28 20, 22 20" stroke="#0D47A1" strokeWidth="1.5" fill="none" className="dark:stroke-[#60A5FA]" />
            {/* Steam curves */}
            <motion.path
              animate={{ opacity: [0.3, 0.8, 0.3], y: [-2, -6, -2] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              d="M7 -6 C5 -12, 11 -14, 8 -18"
              stroke="#2196F3"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Main Laptop Monitor & Keyboard Base */}
          <g transform="translate(205, 130)">
            {/* Monitor Frame */}
            <rect x="0" y="0" width="140" height="95" rx="8" fill="#0D47A1" className="dark:fill-[#1E293B]" />
            <rect x="6" y="6" width="128" height="83" rx="4" fill="#FAFCFE" stroke="#E3F2FD" strokeWidth="1" className="dark:fill-[#0B1220] dark:stroke-[#1E293B]" />

            {/* Screen Code Lines */}
            <rect x="16" y="18" width="50" height="4" rx="2" fill="#2196F3" />
            <rect x="16" y="28" width="75" height="4" rx="2" fill="#90CAF9" className="dark:fill-[#60A5FA]" />
            <rect x="26" y="38" width="60" height="4" rx="2" fill="#0D47A1" className="dark:fill-[#EAF2FF]" fillOpacity="0.7" />
            <rect x="26" y="48" width="80" height="4" rx="2" fill="#2196F3" />
            <rect x="16" y="58" width="40" height="4" rx="2" fill="#90CAF9" />

            {/* Glowing Cursor Blink */}
            <motion.rect
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              x="58"
              y="58"
              width="6"
              height="4"
              rx="1"
              fill="#2196F3"
            />

            {/* Laptop Base Keyboard */}
            <path d="M-15 105 L155 105 L145 95 L-5 95 Z" fill="#90CAF9" className="dark:fill-[#1E293B]" fillOpacity="0.8" />
            <rect x="45" y="97" width="50" height="4" rx="2" fill="#0D47A1" className="dark:fill-[#60A5FA]" fillOpacity="0.6" />
          </g>

          {/* Plant Pot Accent for Warmth & Personality */}
          <g transform="translate(35, 180)">
            <path d="M5 25 L25 25 L22 55 L8 55 Z" fill="#E3F2FD" stroke="#0D47A1" strokeWidth="1.5" className="dark:fill-[#1E293B] dark:stroke-[#60A5FA]" />
            {/* Plant Leaves */}
            <path d="M15 25 Q 5 10 0 15 Q 10 22 15 25" fill="#2196F3" />
            <path d="M15 25 Q 25 8 30 14 Q 20 22 15 25" fill="#90CAF9" />
            <path d="M15 25 Q 15 2 12 0 Q 12 18 15 25" fill="#0D47A1" className="dark:fill-[#60A5FA]" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
