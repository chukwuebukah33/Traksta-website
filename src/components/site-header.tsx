"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, navLinks } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080E1A]/85 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/images/logo-pin.png"
              alt="Traksta icon"
              width={32}
              height={32}
              className="w-8 h-8 rounded-xl object-cover"
            />
            <span className="text-[var(--tk-white)] font-bold tracking-tight text-3xl">
              Traksta
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-[var(--tk-cyan)] transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-[var(--tk-cyan)] transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <div className="hidden md:block">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-[#080E1A] tk-gradient transition-all duration-300 hover:scale-105"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#080E1A]/40 animate-pulse" />
              Available on iOS
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden text-white/70 hover:bg-white/5 hover:text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-40 bg-[#080E1A]/96 backdrop-blur-2xl pt-20 px-8 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-white/80 hover:text-[var(--tk-cyan)] transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-white/80 hover:text-[var(--tk-cyan)] transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-semibold text-[#080E1A] tk-gradient transition-all duration-300 hover:scale-105"
            >
              Available on iOS
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
