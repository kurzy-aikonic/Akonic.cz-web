import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ClientOnlyWidgets } from "../components/ClientOnlyWidgets";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AIKONIC",
  legalName: "Aikonic training s.r.o.",
  identifier: "24472590",
  url: "https://aikonic.cz",
  logo: "https://aikonic.cz/logo.png",
  description: "AI školení, hackathony a automatizace pro firmy. Polička & celá ČR.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+420-723-061-013",
    contactType: "customer service",
    email: "kurzy@aikonic.cz",
    availableLanguage: "Czech",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Heydukova 115",
    addressLocality: "Polička",
    postalCode: "572 01",
    addressCountry: "CZ",
  },
  sameAs: [
    "https://www.linkedin.com/company/108064244/",
    "https://www.facebook.com/profile.php?id=61581039984128",
    "https://www.instagram.com/aikonic_training/",
  ],
  memberOf: {
    "@type": "Organization",
    name: "Kroužek umělé inteligence",
    url: "https://krouzekumeleinteligence.cz",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aikonic.cz"),
  title: "Firemní AI školení a hackathony | AIKONIC",
  description:
    "Firemní AI školení na míru — od workshopu po hackathon. Audit, automatizace, dotace Jsem v kurzu. Stovky proškolených hodin po celé ČR.",
  keywords: [
    "firemní AI školení",
    "AI kurzy pro firmy",
    "AI vzdělávání zaměstnanců",
    "AI hackathon",
    "Umělá inteligence",
    "Automatizace",
  ],
  alternates: {
    canonical: "https://aikonic.cz",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Firemní AI školení a hackathony | AIKONIC",
    description:
      "Firemní AI školení na míru — od workshopu po hackathon. Audit, automatizace, dotace Jsem v kurzu. Stovky proškolených hodin po celé ČR.",
    url: "https://aikonic.cz",
    siteName: "AIKONIC",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firemní AI školení a hackathony | AIKONIC",
    description:
      "Firemní AI školení na míru — od workshopu po hackathon. Audit, automatizace, dotace Jsem v kurzu.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // Nezakazujeme zoom pro přístupnost — maximum-scale: 5 umožňuje zoom
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFBFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${GeistSans.className} bg-background text-text antialiased overflow-x-hidden`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none">
          Přeskočit na obsah
        </a>
        <div className="min-h-screen">
          {children}
        </div>
        <ClientOnlyWidgets />
      </body>
    </html>
  );
}
