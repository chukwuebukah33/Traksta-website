import type { Metadata } from "next";
import { FileText } from "lucide-react";
import Link from "next/link";
import { LegalHeader } from "@/components/legal-header";
import { SUPPORT_EMAIL, termsSections, termsUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of Service for Traksta, the route-generation app for running, walking, and cycling.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--tk-paper)]">
      <LegalHeader widthClass="max-w-4xl" />
      <main className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:py-20">
        <div className="mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--tk-border)] bg-white px-4 py-1.5 text-xs font-medium text-[var(--tk-muted)]">
            <FileText size={14} className="text-[var(--tk-accent)]" />
            Terms of service
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--tk-ink)] sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 font-mono text-xs text-[var(--tk-muted)]">
            Last updated: {termsUpdated}
          </p>
        </div>

        <div className="space-y-6">
          {termsSections.map((section, index) => (
            <article
              key={section.title}
              className="rounded-2xl border border-[var(--tk-border)] bg-white p-7"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs font-medium text-[var(--tk-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h2 className="font-heading text-base font-semibold text-[var(--tk-ink)]">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--tk-muted)]">
                    {section.text}
                  </p>
                  {"hasEmail" in section && section.hasEmail ? (
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="mt-4 inline-block text-sm font-medium text-[var(--tk-accent)] hover:underline"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-14 flex items-center justify-center gap-4 border-t border-[var(--tk-border)] pt-8 text-sm">
          <Link href="/" className="text-[var(--tk-accent)] hover:underline">
            ← Home
          </Link>
          <span className="text-[var(--tk-border)]">·</span>
          <Link href="/privacy" className="text-[var(--tk-accent)] hover:underline">
            Privacy policy →
          </Link>
        </footer>
      </main>
    </div>
  );
}
