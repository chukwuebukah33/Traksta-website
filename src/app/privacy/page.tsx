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
    <div className="min-h-screen bg-[#080E1A]">
      <div
        className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(12,207,223,0.04)" }}
      />
      <div
        className="fixed bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(57,211,83,0.04)" }}
      />
      <LegalHeader widthClass="max-w-5xl" />
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <Shield size={12} className="text-[#0CCFDF]" />
            <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
              Privacy Policy
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Your Privacy,
            <br />
            <span className="tk-gradient-text">Our Commitment</span>
          </h1>
          <p className="text-lg text-white/45 max-w-2xl leading-relaxed">
            Traksta is designed with your privacy in mind. We collect the
            minimum data necessary to deliver a great route-generation
            experience — nothing more.
          </p>
          <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/5">
            <span className="text-xs font-mono text-white/25">
              Last updated: {privacyUpdated}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <span className="text-xs font-mono text-white/25">
              Effective immediately
            </span>
          </div>
        </div>

        <div
          className="rounded-2xl p-6 mb-16 border border-white/5"
          style={{ background: "rgba(13,31,60,0.5)" }}
        >
          <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">
            Contents
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
            {privacySections.map((section) => {
              const Icon = icons[section.icon as IconName];
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-[#0CCFDF] transition-colors duration-200 py-1"
                >
                  <Icon
                    size={13}
                    style={{ color: section.color, opacity: 0.7 }}
                  />
                  {section.title}
                </a>
              );
            })}
          </div>
        </div>

        <div className="space-y-14">
          {privacySections.map((section, index) => {
            const Icon = icons[section.icon as IconName];
            const email =
              "contactEmail" in section ? section.contactEmail : undefined;
            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-20 rounded-2xl p-8 lg:p-10 border border-white/5"
                style={{ background: "rgba(13,31,60,0.35)" }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${section.color}12`,
                      border: `1px solid ${section.color}25`,
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      style={{ color: section.color }}
                    />
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-mono tracking-widest uppercase block mb-0.5"
                      style={{ color: `${section.color}60` }}
                    >
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(privacySections.length).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl lg:text-2xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="space-y-6">
                  {section.content.map((block) => (
                    <div
                      key={block.subtitle}
                      className="border-l-2 pl-5"
                      style={{ borderColor: `${section.color}25` }}
                    >
                      <h3 className="text-sm font-semibold text-white/80 mb-2">
                        {block.subtitle}
                      </h3>
                      <p className="text-sm text-white/45 leading-[1.75]">
                        {block.text}
                      </p>
                    </div>
                  ))}
                  {email ? (
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold text-[#080E1A] transition-all duration-300 hover:scale-105"
                        style={{
                          background:
                            "linear-gradient(135deg, #0CCFDF, #39D353)",
                        }}
                      >
                        <Mail size={15} />
                        {email}
                      </a>
                    </div>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-center">
          <p className="text-sm text-white/25 leading-relaxed max-w-lg mx-auto">
            This Privacy Policy may be updated periodically. Material changes
            will be communicated via an in-app notice. Continued use of Traksta
            after updates constitutes acceptance of the revised policy.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href="/"
              className="text-sm text-white/30 hover:text-[#0CCFDF] transition-colors"
            >
              ← Return Home
            </Link>
            <span className="text-white/10">·</span>
            <Link
              href="/terms"
              className="text-sm text-white/30 hover:text-[#39D353] transition-colors"
            >
              Terms of Service →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
