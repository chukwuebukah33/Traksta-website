"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-7xl font-light text-slate-300">Error</h1>
          <div className="h-0.5 w-16 bg-slate-200 mx-auto" />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-medium text-slate-800">
            Something went wrong
          </h2>
          <p className="text-slate-600 leading-relaxed">
            This page could not be loaded. Try again, or return home.
          </p>
        </div>
        <div className="pt-6 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            className="h-auto px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-700"
            onClick={() => reset()}
          >
            Try again
          </Button>
          <Button
            variant="outline"
            className="h-auto px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-700"
            onClick={() => router.push("/")}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
