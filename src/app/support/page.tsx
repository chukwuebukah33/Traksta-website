import type { Metadata } from "next";
import { LifeBuoy, Mail } from "lucide-react";
import Link from "next/link";
import { AppStoreButton } from "@/components/app-store-button";
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
    <div className="min-h-screen bg-[var(--tk-paper)]">
      <SiteHeader />
      <section className="border-b border-[var(--tk-border)] bg-white pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--tk-border)] bg-[var(--tk-paper)] px-4 py-1.5 text-xs font-medium text-[var(--tk-muted)]">
            <LifeBuoy size={14} className="text-[var(--tk-accent)]" />
            Support
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--tk-ink)] sm:text-5xl">
            How can we help?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--tk-muted)]">
            Quick answers below, or email us — we typically reply within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-4xl gap-4 px-5 sm:grid-cols-3 sm:px-6">
          {supportChannels.map((channel) => {
            const Icon = icons[channel.icon as IconName];
            const card = (
              <div className="tk-bento-card h-full p-6">
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[var(--tk-accent-soft)] text-[var(--tk-accent)]">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h2 className="font-heading font-semibold text-[var(--tk-ink)]">
                  {channel.title}
                </h2>
                <p className="mt-1 text-sm text-[var(--tk-muted)]">{channel.value}</p>
              </div>
            );
            if (!channel.href) {
              return <div key={channel.title}>{card}</div>;
            }
            if ("external" in channel && channel.external) {
              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block motion-safe:transition-transform motion-safe:hover:scale-[1.01]"
                >
                  {card}
                </a>
              );
            }
            if (channel.href.startsWith("/")) {
              return (
                <Link
                  key={channel.title}
                  href={channel.href}
                  className="block motion-safe:transition-transform motion-safe:hover:scale-[1.01]"
                >
                  {card}
                </Link>
              );
            }
            return (
              <a
                key={channel.title}
                href={channel.href}
                className="block motion-safe:transition-transform motion-safe:hover:scale-[1.01]"
              >
                {card}
              </a>
            );
          })}
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <h2 className="font-heading mb-8 text-center text-2xl font-bold text-[var(--tk-ink)] sm:text-3xl">
            Frequently asked questions
          </h2>
          <Accordion className="space-y-3">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`item-${index}`}
                className="rounded-xl border border-[var(--tk-border)] bg-white px-5"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-[var(--tk-ink)] hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-[var(--tk-muted)]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-lg px-5 text-center sm:px-6">
          <div className="rounded-2xl border border-[var(--tk-border)] bg-white p-8 lg:p-10">
            <h2 className="font-heading text-xl font-bold text-[var(--tk-ink)]">
              Still need a hand?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--tk-muted)]">
              We read every message and will work through it with you.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--tk-ink)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a2228]"
              >
                <Mail size={16} />
                Email support
              </a>
              <AppStoreButton variant="secondary" className="!py-2.5" />
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
