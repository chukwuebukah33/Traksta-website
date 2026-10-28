"use client";

import { ArrowLeft, RotateCcw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--tk-paper)] px-6">
      <h1 className="font-heading text-2xl font-semibold text-[var(--tk-ink)]">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-center text-[var(--tk-muted)]">
        This page couldn&apos;t load. Try again, or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button
          variant="outline"
          className="rounded-full border-[var(--tk-border)]"
          onClick={() => reset()}
        >
          <RotateCcw size={16} />
          Try again
        </Button>
        <Link
          href="/"
          className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-[var(--tk-ink)] px-4 text-sm font-medium text-white transition-colors hover:bg-[#1a2228]"
        >
          <ArrowLeft size={16} />
          Home
        </Link>
      </div>
    </div>
  );
}
