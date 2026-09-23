import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function LegalHeader({ widthClass }: { widthClass: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 backdrop-blur-xl bg-[#080E1A]/85">
      <div
        className={`${widthClass} mx-auto px-6 h-14 flex items-center justify-between`}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-[#0CCFDF] transition-colors duration-300"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <div className="flex items-center gap-2">
          <Image
            src="/images/icon.png"
            alt="Traksta"
            width={24}
            height={24}
            className="w-6 h-6 rounded-lg object-cover"
          />
          <span className="text-sm font-semibold text-white/70">Traksta</span>
        </div>
      </div>
    </header>
  );
}
