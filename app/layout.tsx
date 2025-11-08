import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./mobile-optimizations.css";
import { LanguageProvider } from "@/contexts/language-context";
import { HtmlLangWrapper } from "@/components/html-lang-wrapper";
import { DynamicMetadata } from "@/components/dynamic-metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TradePulse AI | AI Trading Signals | Cryptocurrency Algorithmic Trading",
  description: "Join TradePulse AI for automated cryptocurrency trading signals. Advanced machine learning algorithms with 99.6% accuracy. Minimum $300 USDT. SEC licensed and regulated.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },
  themeColor: "#eab308",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "TradePulse AI",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <HtmlLangWrapper />
          <DynamicMetadata />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
