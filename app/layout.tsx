import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./mobile-optimizations.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lee Meadows | AI Trading Signals | Cryptocurrency Algorithmic Trading",
  description: "Join Lee Meadows' AI Trading Platform for automated cryptocurrency trading signals. Advanced machine learning algorithms with 99.6% accuracy. Minimum $300 USDT. SEC licensed and regulated.",
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
    title: "Lee Meadows",
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
        {children}
      </body>
    </html>
  );
}
