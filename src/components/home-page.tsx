import { ArrowRight, Check, Watch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AppStoreButton } from "@/components/app-store-button";
import { PhoneFrame } from "@/components/phone-frame";
import { PreviewCarousel } from "@/components/preview-carousel";
import { SectionHeading, SectionLabel } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { icons, type IconName } from "@/components/icons";
import {
  features,
  heroStats,
  reasons,
  SHOP_URL,
  steps,
  useCases,
  watchStats,
} from "@/lib/content";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--tk-paper)]">
      <SiteHeader />
      <Hero />
      <HowItWorks />
      <FeaturesBento />
      <PreviewCarousel />
      <WhySection />
      <WatchSection />
      <FinalCta />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="tk-mesh tk-grain relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <div className="motion-safe:animate-fade-up inline-flex items-center gap-2 rounded-full border border-[var(--tk-border)] bg-white/80 px-4 py-1.5 text-xs font-medium text-[var(--tk-muted)] backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-[var(--tk-accent)]" />
            Available on iOS
          </div>
          <div className="motion-safe:animate-fade-up motion-safe:delay-100 space-y-5">
            <h1 className="font-heading text-[2.75rem] font-bold leading-[1.02] tracking-tight text-[var(--tk-ink)] sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              Your next route,
              <span className="block text-[var(--tk-accent)]">ready in seconds</span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-[var(--tk-muted)]">
              Traksta turns any distance into a loop on real streets and trails —
              no spreadsheets, no guesswork, just go.
            </p>
          </div>
          <div className="motion-safe:animate-fade-up motion-safe:delay-200 flex flex-wrap items-center gap-4">
            <AppStoreButton />
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--tk-ink)] transition-colors hover:text-[var(--tk-accent)]"
            >
              See how it works
              <ArrowRight size={16} />
            </Link>
          </div>
          <dl className="motion-safe:animate-fade-up motion-safe:delay-300 grid grid-cols-3 gap-4 border-t border-[var(--tk-border)] pt-8">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-xl font-bold text-[var(--tk-ink)] sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-[var(--tk-muted)] sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="motion-safe:animate-fade-up motion-safe:delay-200 relative flex justify-center lg:justify-end">
          <div className="absolute -right-8 top-1/4 hidden h-64 w-64 rounded-full bg-[var(--tk-accent-soft)] blur-3xl lg:block" />
          <PhoneFrame
            src="/images/preview-route.jpeg"
            alt="Traksta route map on iPhone"
            priority
            className="relative lg:translate-x-4"
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-y border-[var(--tk-border)] bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          title={
            <>
              <SectionLabel>How it works</SectionLabel>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[var(--tk-ink)] sm:text-4xl">
                Three taps to the pavement
              </h2>
            </>
          }
          subtitle="Open the app, pick your distance, and follow a route that already knows the way home."
          className="mb-16"
        />
        <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => {
            const Icon = icons[step.icon as IconName];
            return (
              <li
                key={step.num}
                className="tk-bento-card relative flex flex-col p-8"
              >
                <span className="font-mono text-xs font-medium text-[var(--tk-accent)]">
                  Step {index + 1}
                </span>
                <div className="mt-6 mb-5 flex size-12 items-center justify-center rounded-xl bg-[var(--tk-accent-soft)] text-[var(--tk-accent)]">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[var(--tk-ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--tk-muted)]">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function FeaturesBento() {
  return (
    <section id="features" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          title={
            <>
              <SectionLabel>Features</SectionLabel>
              <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[var(--tk-ink)] sm:text-4xl">
                Built for people who move
              </h2>
            </>
          }
          subtitle="Precision where it matters, simplicity everywhere else."
          className="mb-14"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 lg:gap-5">
          {features.map((feature, i) => {
            const Icon = icons[feature.icon as IconName];
            const wide = feature.span.includes("col-span-2");
            return (
              <article
                key={feature.title}
                className={`tk-bento-card flex flex-col p-7 lg:p-8 ${
                  wide ? "lg:col-span-4" : "lg:col-span-2"
                } ${i === 0 ? "lg:row-span-2 lg:justify-between" : ""}`}
              >
                <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-[var(--tk-accent-soft)] text-[var(--tk-accent)]">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--tk-ink)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--tk-muted)]">
                    {feature.description}
                  </p>
                </div>
                {i === 0 ? (
                  <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-xl bg-[var(--tk-paper-deep)] lg:block">
                    <Image
                      src="/images/preview-satellite.jpeg"
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="400px"
                    />
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="border-t border-[var(--tk-border)] bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>Why Traksta</SectionLabel>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-[var(--tk-ink)] sm:text-4xl">
              Stop guessing your route
            </h2>
            <ul className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <li key={reason.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--tk-accent-soft)] text-[var(--tk-accent)]">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-base text-[var(--tk-ink)]">{reason.text}</span>
                </li>
              ))}
            </ul>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--tk-accent)] hover:underline"
            >
              Shop Traksta apparel
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="relative flex justify-center">
            <Image
              src="/images/logo-pin.png"
              alt="Traksta mark"
              width={280}
              height={280}
              className="relative size-48 object-contain sm:size-64 lg:size-72"
            />
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading
            title={
              <h2 className="font-heading text-2xl font-bold text-[var(--tk-ink)] sm:text-3xl">
                Built for every move
              </h2>
            }
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => {
              const Icon = icons[item.icon as IconName];
              return (
                <article key={item.title} className="tk-bento-card p-6 text-center">
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-[var(--tk-paper-deep)] text-[var(--tk-accent)]">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading font-semibold text-[var(--tk-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--tk-muted)]">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WatchSection() {
  return (
    <section className="bg-[var(--tk-dark-band)] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
            <Watch size={14} />
            Apple Watch
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            On your wrist, on your terms
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            Generate and follow routes from watchOS — real-time tracking without
            reaching for your phone.
          </p>
        </div>
        <div className="relative mx-auto mt-14 max-w-3xl">
          <Image
            src="/images/watch-mockup.jpg"
            alt="Traksta on Apple Watch"
            width={1024}
            height={1024}
            className="w-full rounded-2xl border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.45)]"
          />
        </div>
        <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-4 text-center">
          {watchStats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-heading text-sm font-bold text-white sm:text-base">
                {stat.value}
              </dt>
              <dd className="mt-1 text-[11px] text-white/45 sm:text-xs">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden
      >
        <Image src="/images/splash.jpg" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-[var(--tk-paper)]/92" aria-hidden />
      <div className="relative z-10 mx-auto max-w-2xl px-5 text-center sm:px-6">
        <h2 className="font-heading text-4xl font-bold tracking-tight text-[var(--tk-ink)] sm:text-5xl">
          Your perfect route is one tap away
        </h2>
        <p className="mt-4 text-lg text-[var(--tk-muted)]">
          Join runners and walkers who let Traksta handle the map.
        </p>
        <div className="mt-10 flex justify-center">
          <AppStoreButton />
        </div>
      </div>
    </section>
  );
}
