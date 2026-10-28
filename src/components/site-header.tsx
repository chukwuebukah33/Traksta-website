"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AppStoreButton } from "@/components/app-store-button";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-b border-[var(--tk-border)] bg-[var(--tk-paper)]/90 shadow-[0_1px_0_rgba(15,20,25,0.04)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logo-pin.png"
              alt=""
              width={36}
              height={36}
              className="size-9 rounded-xl object-cover"
            />
            <span className="font-heading text-xl font-bold tracking-tight text-[var(--tk-ink)]">
              Traksta
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {navLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[var(--tk-muted)] transition-colors hover:text-[var(--tk-ink)]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[var(--tk-muted)] transition-colors hover:text-[var(--tk-ink)]"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden md:block">
            <AppStoreButton className="!py-2.5 !px-5 text-xs" />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-[var(--tk-ink)] md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-[var(--tk-paper)] pt-20 px-6 md:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {navLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="font-heading text-2xl font-semibold text-[var(--tk-ink)]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-2xl font-semibold text-[var(--tk-ink)]"
                >
                  {link.label}
                </Link>
              ),
            )}
            <AppStoreButton className="mt-4 w-full justify-center" />
          </nav>
        </div>
      ) : null}
    </>
  );
}
