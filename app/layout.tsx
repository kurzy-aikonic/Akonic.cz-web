import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ClientOnlyWidgets } from "../components/ClientOnlyWidgets";

export const metadata: Metadata = {
  metadataBase: new URL("https://aikonic.cz"),
  title: "AIKONIC | AI Školení, Hackathony & Správa financí",
  description:
    "Zvyšte zisk firmy díky AI a automatizaci. Pořádáme intenzivní hackathony, školíme týmy a pomáháme s finančním řízením. Polička & Celá ČR.",
  keywords: [
    "AI školení",
    "Umělá inteligence",
    "Hackathon",
    "Správa financí",
    "Automatizace",
    "Radek Aigel",
  ],
  alternates: {
    canonical: "https://aikonic.cz",
  },
  openGraph: {
    title: "AIKONIC | AI Školení, Hackathony & Správa financí",
    description:
      "Zvyšte zisk firmy díky AI a automatizaci. Pořádáme intenzivní hackathony, školíme týmy a pomáháme s finančním řízením. Polička & Celá ČR.",
    url: "https://aikonic.cz",
    siteName: "AIKONIC",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIKONIC — AI Školení a Hackathony",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIKONIC | AI Školení, Hackathony & Správa financí",
    description:
      "Zvyšte zisk firmy díky AI a automatizaci. Pořádáme intenzivní hackathony, školíme týmy a pomáháme s finančním řízením.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={`${GeistSans.className} bg-background text-text antialiased overflow-x-hidden`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none">
          Přeskočit na obsah
        </a>
        <div className="min-h-screen pb-24 md:pb-0">
          {children}
        </div>
        <ClientOnlyWidgets />
      </body>
    </html>
  );
}
