import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-jb",
});

const description =
  "The elite route-generation tool for runners and walkers that transforms any distance into a perfectly optimized, instantly navigable path.";

const siteUrl = "https://traksta.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Traksta",
    template: "%s | Traksta",
  },
  description,
  applicationName: "Traksta",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Traksta",
    description,
    siteName: "Traksta",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/icon.png",
        width: 652,
        height: 658,
        alt: "Traksta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Traksta",
    description,
    images: ["/images/icon.png"],
  },
  appleWebApp: {
    capable: true,
    title: "Traksta",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Traksta",
    url: siteUrl,
  };
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Traksta",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
