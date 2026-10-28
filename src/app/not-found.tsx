"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();
  const missing = pathname.replace(/^\//, "") || "this page";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--tk-paper)] px-6">
      <p className="font-heading text-8xl font-bold text-[var(--tk-border)]">404</p>
      <h1 className="font-heading mt-4 text-2xl font-semibold text-[var(--tk-ink)]">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-center text-[var(--tk-muted)]">
        We couldn&apos;t find{" "}
        <span className="font-medium text-[var(--tk-ink)]">&quot;{missing}&quot;</span>
        . It may have moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-9 items-center justify-center gap-2 rounded-full bg-[var(--tk-ink)] px-6 text-sm font-medium text-white transition-colors hover:bg-[#1a2228]"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>
    </div>
  );
}
