import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
});

const description =
  "The elite route-generation tool for runners and walkers that transforms any distance into a perfectly optimized, instantly navigable path.";

export const metadata: Metadata = {
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
    statusBarStyle: "black",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Traksta",
    url: "https://traksta.base44.app",
  };
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Traksta",
    url: "https://traksta.base44.app",
    logo: "/images/logo.png",
  };

  return (
    <html lang="en" className={`${inter.variable} ${plex.variable} h-full`}>
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
