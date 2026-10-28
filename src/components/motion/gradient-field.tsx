"use client";

import { motion, useReducedMotion } from "framer-motion";

export function GradientField({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      <motion.div
        className="absolute -left-[20%] top-[-30%] h-[70%] w-[70%] rounded-full bg-[var(--tk-accent)] opacity-[0.14] blur-[100px]"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 40, -20, 0],
                y: [0, 30, 10, 0],
                scale: [1, 1.08, 0.95, 1],
              }
        }
        transition={
          reduce
            ? undefined
            : { duration: 18, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="absolute -right-[15%] top-[10%] h-[55%] w-[55%] rounded-full bg-[var(--tk-coral)] opacity-[0.1] blur-[90px]"
        animate={
          reduce
            ? undefined
            : {
                x: [0, -35, 25, 0],
                y: [0, 20, -15, 0],
                scale: [1, 0.92, 1.05, 1],
              }
        }
        transition={
          reduce
            ? undefined
            : { duration: 22, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="absolute bottom-[-20%] left-[25%] h-[50%] w-[50%] rounded-full bg-[#2a4a6e] opacity-[0.12] blur-[110px]"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 30, -30, 0],
                y: [0, -25, 15, 0],
              }
        }
        transition={
          reduce
            ? undefined
            : { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }
      />
    </div>
  );
}

export function RoutePathSvg({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      className={className}
      viewBox="0 0 800 400"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="tkRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--tk-accent)" stopOpacity="0" />
          <stop offset="35%" stopColor="var(--tk-accent)" stopOpacity="0.85" />
          <stop offset="65%" stopColor="var(--tk-coral)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--tk-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,220 C120,120 220,320 340,200 S560,80 680,180 S760,260 800,240"
        stroke="url(#tkRouteGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        pathLength={1}
        initial={{ pathLength: 0, opacity: 0.3 }}
        animate={
          reduce
            ? { pathLength: 1, opacity: 0.45 }
            : { pathLength: 1, opacity: [0.35, 0.65, 0.4] }
        }
        transition={
          reduce
            ? { duration: 0.01 }
            : {
                pathLength: { duration: 2.8, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }
        }
      />
      <motion.circle
        r="5"
        fill="var(--tk-accent)"
        initial={{ opacity: 0 }}
        animate={reduce ? { opacity: 0.8 } : { opacity: [0.4, 1, 0.4] }}
        transition={
          reduce
            ? { duration: 0.01 }
            : { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          path="M0,220 C120,120 220,320 340,200 S560,80 680,180 S760,260 800,240"
        />
      </motion.circle>
    </svg>
  );
}
