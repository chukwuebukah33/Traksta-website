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
    <div className="min-h-screen bg-[#080E1A]">
      <div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(57,211,83,0.04)" }}
      />
      <LegalHeader widthClass="max-w-4xl" />
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <FileText size={12} className="text-[#39D353]" />
            <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
              Terms of Service
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-white/40 text-sm font-mono">
            Last updated: {termsUpdated}
          </p>
        </div>

        <div className="space-y-8">
          {termsSections.map((section, index) => (
            <article
              key={section.title}
              className="rounded-2xl p-7 border border-white/5"
              style={{ background: "rgba(13,31,60,0.35)" }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="text-[10px] font-mono font-bold mt-1 px-2 py-0.5 rounded flex-shrink-0"
                  style={{
                    color: "#0CCFDF",
                    background: "rgba(12,207,223,0.08)",
                    border: "1px solid rgba(12,207,223,0.15)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h2 className="text-base font-bold text-white mb-3">
                    {section.title}
                  </h2>
                  <p className="text-sm text-white/45 leading-[1.8]">
                    {section.text}
                  </p>
                  {"hasEmail" in section && section.hasEmail ? (
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="inline-flex items-center gap-2 mt-4 text-sm font-medium transition-colors duration-300 text-[#0CCFDF]"
                    >
                      {SUPPORT_EMAIL} →
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="text-sm text-white/30 hover:text-[#0CCFDF] transition-colors"
          >
            ← Return Home
          </Link>
          <span className="text-white/10">·</span>
          <Link
            href="/privacy"
            className="text-sm text-white/30 hover:text-[#39D353] transition-colors"
          >
            Privacy Policy →
          </Link>
        </div>
      </main>
    </div>
  );
}
