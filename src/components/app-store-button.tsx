import type { ReactNode } from "react";
import { APP_STORE_URL } from "@/lib/content";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--tk-ink)] text-[var(--tk-paper)] hover:bg-[#1a2228] shadow-[0_1px_2px_rgba(15,20,25,0.08),0_8px_24px_rgba(15,20,25,0.12)]",
  secondary:
    "bg-[var(--tk-paper)] text-[var(--tk-ink)] border border-[var(--tk-border)] hover:border-[var(--tk-ink)]/20 hover:bg-white",
  dark:
    "bg-white text-[var(--tk-ink)] hover:bg-white/95 shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
};

export function AppStoreButton({
  className,
  variant = "primary",
  children,
}: {
  className?: string;
  variant?: Variant;
  children?: ReactNode;
}) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-[transform,background-color,box-shadow,border-color] duration-300 motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98]",
        variants[variant],
        className,
      )}
    >
      <AppleMark className="size-5 shrink-0 opacity-90" />
      {children ?? (
        <span className="flex flex-col items-start leading-none gap-0.5">
          <span className="text-[10px] font-normal opacity-70">Download on the</span>
          <span className="text-[15px]">App Store</span>
        </span>
      )}
    </a>
  );
}

function AppleMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
