"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Monitor, Cpu, Server, Database, ArrowRight, Play, CheckCircle2 } from "lucide-react";

const FLOW_STEPS = [
  {
    id: "ui",
    title: "UI Layer",
    subtitle: "Component State & Event Handlers",
    icon: Monitor,
    description: "Captures user interaction, validates payload schema locally, and dispatches asynchronous HTTP/WebSocket requests.",
    codeSnippet: `const handleClick = async () => {\n  const res = await api.post('/events', { payload });\n};`,
    color: "#2196F3",
  },
  {
    id: "api",
    title: "API Layer",
    subtitle: "Django REST Gateway & JWT Auth",
    icon: Server,
    description: "Authenticates request token, enforces rate limiting, and deserializes payload into validated DTO objects.",
    codeSnippet: `@api_view(['POST'])\n@permission_classes([IsAuthenticated])\ndef process_event(request):\n    serializer = EventSerializer(data=request.data)`,
    color: "#0D47A1",
  },
  {
    id: "logic",
    title: "Logic Layer",
    subtitle: "Core Domain Business Logic",
    icon: Cpu,
    description: "Executes computational logic, algorithms, state mutations, and dispatches background worker jobs.",
    codeSnippet: `def execute_pipeline(event_data):\n    result = nlp_engine.cluster(event_data)\n    return compute_state_delta(result)`,
    color: "#082B66",
  },
  {
    id: "database",
    title: "Database Layer",
    subtitle: "PostgreSQL & ACID Transactions",
    icon: Database,
    description: "Persists normalized entities within relational transactions, maintaining index constraints and data consistency.",
    codeSnippet: `BEGIN;\nINSERT INTO events (id, payload, created_at) VALUES (...);\nCOMMIT;`,
    color: "#336699",
  },
];

export function SystemFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const triggerSimulation = () => {
    setIsSimulating(true);
    setActiveStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < FLOW_STEPS.length) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1200);
  };

  return (
    <div className="w-full rounded-xl border border-sky/40 bg-canvas p-6 shadow-notebook">
      {/* Header bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-sky/30 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand" />
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-ink">
              Interactive System Flow Blueprint
            </h4>
          </div>
          <p className="mt-1 text-xs text-ink/70">
            Click any layer to inspect internal contract & code execution.
          </p>
        </div>

        <button
          onClick={triggerSimulation}
          disabled={isSimulating}
          className="inline-flex items-center gap-2 rounded-md bg-ice px-3 py-1.5 font-mono text-xs font-semibold text-ink border border-sky/50 hover:bg-sky/40 transition-colors disabled:opacity-50"
        >
          <Play className={`h-3.5 w-3.5 fill-brand text-brand ${isSimulating ? "animate-spin" : ""}`} />
          {isSimulating ? "Simulating Execution..." : "Simulate Button Click"}
        </button>
      </div>

      {/* Nodes grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FLOW_STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          return (
            <div key={step.id} className="relative">
              <button
                onClick={() => setActiveStep(idx)}
                className={`group w-full rounded-lg border p-4 text-left transition-all duration-200 ${
                  isActive
                    ? "border-brand bg-ice/80 shadow-md ring-2 ring-brand/30"
                    : "border-sky/40 bg-canvas hover:border-sky hover:bg-ice/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-md ${
                      isActive ? "bg-brand text-canvas" : "bg-ice text-ink"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-ink/40">0{idx + 1}</span>
                </div>

                <h5 className="font-mono text-sm font-bold text-ink">{step.title}</h5>
                <p className="text-xs text-ink/70 font-sans mt-0.5">{step.subtitle}</p>

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="mt-3 flex items-center gap-1 font-mono text-[11px] font-semibold text-brand"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" /> Active Scope
                  </motion.div>
                )}
              </button>

              {idx < FLOW_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-4 w-4 text-sky" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Code & Deep Dive Panel */}
      <div className="mt-6 rounded-lg border border-sky/30 bg-ice/40 p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-4 lg:grid-cols-12"
          >
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-brand uppercase mb-1">
                <span>// Deep Dive: {FLOW_STEPS[activeStep].title}</span>
              </div>
              <p className="text-sm font-sans text-ink/90 leading-relaxed">
                {FLOW_STEPS[activeStep].description}
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-md border border-sky/40 bg-ink p-3 text-canvas font-mono text-xs overflow-x-auto">
                <div className="text-[10px] text-sky/60 border-b border-sky/20 pb-1 mb-2">
                  // Sample Execution Spec
                </div>
                <pre className="text-sky/90 whitespace-pre-wrap font-mono">
                  {FLOW_STEPS[activeStep].codeSnippet}
                </pre>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
