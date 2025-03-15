import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const myFont = localFont({ src: "./font.otf" });

const poppins = Poppins({
  style: "normal",
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Base URL for absolute URLs
const baseUrl = process.env.NEXT_PUBLIC_URL || "https://hackfarm.it";

export const metadata: Metadata = {
  title: "Hackfarm | Associazione per la Cultura e l'Innovazione Digitale",
  description:
    "Hack Farm E.T.S. è un'associazione senza scopo di lucro che opera con passione per promuovere la cultura e le attività culturali come strumenti di aggregazione e inclusione sociale. Organizziamo eventi, laboratori e competizioni per giovani nel campo dell'informatica e della tecnologia.",

  // Add canonical URL
  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    title: "Hackfarm | Associazione per la Cultura e l'Innovazione Digitale",
    description:
      "Hack Farm E.T.S. è un'associazione senza scopo di lucro che opera con passione per promuovere la cultura e le attività culturali come strumenti di aggregazione e inclusione sociale",
    url: baseUrl,
    siteName: "Hackfarm",
    images: [
      {
        url: `${baseUrl}/logo-stella.png`,
        width: 1200,
        height: 630,
        alt: "Hackfarm - Logo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hackfarm | Associazione per la Cultura e l'Innovazione Digitale",
    description:
      "Hack Farm E.T.S. è un'associazione senza scopo di lucro che opera con passione per promuovere la cultura e le attività culturali come strumenti di aggregazione e inclusione sociale",
    creator: "@rasmic",
    images: [`${baseUrl}/logo-stella.png`],
  },

  keywords: [
    "Hackfarm",
    "istruzione",
    "informatica",
    "programmazione",
    "formazione",
    "associazione",
    "cultura",
    "tecnologia",
    "creatività",
    "competizioni",
    "eventi",
    "laboratori",
    "giovani",
    "inclusione sociale",
    "PhaserJs",
    "Scratch",
    "Hackathon",
    "Game Jam",
    "sviluppo software",
    "team building",
    "innovazione",
    "educazione digitale",
    "IIS margherita hack",
    "hack",
    "scuola baronissi",
    "phaser baronissi",
    "Phaser jam",
    "phaser game",
    "hackfarm phaser",
    "hackfarm baronissi",
    "associazione informatica",
  ],

  // Add robots settings
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Add verification for search consoles if you have them
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },

  // Add authors and other metadata
  authors: [
    {
      name: "Gerardo Nastri",
      url: baseUrl,
    },
  ],
  creator: "Gerardo Nastri",
  publisher: "Gerardo NAstri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for the organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hackfarm",
    alternateName: "Hack Farm E.T.S.",
    url: baseUrl,
    logo: `${baseUrl}/logo-stella.png`,
    description:
      "Associazione senza scopo di lucro che opera con passione per promuovere la cultura e le attività culturali come strumenti di aggregazione e inclusione sociale.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Baronissi",
      addressRegion: "SA",
      addressCountry: "IT",
    },
    // Add social media profiles if available
    sameAs: [
      // "https://www.facebook.com/hackfarm",
      // "https://www.instagram.com/hackfarm",
      // "https://twitter.com/rasmic",
    ],
  };

  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Canonical URL */}
        <link rel="canonical" href={baseUrl} />
      </head>
      <body
        className={`${myFont.className} ${poppins.variable} font-poppins antialiased`}
      >
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
