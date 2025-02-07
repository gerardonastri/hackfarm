import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
const myFont = localFont({ src: "./font.otf" });

import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  style: "normal",
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hackfarm",
  description:
    "Hack Farm E.T.S. è un'associazione senza scopo di lucro che opera con passione per promuovere la cultura e le attività culturali come strumenti di aggregazione e inclusione sociale",
  openGraph: {
    description:
      "Hack Farm E.T.S. è un'associazione senza scopo di lucro che opera con passione per promuovere la cultura e le attività culturali come strumenti di aggregazione e inclusione sociale",
    images: ["/logo-stella.png"],
    url: "hackfarm.it",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackfarm",
    description:
      "Hack Farm E.T.S. è un'associazione senza scopo di lucro che opera con passione per promuovere la cultura e le attività culturali come strumenti di aggregazione e inclusione sociale",
    siteId: "",
    creator: "@rasmic",
    creatorId: "",
    images: ["/logo-stella.png"],
  },
  keywords:[
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
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} ${poppins.variable} font-poppins  antialiased`}
      >
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
