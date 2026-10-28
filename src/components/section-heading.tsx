import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "light";
}) {
  return (
    <p
      className={
        tone === "light"
          ? "font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--tk-accent-glow)]"
          : "font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--tk-accent)]"
      }
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: {
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {title}
      {subtitle ? (
        <p className="text-lg text-[var(--tk-muted)] leading-relaxed font-normal">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
