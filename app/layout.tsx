import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { CookieConsent } from "../components/CookieConsent";

export const metadata: Metadata = {
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
  openGraph: {
    title: "AIKONIC | AI Školení, Hackathony & Správa financí",
    description:
      "Zvyšte zisk firmy díky AI a automatizaci. Pořádáme intenzivní hackathony, školíme týmy a pomáháme s finančním řízením. Polička & Celá ČR.",
    url: "https://aikonic.cz",
    siteName: "AIKONIC",
    locale: "cs_CZ",
    type: "website",
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
      <body className={`${GeistSans.className} bg-background text-text antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
