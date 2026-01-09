"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Award,
  Globe,
  Play,
  Clock
} from "lucide-react";
import { CryptoTicker } from "@/components/crypto-ticker";
import { AnimatedCounter } from "@/components/animated-counter";
import { BackToTop } from "@/components/back-to-top";
import { RiskWarning } from "@/components/risk-warning";
import { CookieConsent } from "@/components/cookie-consent";
import { AgeVerification } from "@/components/age-verification";
import { RiskDisclaimerModal } from "@/components/risk-disclaimer-modal";
import { BookingSection, InlineBookingCTA } from "@/components/booking-section";
import { PainPointsSection, SolutionSection } from "@/components/pain-points-section";
import { UrgencySection, FloatingCTA } from "@/components/urgency-section";
import { FunnelHowItWorks } from "@/components/funnel-how-it-works";
import { FunnelSocialProof } from "@/components/funnel-social-proof";
import { FunnelFAQ } from "@/components/funnel-faq";

export default function Home() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] relative">
      {/* Compliance Modals */}
      <AgeVerification />
      <RiskDisclaimerModal />
      <BackToTop />
      <CookieConsent />
      <FloatingCTA />

      {/* ========== SIMPLIFIED NAVIGATION ========== */}
      <nav className="border-b border-white/10 bg-[#0a0e27]/95 backdrop-blur sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              TP
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">TradePulse AI</span>
              <span className="text-xs text-yellow-500/80">AI-Powered Trading</span>
            </div>
          </div>
          <Button
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold"
          >
            Book Free Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* ========== SECTION 1: HERO (HOOK) ========== */}
      <section className="relative container mx-auto px-4 py-16 md:py-24 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* Attention-grabbing badge */}
          <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20 animate-pulse">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            AI Trading Signals Live Now
          </Badge>

          {/* Hook headline - addresses desire and curiosity */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Discover How Everyday People Are
            <span className="block bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
              Earning $500+ Daily
            </span>
            <span className="block text-2xl md:text-3xl font-normal text-gray-400 mt-3">
              With AI That Trades Crypto For Them
            </span>
          </h1>

          {/* Subheadline - addresses objections */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            No experience needed. No staring at charts. Just 10 minutes a day following AI-generated signals with a <span className="text-yellow-500 font-semibold">99.6% accuracy rate</span>.
          </p>

          {/* Primary CTA */}
          <div className="pt-4">
            <InlineBookingCTA />
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-yellow-500/70" />
              <span>SEC Regulated</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-yellow-500/70" />
              <span>10,000+ Traders</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-yellow-500/70" />
              <span>30+ Countries</span>
            </div>
          </div>

          {/* Video placeholder / Social proof teaser */}
          <div className="mt-8 mx-auto max-w-2xl">
            <div
              onClick={scrollToBooking}
              className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-yellow-500/5 to-transparent cursor-pointer group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                  <Play className="h-8 w-8 text-yellow-500 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-white font-medium">See How Our AI Generated $47,000 Last Month</p>
                <p className="text-gray-500 text-sm">Watch the 2-minute demo →</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CRYPTO TICKER (Social Proof) ========== */}
      <CryptoTicker />

      {/* ========== SECTION 2: STATS BAR ========== */}
      <section className="border-y border-white/5 bg-[#0d1229]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <AnimatedCounter end={10847} suffix="+" />
              </div>
              <div className="text-sm text-gray-500">Active Traders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">
                <AnimatedCounter end={99.6} decimals={1} suffix="%" />
              </div>
              <div className="text-sm text-gray-500">Signal Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                $<AnimatedCounter end={47} suffix="M+" />
              </div>
              <div className="text-sm text-gray-500">Profits Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-sm text-gray-500">AI Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: PAIN POINTS (Problem Agitation) ========== */}
      <PainPointsSection />

      {/* ========== SECTION 4: SOLUTION (Bridge) ========== */}
      <SolutionSection />

      {/* ========== SECTION 5: HOW IT WORKS ========== */}
      <FunnelHowItWorks />

      {/* ========== SECTION 6: SOCIAL PROOF ========== */}
      <FunnelSocialProof />

      {/* ========== SECTION 7: URGENCY ========== */}
      <UrgencySection />

      {/* ========== SECTION 8: FAQ (Objection Handling) ========== */}
      <FunnelFAQ />

      {/* ========== SECTION 9: BOOKING (Main Conversion) ========== */}
      <section id="booking" className="py-16 md:py-24 bg-gradient-to-b from-[#0d1229] to-[#0a0e27]">
        <div className="container mx-auto px-4">
          <BookingSection />
        </div>
      </section>

      {/* ========== RISK WARNING ========== */}
      <RiskWarning />

      {/* ========== MINIMAL FOOTER ========== */}
      <footer className="border-t border-white/5 bg-[#080b1a]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-white font-bold text-sm">
                TP
              </div>
              <span className="text-gray-500 text-sm">TradePulse AI</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="/terms" className="hover:text-gray-400 transition-colors">Terms</a>
              <a href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</a>
              <a href="/disclaimer" className="hover:text-gray-400 transition-colors">Disclaimer</a>
            </div>

            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} TradePulse AI. All rights reserved.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-gray-700 max-w-3xl mx-auto">
              Investment involves risk. Past performance does not guarantee future results.
              Trading cryptocurrencies carries a high level of risk and may not be suitable for all investors.
              Only invest what you can afford to lose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
