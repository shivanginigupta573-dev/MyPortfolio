"use client";

import React, { useState, useEffect } from "react";

const GRID_SIZE = 6;

export function SwarmGrid() {
  const [agents, setAgents] = useState([
    { id: 1, x: 0, y: 0, color: "#2196F3" },
    { id: 2, x: 5, y: 5, color: "#0D47A1" },
    { id: 3, x: 0, y: 5, color: "#336699" },
  ]);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAgents((prev) =>
        prev.map((agent) => {
          const dx = Math.floor(Math.random() * 3) - 1;
          const dy = Math.floor(Math.random() * 3) - 1;
          return {
            ...agent,
            x: Math.max(0, Math.min(GRID_SIZE - 1, agent.x + dx)),
            y: Math.max(0, Math.min(GRID_SIZE - 1, agent.y + dy)),
          };
        })
      );
      setActiveStep((s) => s + 1);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-lg border border-sky/40 bg-canvas p-5 shadow-notebook">
      <div className="flex items-center justify-between mb-4 border-b border-sky/20 pb-3">
        <h5 className="font-mono text-xs font-bold text-ink uppercase tracking-wide">
          // Multiprocessing Agent Grid State
        </h5>
        <span className="font-mono text-[11px] text-brand bg-ice px-2 py-0.5 rounded border border-sky/30">
          Step: {activeStep}
        </span>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-6 gap-1 bg-sky/20 p-2 rounded-md border border-sky/40">
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, idx) => {
            const row = Math.floor(idx / GRID_SIZE);
            const col = idx % GRID_SIZE;
            const occupyingAgent = agents.find((a) => a.x === col && a.y === row);

            return (
              <div
                key={idx}
                className={`h-8 w-8 rounded flex items-center justify-center font-mono text-[10px] transition-all duration-300 ${
                  occupyingAgent
                    ? "bg-brand text-canvas font-bold shadow-sm"
                    : "bg-canvas text-ink/30 hover:bg-ice"
                }`}
              >
                {occupyingAgent ? `A${occupyingAgent.id}` : `${col},${row}`}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 font-mono text-[11px] text-ink/70 flex items-center justify-between border-t border-sky/20 pt-3">
        <span>Worker Pool: 3 Python Processes</span>
        <span className="text-brand">Inter-process IPC active</span>
      </div>
    </div>
  );
}
