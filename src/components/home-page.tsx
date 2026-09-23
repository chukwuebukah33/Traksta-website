import { Check, Watch } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { PreviewCarousel } from "@/components/preview-carousel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { icons, type IconName } from "@/components/icons";
import {
  APP_STORE_URL,
  features,
  heroStats,
  reasons,
  steps,
  useCases,
  watchStats,
} from "@/lib/content";

function IosLink({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export function HomePage() {
  return (
    <div className="bg-abyss min-h-screen">
      <SiteHeader />
      <Hero />
      <HowItWorks />
      <Features />
      <PreviewCarousel />
      <WhyTraksta />
      <WatchSection />
      <GetStarted />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--tk-dark)]">
      <div className="absolute inset-0">
        <Image
          src="/images/splash.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080E1A]/50 via-[#080E1A]/30 to-[#080E1A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080E1A]/80 via-transparent to-[#080E1A]/60" />
      </div>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--tk-cyan)]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--tk-green)]/8 blur-[120px] pointer-events-none" />
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,500 C300,380 500,620 700,450 C900,280 1100,560 1300,400 C1380,340 1440,420 1440,420"
          fill="none"
          stroke="url(#heroGrad)"
          strokeWidth="1.5"
          strokeOpacity="0.2"
          pathLength={1}
          className="tk-route-line"
        />
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0CCFDF" />
            <stop offset="60%" stopColor="#39D353" />
            <stop offset="100%" stopColor="#AAFF00" />
          </linearGradient>
        </defs>
      </svg>
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #0CCFDF 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col gap-8">
            <div className="tk-rise">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--tk-cyan)] animate-pulse" />
                <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
                  Available on iOS
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95] text-[var(--tk-white)]">
                Generate the{" "}
                <span className="tk-gradient-text tk-text-glow">
                  Perfect Route
                </span>{" "}
                for Any Distance
              </h1>
            </div>
            <p className="tk-rise tk-rise-delay-1 text-lg sm:text-xl text-white/50 max-w-lg leading-relaxed font-light">
              Traksta creates smart running, walking, and cycling routes based
              on your selected distance — instantly.
            </p>
            <div className="tk-rise tk-rise-delay-2">
              <IosLink className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-[#080E1A] tk-gradient tk-glow transition-all duration-300 hover:scale-105 hover:tk-glow-strong">
                <span className="w-2 h-2 rounded-full bg-[#080E1A]/40 animate-pulse" />
                Available on iOS
              </IosLink>
            </div>
            <div className="tk-rise tk-rise-delay-3 flex gap-8 mt-2">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-lg font-mono font-bold tk-gradient-text">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/30 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div
                className="absolute inset-0 blur-[80px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(12,207,223,0.15) 0%, rgba(57,211,83,0.1) 50%, transparent 70%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080E1A] to-transparent pointer-events-none" />
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 lg:py-36 bg-[var(--tk-dark)] overflow-hidden scroll-mt-16"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,207,223,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(12,207,223,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-[var(--tk-cyan)]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-mono text-[var(--tk-cyan)]/60 tracking-[0.3em] uppercase block mb-4">
            {"// Process"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--tk-white)]">
            How It Works
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          <div
            className="hidden md:block absolute top-[60px] left-[16.67%] right-[16.67%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(12,207,223,0.25), rgba(57,211,83,0.25), transparent)",
            }}
          />
          {steps.map((step) => {
            const Icon = icons[step.icon as IconName];
            return (
              <div
                key={step.num}
                className="tk-step relative group flex flex-col items-center text-center"
                style={{ ["--accent" as string]: step.color }}
              >
                <div className="relative mb-8">
                  <div
                    className="tk-step-icon w-[120px] h-[120px] rounded-2xl flex items-center justify-center transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}10 0%, ${step.color}05 100%)`,
                      border: `1px solid ${step.color}20`,
                    }}
                  >
                    <Icon
                      size={36}
                      strokeWidth={1.5}
                      style={{ color: step.color, opacity: 0.75 }}
                    />
                  </div>
                  <span
                    className="absolute -top-3 -right-3 text-xs font-mono font-bold px-2.5 py-1 rounded-full border"
                    style={{
                      color: step.color,
                      borderColor: `${step.color}30`,
                      background: "var(--tk-dark)",
                    }}
                  >
                    {step.num}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/20 tracking-wider mb-3">
                  {step.ref}
                </span>
                <h3 className="text-xl font-bold text-[var(--tk-white)] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section
      id="features"
      className="relative py-28 lg:py-36 bg-[var(--tk-dark)] overflow-hidden scroll-mt-16"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(12,207,223,0.2),transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-mono text-[var(--tk-cyan)]/60 tracking-[0.3em] uppercase block mb-4">
            {"// Capabilities"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--tk-white)]">
            Core Features
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-5">
          {features.map((feature) => {
            const Icon = icons[feature.icon as IconName];
            return (
              <article
                key={feature.ref}
                className={`tk-accent-card group relative rounded-2xl p-7 lg:p-8 overflow-hidden border transition-all duration-500 ${feature.span}`}
                style={{
                  ["--accent" as string]: feature.accent,
                  background: `linear-gradient(135deg, ${feature.accent}05 0%, rgba(13,31,60,0.4) 100%)`,
                  borderColor: `${feature.accent}15`,
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${feature.accent}10`,
                      border: `1px solid ${feature.accent}20`,
                    }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      style={{ color: feature.accent, opacity: 0.7 }}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-white/15 tracking-wider">
                    {feature.ref}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--tk-white)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyTraksta() {
  return (
    <section
      id="why-traksta"
      className="relative py-28 lg:py-36 bg-[var(--tk-dark)] overflow-hidden scroll-mt-16"
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(57,211,83,0.04)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(12,207,223,0.04)" }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
          <div>
            <span className="text-xs font-mono text-[var(--tk-cyan)]/60 tracking-[0.3em] uppercase block mb-4">
              {"// Why"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--tk-white)] mb-8 leading-[1.1]">
              Stop Guessing
              <br />
              <span className="tk-gradient-text tk-text-glow">Your Route</span>
            </h2>
            <div className="flex flex-col gap-4">
              {reasons.map((reason) => (
                <div key={reason.text} className="flex items-center gap-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${reason.color}12`,
                      border: `1px solid ${reason.color}30`,
                    }}
                  >
                    <Check size={14} style={{ color: reason.color }} />
                  </div>
                  <span className="text-base text-white/60 font-medium">
                    {reason.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 blur-[60px] rounded-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(12,207,223,0.08) 0%, rgba(57,211,83,0.06) 50%, transparent 70%)",
              }}
            />
            <Image
              src="/images/logo-pin.png"
              alt="Traksta logo pin mark"
              width={288}
              height={288}
              className="relative w-56 h-56 lg:w-72 lg:h-72 object-contain"
              style={{
                filter:
                  "drop-shadow(0 0 40px rgba(12,207,223,0.25)) drop-shadow(0 0 80px rgba(57,211,83,0.12))",
              }}
            />
          </div>
        </div>

        <div className="text-center mb-14">
          <span className="text-xs font-mono text-[var(--tk-cyan)]/60 tracking-[0.3em] uppercase block mb-4">
            {"// Use Cases"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--tk-white)]">
            Built for Every Move
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((item) => {
            const Icon = icons[item.icon as IconName];
            return (
              <article
                key={item.title}
                className="tk-accent-card rounded-2xl p-6 text-center border transition-all duration-500"
                style={{
                  ["--accent" as string]: item.color,
                  background: `linear-gradient(135deg, ${item.color}06, rgba(13,31,60,0.4))`,
                  borderColor: `${item.color}15`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: `${item.color}10`,
                    border: `1px solid ${item.color}20`,
                  }}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    style={{ color: item.color }}
                  />
                </div>
                <h3 className="text-base font-bold text-[var(--tk-white)] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-white/35 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WatchSection() {
  return (
    <section className="relative py-28 lg:py-36 bg-[var(--tk-dark)] overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(12,207,223,0.2),transparent)",
        }}
      />
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(12,207,223,0.04)" }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <Watch size={12} className="text-[#0CCFDF]" />
            <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
              Apple Watch Compatible
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--tk-white)] mb-4">
            On Your Wrist,{" "}
            <span className="tk-gradient-text tk-text-glow">On Your Terms</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto font-light">
            Generate and follow routes directly from your Apple Watch — no phone
            required. Full watchOS support with real-time tracking.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute inset-0 blur-[80px] rounded-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(12,207,223,0.08) 0%, rgba(57,211,83,0.05) 50%, transparent 70%)",
            }}
          />
          <Image
            src="/images/watch-mockup.jpg"
            alt="Traksta on Apple Watch — showing route generation, live tracking, and completion screens"
            width={1024}
            height={1024}
            className="relative w-full h-auto rounded-2xl border border-white/5"
            style={{ filter: "drop-shadow(0 0 60px rgba(12,207,223,0.12))" }}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-12">
          {watchStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-sm font-bold font-mono tk-gradient-text">
                {stat.value}
              </span>
              <span className="text-[10px] text-white/30 block mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/splash.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#080E1A]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080E1A] via-[#080E1A]/40 to-[#080E1A]/60" />
      </div>
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="w-[700px] h-[400px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(12,207,223,0.12) 0%, rgba(57,211,83,0.08) 50%, transparent 70%)",
          }}
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs font-mono text-[var(--tk-cyan)]/60 tracking-[0.3em] uppercase block mb-6">
          {"// Get Started"}
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[var(--tk-white)] mb-6 leading-[0.95]">
          Start Your Perfect
          <br />
          <span className="tk-gradient-text tk-text-glow">Route Today</span>
        </h2>
        <p className="text-lg text-white/40 max-w-lg mx-auto mb-10 font-light">
          Join thousands of runners, walkers, and cyclists who never guess their
          route again. Coming soon to iOS.
        </p>
        <IosLink className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-bold text-[#080E1A] tk-gradient tk-glow transition-all duration-300 hover:scale-105 hover:tk-glow-strong">
          <span className="w-2.5 h-2.5 rounded-full bg-[#080E1A]/40 animate-pulse" />
          Available on iOS
        </IosLink>
      </div>
    </section>
  );
}
