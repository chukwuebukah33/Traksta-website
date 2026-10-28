import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function LegalHeader({ widthClass }: { widthClass: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--tk-border)] bg-[var(--tk-paper)]/90 backdrop-blur-md">
      <div
        className={`${widthClass} mx-auto flex h-14 items-center justify-between px-5 sm:px-6`}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--tk-muted)] transition-colors hover:text-[var(--tk-ink)]"
        >
          <ArrowLeft size={16} />
          Home
        </Link>
        <div className="flex items-center gap-2">
          <Image
            src="/images/icon.png"
            alt=""
            width={24}
            height={24}
            className="size-6 rounded-md object-cover"
          />
          <span className="font-heading text-sm font-semibold text-[var(--tk-ink)]">
            Traksta
          </span>
        </div>
      </div>
    </header>
  );
}
