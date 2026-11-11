import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";
import { navLinks } from "@/lib/nav";
import "./globals.css";

// Three families, five weights total: Inter 400/600/700, Plex Mono 500, Cormorant 500.
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap", variable: "--font-inter" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500"], display: "swap", variable: "--font-plex-mono" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500"], display: "swap", variable: "--font-cormorant" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zenith Capital | UC Berkeley's Student-Run Investment Fund",
    template: "%s | Zenith Capital at Berkeley",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: site.name, locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0A0E1A", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before paint, so scroll reveals never hide content for no-JS visitors. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Header links={navLinks} />
        <main id="main">{children}</main>
        <Footer links={navLinks} />
      </body>
    </html>
  );
}
