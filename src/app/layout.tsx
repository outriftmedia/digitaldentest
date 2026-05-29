import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NewsletterPopup } from "@/components/site/NewsletterPopup";
import { CookieConsent } from "@/components/site/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Digital Den — Innovation. Inspiration. Investment.",
  description: "The gateway for Eastern European startups to global markets.",
  openGraph: {
    title: "Digital Den — Innovation. Inspiration. Investment.",
    description: "The gateway for Eastern European startups to global markets.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Den — Innovation. Inspiration. Investment.",
    description: "The gateway for Eastern European startups to global markets.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <NewsletterPopup />
        <CookieConsent />
      </body>
    </html>
  );
}
