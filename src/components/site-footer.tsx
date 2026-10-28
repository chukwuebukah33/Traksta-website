import Image from "next/image";
import Link from "next/link";
import { AppStoreButton } from "@/components/app-store-button";
import { footerLinks, SUPPORT_EMAIL } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--tk-border)] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/icon.png"
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-lg object-cover"
              />
              <span className="font-heading text-lg font-bold text-[var(--tk-ink)]">
                Traksta
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--tk-muted)]">
              Smart routes for every run, walk, and ride — generated in seconds
              from where you stand.
            </p>
            <AppStoreButton variant="secondary" className="!py-2.5" />
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--tk-muted)] transition-colors hover:text-[var(--tk-ink)]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[var(--tk-muted)] transition-colors hover:text-[var(--tk-ink)]"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--tk-border)] pt-8 text-xs text-[var(--tk-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Traksta. All rights reserved.</span>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="transition-colors hover:text-[var(--tk-accent)]"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
