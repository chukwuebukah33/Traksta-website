import type { Metadata } from "next";
import { LifeBuoy, Mail } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { icons, type IconName } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SUPPORT_EMAIL, faqs, supportChannels } from "@/lib/content";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Find quick answers about Traksta, or reach the team at hello@traksta.app.",
};

export default function SupportPage() {
  return (
    <div className="bg-abyss min-h-screen">
      <SiteHeader />
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[var(--tk-dark)] overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--tk-cyan)]/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--tk-green)]/8 blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <LifeBuoy size={12} className="text-[var(--tk-cyan)]" />
            <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
              Support
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--tk-white)] mb-5 leading-[1.05]">
            How can we <span className="tk-gradient-text tk-text-glow">help?</span>
          </h1>
          <p className="text-lg text-white/45 max-w-xl mx-auto font-light leading-relaxed">
            Find quick answers below, or reach out and our team will get back to
            you as soon as possible.
          </p>
        </div>
      </section>

      <section className="relative py-12 bg-[var(--tk-dark)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {supportChannels.map((channel) => {
              const Icon = icons[channel.icon as IconName];
              const card = (
                <div
                  className="rounded-2xl p-6 border transition-all duration-500 h-full"
                  style={{
                    background: `linear-gradient(135deg, ${channel.accent}06, rgba(13,31,60,0.4))`,
                    borderColor: `${channel.accent}15`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${channel.accent}10`,
                      border: `1px solid ${channel.accent}20`,
                    }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      style={{ color: channel.accent, opacity: 0.7 }}
                    />
                  </div>
                  <h2 className="text-base font-bold text-[var(--tk-white)] mb-1">
                    {channel.title}
                  </h2>
                  <p className="text-sm text-white/40">{channel.value}</p>
                </div>
              );
              if (!channel.href) {
                return <div key={channel.title}>{card}</div>;
              }
              if (channel.href.startsWith("/")) {
                return (
                  <Link
                    key={channel.title}
                    href={channel.href}
                    className="block transition-all duration-500 hover:scale-[1.02]"
                  >
                    {card}
                  </Link>
                );
              }
              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  className="block transition-all duration-500 hover:scale-[1.02]"
                >
                  {card}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 bg-[var(--tk-dark)] overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[var(--tk-cyan)]/60 tracking-[0.3em] uppercase block mb-4">
              {"// FAQ"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--tk-white)]">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion className="space-y-3">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`item-${index}`}
                className="rounded-2xl px-6 border border-white/[0.06] bg-[rgba(13,31,60,0.4)]"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-[var(--tk-white)] hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-white/45 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative py-16 bg-[var(--tk-dark)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div
            className="rounded-2xl p-8 lg:p-10 border"
            style={{
              background:
                "linear-gradient(135deg, rgba(12,207,223,0.06) 0%, rgba(13,31,60,0.4) 100%)",
              borderColor: "rgba(12,207,223,0.15)",
            }}
          >
            <h2 className="text-2xl font-black text-[var(--tk-white)] mb-3">
              Still need a hand?
            </h2>
            <p className="text-white/45 max-w-md mx-auto mb-6 leading-relaxed">
              We read every message. Drop us a line and we&apos;ll sort it out
              together.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-[#080E1A] tk-gradient tk-glow transition-all duration-500 hover:scale-105 hover:tk-glow-strong active:scale-95"
            >
              <Mail size={18} />
              Email Support
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
