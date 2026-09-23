"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { screens } from "@/lib/content";

export function PreviewCarousel() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scroller.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="preview"
      className="relative py-28 lg:py-36 bg-[var(--tk-dark)] overflow-hidden scroll-mt-16"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(57,211,83,0.2),transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-xs font-mono text-[var(--tk-cyan)]/60 tracking-[0.3em] uppercase block mb-4">
              {"// Screens"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--tk-white)]">
              App Preview
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Scroll previews left"
              className="rounded-full border-white/10 bg-transparent text-white/40 hover:text-[var(--tk-cyan)] hover:border-[var(--tk-cyan)]/30 hover:bg-transparent"
            >
              <ChevronLeft size={18} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Scroll previews right"
              className="rounded-full border-white/10 bg-transparent text-white/40 hover:text-[var(--tk-cyan)] hover:border-[var(--tk-cyan)]/30 hover:bg-transparent"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
      <div
        ref={scroller}
        className="tk-scroll flex gap-6 overflow-x-auto pb-6 px-6"
      >
        {screens.map((screen) => (
          <figure
            key={screen.ref}
            className="flex-shrink-0 w-[220px] sm:w-[250px] group"
          >
            <div className="tk-phone relative rounded-2xl overflow-hidden border border-white/5 bg-[rgba(13,31,60,0.4)] transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#080E1A] rounded-b-xl z-10" />
              <div className="relative aspect-[9/19] overflow-hidden">
                <Image
                  src={screen.image}
                  alt={`Traksta ${screen.label} screen`}
                  fill
                  sizes="250px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <figcaption className="mt-4 text-center">
              <span className="text-[9px] font-mono text-white/20 block mb-1">
                {screen.ref}
              </span>
              <span className="text-sm font-medium text-white/55">
                {screen.label}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
