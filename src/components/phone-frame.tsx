import Image from "next/image";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[min(100%,280px)] rounded-[2.75rem] bg-[var(--tk-ink)] p-[10px] shadow-[0_24px_80px_rgba(15,20,25,0.18),0_0_0_1px_rgba(15,20,25,0.06)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute left-1/2 top-[14px] z-20 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-[var(--tk-ink)]" />
      <div className="relative overflow-hidden rounded-[2.25rem] bg-black aspect-[9/19.5]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="280px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
