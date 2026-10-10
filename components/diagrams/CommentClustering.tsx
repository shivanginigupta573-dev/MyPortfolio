"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const SAMPLE_CLUSTERS = [
  { id: 1, label: "UI / UX Feedback", count: 42, color: "#2196F3", keywords: ["layout", "responsiveness", "color contrast"] },
  { id: 2, label: "API Latency", count: 28, color: "#0D47A1", keywords: ["websocket timeout", "payload size", "queries"] },
  { id: 3, label: "Feature Requests", count: 35, color: "#336699", keywords: ["export PDF", "dark theme", "auth roles"] },
];

export function CommentClustering() {
  const [selectedCluster, setSelectedCluster] = useState(SAMPLE_CLUSTERS[0]);

  return (
    <div className="rounded-lg border border-sky/40 bg-canvas p-5 shadow-notebook">
      <div className="flex items-center justify-between mb-4 border-b border-sky/20 pb-3">
        <h5 className="font-mono text-xs font-bold text-ink uppercase tracking-wide">
          // NLP Comment Clustering Pipeline
        </h5>
        <span className="font-mono text-[11px] text-brand bg-ice px-2 py-0.5 rounded border border-sky/30">
          TF-IDF + K-Means
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        {SAMPLE_CLUSTERS.map((cluster) => (
          <button
            key={cluster.id}
            onClick={() => setSelectedCluster(cluster)}
            className={`p-3 rounded-md border text-left transition-all font-mono ${
              selectedCluster.id === cluster.id
                ? "border-brand bg-ice/80 shadow-sm"
                : "border-sky/30 bg-canvas hover:bg-ice/20"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-ink">{cluster.label}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand text-canvas font-mono">
                {cluster.count}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {cluster.keywords.map((kw, i) => (
                <span key={i} className="text-[10px] text-ink/60 bg-sky/20 px-1 rounded">
                  {kw}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="rounded bg-ice/50 p-3 border border-sky/30 font-mono text-xs text-ink/80 flex items-center justify-between">
        <span>Selected Cluster Focus: <strong className="text-brand">{selectedCluster.label}</strong></span>
        <span className="text-[11px] text-ink/60">{selectedCluster.count} classified entries</span>
      </div>
    </div>
  );
}
