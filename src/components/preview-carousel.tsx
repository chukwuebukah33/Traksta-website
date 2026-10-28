"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { SectionHeading, SectionLabel } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { screens } from "@/lib/content";

export function PreviewCarousel() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scroller.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="preview"
      className="scroll-mt-20 overflow-hidden bg-[var(--tk-paper-deep)] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            title={
              <>
                <SectionLabel>App preview</SectionLabel>
                <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[var(--tk-ink)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  See it before you lace up
                </h2>
              </>
            }
            subtitle="From distance picker to live map — every screen is built for clarity on the move."
            className="max-w-xl"
          />
          <div className="hidden shrink-0 gap-2 sm:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Scroll previews left"
              className="rounded-full border-[var(--tk-border)] bg-white"
            >
              <ChevronLeft size={18} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Scroll previews right"
              className="rounded-full border-[var(--tk-border)] bg-white"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="tk-scroll flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pl-5 sm:pl-[max(1.25rem,calc((100vw-72rem)/2+1.5rem))] pr-5"
      >
        {screens.map((screen) => (
          <figure
            key={screen.label}
            className="w-[220px] shrink-0 snap-center sm:w-[240px]"
          >
            <div className="rounded-[2rem] bg-[var(--tk-ink)] p-2 shadow-[0_20px_60px_rgba(15,20,25,0.15)]">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.65rem] bg-black">
                <Image
                  src={screen.image}
                  alt={`Traksta — ${screen.label}`}
                  fill
                  sizes="240px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <figcaption className="mt-4 text-center text-sm font-medium text-[var(--tk-ink)]">
              {screen.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
