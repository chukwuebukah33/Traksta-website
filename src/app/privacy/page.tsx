import type { Metadata } from "next";
import { Mail, Shield } from "lucide-react";
import Link from "next/link";
import { LegalHeader } from "@/components/legal-header";
import { icons, type IconName } from "@/components/icons";
import { privacySections, privacyUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Traksta is designed with your privacy in mind. We collect the minimum data necessary to deliver a great route-generation experience — nothing more.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--tk-paper)]">
      <LegalHeader widthClass="max-w-5xl" />
      <main className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
        <div className="mb-14 lg:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--tk-border)] bg-white px-4 py-1.5 text-xs font-medium text-[var(--tk-muted)]">
            <Shield size={14} className="text-[var(--tk-accent)]" />
            Privacy policy
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--tk-ink)] sm:text-5xl lg:text-6xl">
            Your privacy, our commitment
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--tk-muted)]">
            Traksta is designed with your privacy in mind. We collect the minimum
            data necessary to deliver a great route-generation experience — nothing
            more.
          </p>
          <p className="mt-6 font-mono text-xs text-[var(--tk-muted)]">
            Last updated: {privacyUpdated} · Effective immediately
          </p>
        </div>

        <nav
          className="mb-14 rounded-2xl border border-[var(--tk-border)] bg-white p-6"
          aria-label="Table of contents"
        >
          <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-widest text-[var(--tk-muted)]">
            Contents
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {privacySections.map((section) => {
              const Icon = icons[section.icon as IconName];
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex items-center gap-2 py-1 text-sm text-[var(--tk-muted)] transition-colors hover:text-[var(--tk-accent)]"
                  >
                    <Icon size={14} className="text-[var(--tk-accent)]" />
                    {section.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-10">
          {privacySections.map((section, index) => {
            const Icon = icons[section.icon as IconName];
            const email =
              "contactEmail" in section ? section.contactEmail : undefined;
            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-20 rounded-2xl border border-[var(--tk-border)] bg-white p-7 lg:p-9"
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--tk-accent-soft)] text-[var(--tk-accent)]">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-[var(--tk-muted)]">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(privacySections.length).padStart(2, "0")}
                    </p>
                    <h2 className="font-heading text-xl font-semibold text-[var(--tk-ink)] lg:text-2xl">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="space-y-6 border-l-2 border-[var(--tk-border)] pl-5">
                  {section.content.map((block) => (
                    <div key={block.subtitle}>
                      <h3 className="text-sm font-semibold text-[var(--tk-ink)]">
                        {block.subtitle}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--tk-muted)]">
                        {block.text}
                      </p>
                    </div>
                  ))}
                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--tk-ink)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a2228]"
                    >
                      <Mail size={15} />
                      {email}
                    </a>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>

        <footer className="mt-16 border-t border-[var(--tk-border)] pt-10 text-center">
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-[var(--tk-muted)]">
            This Privacy Policy may be updated periodically. Material changes will
            be communicated via an in-app notice.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm">
            <Link href="/" className="text-[var(--tk-accent)] hover:underline">
              ← Home
            </Link>
            <span className="text-[var(--tk-border)]">·</span>
            <Link href="/terms" className="text-[var(--tk-accent)] hover:underline">
              Terms of service →
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
