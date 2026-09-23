import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="relative bg-[#080E1A] border-t border-white/5">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(12,207,223,0.2),rgba(57,211,83,0.2),transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/icon.png"
                alt="Traksta"
                width={32}
                height={32}
                className="w-8 h-8 rounded-xl object-cover"
              />
              <span className="text-[var(--tk-white)] font-bold text-lg tracking-tight">
                Traksta
              </span>
            </div>
            <div className="tk-status-dot w-2 h-2 rounded-full" />
          </div>
          <nav className="flex flex-wrap items-center gap-6 lg:gap-8">
            {footerLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/30 hover:text-[var(--tk-cyan)] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/30 hover:text-[var(--tk-cyan)] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/15 font-mono">
            © {new Date().getFullYear()} Traksta. All rights reserved.
          </span>
          <span className="text-[10px] text-white/10 font-mono tracking-wider uppercase">
            Designed for Movement
          </span>
        </div>
      </div>
    </footer>
  );
}
