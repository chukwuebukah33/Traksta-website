"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Gauge, Map, Route, Sparkles } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { RoutePathSvg } from "@/components/motion/gradient-field";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/reveal";
import { SectionHeading, SectionLabel } from "@/components/section-heading";
import { screens } from "@/lib/content";
import { defaultReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

const showcaseScreens = screens.filter((s) => s.ref !== "SCR::005");

const bentoChips = [
  { icon: Route, label: "Loop routes", sub: "Always home" },
  { icon: Gauge, label: "<3s generate", sub: "Instant maps" },
  { icon: Map, label: "Live GPS", sub: "Real streets" },
  { icon: Sparkles, label: "4.9★ rated", sub: "App Store" },
] as const;

function TiltPhone({
  src,
  alt,
  className,
  depth = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  depth?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 180,
    damping: 22,
  });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduce) return;
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [reduce, x, y],
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      className={cn("relative [perspective:1200px]", className)}
      style={{
        zIndex: 10 - depth,
        rotateX: reduce ? 0 : rotateX,
        rotateY: reduce ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        className={cn(
          "relative mx-auto w-[min(100%,260px)] rounded-[2.75rem] bg-gradient-to-b from-[#2a3238] to-[var(--tk-ink)] p-[10px]",
          depth === 0
            ? "shadow-[0_40px_100px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.08)]"
            : "shadow-[0_24px_60px_rgba(0,0,0,0.35)]",
        )}
        style={
          depth > 0
            ? {
                transform: `translateZ(${-depth * 40}px) scale(${1 - depth * 0.04})`,
                opacity: 1 - depth * 0.15,
              }
            : undefined
        }
      >
        <div className="pointer-events-none absolute left-1/2 top-[14px] z-20 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-[var(--tk-ink)]" />
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.25rem] bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={defaultReveal}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="260px"
                className="object-cover object-top"
                priority={depth === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function AppPreviewShowcase() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const active = showcaseScreens[index] ?? showcaseScreens[0];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % showcaseScreens.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section
      id="preview"
      className="relative scroll-mt-20 overflow-hidden bg-[var(--tk-dark-band)] py-24 lg:py-32"
    >
      <div className="tk-dark-mesh pointer-events-none absolute inset-0" aria-hidden />
      <RoutePathSvg className="pointer-events-none absolute inset-x-0 top-[18%] h-48 w-full opacity-60 md:top-[22%] md:h-56" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-14">
          <SectionHeading
            align="left"
            title={
              <>
                <SectionLabel tone="light">App preview</SectionLabel>
                <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  Depth, motion, clarity —{" "}
                  <span className="text-[var(--tk-accent-glow)]">on every screen</span>
                </h2>
              </>
            }
            subtitle="Tilt the hero device, watch routes crossfade, and peek at the stack behind — built like a product launch, not a slideshow."
            className="max-w-2xl [&_p]:text-white/55"
          />
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <StaggerReveal className="grid grid-cols-2 gap-3 sm:gap-4">
            {bentoChips.map(({ icon: Icon, label, sub }) => (
              <StaggerItem key={label}>
                <div className="tk-glass-chip flex flex-col gap-2 rounded-2xl p-4 sm:p-5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-[var(--tk-accent-glow)]">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-white">{label}</p>
                    <p className="text-xs text-white/45">{sub}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <Reveal delay={0.15} className="relative flex min-h-[420px] items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {[2, 1].map((depth) => (
                <div
                  key={depth}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: `translateX(${depth * 28}px) translateY(${depth * 12}px) rotate(${depth * 3}deg)`,
                  }}
                >
                  <TiltPhone
                    src={
                      showcaseScreens[(index + depth) % showcaseScreens.length].image
                    }
                    alt=""
                    depth={depth}
                    className="pointer-events-none opacity-80"
                  />
                </div>
              ))}
            </div>
            <TiltPhone src={active.image} alt={`Traksta — ${active.label}`} />

            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
              {showcaseScreens.map((screen, i) => (
                <button
                  key={screen.ref}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${screen.label}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index
                      ? "w-8 bg-[var(--tk-accent-glow)]"
                      : "w-1.5 bg-white/25 hover:bg-white/40",
                  )}
                />
              ))}
            </div>
          </Reveal>
        </div>

        <StaggerReveal className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {showcaseScreens.map((screen) => (
            <StaggerItem key={screen.ref}>
              <button
                type="button"
                onClick={() =>
                  setIndex(showcaseScreens.findIndex((s) => s.ref === screen.ref))
                }
                className={cn(
                  "tk-glass-chip group w-full overflow-hidden rounded-2xl p-3 text-left transition-[border-color,transform] duration-300",
                  active.ref === screen.ref
                    ? "border-[var(--tk-accent-glow)]/50 ring-1 ring-[var(--tk-accent-glow)]/30"
                    : "hover:border-white/20",
                )}
              >
                <div className="relative mb-3 aspect-[9/16] overflow-hidden rounded-xl bg-black/40">
                  <Image
                    src={screen.image}
                    alt=""
                    fill
                    sizes="160px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/35">
                  {screen.ref}
                </p>
                <p className="font-heading text-sm font-medium text-white/90">
                  {screen.label}
                </p>
              </button>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
