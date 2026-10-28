"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { AppStoreButton } from "@/components/app-store-button";
import { GradientField, RoutePathSvg } from "@/components/motion/gradient-field";
import { heroStats } from "@/lib/content";
import { easeOut, fadeUp, heroTransition } from "@/lib/motion";

export function HeroMotion() {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 24,
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

  const item = (delay: number) =>
    reduce
      ? {}
      : {
          initial: "hidden" as const,
          animate: "visible" as const,
          variants: fadeUp,
          transition: { ...heroTransition, delay },
        };

  return (
    <section className="tk-mesh tk-grain relative min-h-[92vh] overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <GradientField />
      <RoutePathSvg className="pointer-events-none absolute inset-x-0 bottom-[20%] h-40 w-full opacity-50" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <motion.div
            {...item(0)}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--tk-border)] bg-white/70 px-4 py-1.5 text-xs font-medium text-[var(--tk-muted)] shadow-sm backdrop-blur-md"
          >
            <span className="size-1.5 rounded-full bg-[var(--tk-accent)] shadow-[0_0_8px_var(--tk-accent)]" />
            Available on iOS
          </motion.div>

          <motion.div {...item(0.1)} className="space-y-5">
            <h1 className="font-heading text-[2.75rem] font-bold leading-[1.02] tracking-tight text-[var(--tk-ink)] sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              Your next route,
              <span className="tk-gradient-heading block">ready in seconds</span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-[var(--tk-muted)]">
              Traksta turns any distance into a loop on real streets and trails —
              no spreadsheets, no guesswork, just go.
            </p>
          </motion.div>

          <motion.div
            {...item(0.22)}
            className="flex flex-wrap items-center gap-4"
          >
            <AppStoreButton />
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--tk-ink)] transition-colors hover:text-[var(--tk-accent)]"
            >
              See how it works
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.dl
            {...item(0.35)}
            className="grid grid-cols-3 gap-4 border-t border-[var(--tk-border)] pt-8"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-xl font-bold text-[var(--tk-ink)] sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-[var(--tk-muted)] sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          {...item(0.18)}
          className="relative flex justify-center lg:justify-end"
          style={{ y: reduce ? 0 : undefined }}
        >
          <motion.div
            className="relative [perspective:1400px]"
            style={{
              rotateX: reduce ? 0 : rotateX,
              rotateY: reduce ? 0 : rotateY,
            }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[var(--tk-accent)]/20 via-transparent to-[var(--tk-coral)]/15 blur-2xl" />
            <div className="relative w-[min(100%,290px)] rounded-[2.85rem] bg-gradient-to-b from-[#1e262c] to-[var(--tk-ink)] p-[11px] shadow-[0_32px_90px_rgba(15,20,25,0.28),0_0_0_1px_rgba(15,20,25,0.06)]">
              <div className="pointer-events-none absolute left-1/2 top-[15px] z-20 h-[24px] w-[92px] -translate-x-1/2 rounded-full bg-[var(--tk-ink)]" />
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.35rem] bg-black">
                <Image
                  src="/images/preview-route.jpeg"
                  alt="Traksta route map on iPhone"
                  fill
                  priority
                  sizes="290px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <motion.div
              className="absolute -left-6 top-1/4 hidden rounded-2xl border border-white/60 bg-white/90 p-3 shadow-lg backdrop-blur-sm lg:block"
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 4, repeat: Infinity, ease: easeOut }
              }
            >
              <Image
                src="/images/logo-pin.png"
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-lg object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -right-4 bottom-1/4 hidden overflow-hidden rounded-xl border border-[var(--tk-border)] shadow-md lg:block"
              animate={reduce ? undefined : { y: [0, 8, 0] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 5, repeat: Infinity, ease: easeOut, delay: 0.5 }
              }
            >
              <Image
                src="/images/preview-satellite.jpeg"
                alt=""
                width={88}
                height={140}
                className="h-[100px] w-[62px] object-cover object-top"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
