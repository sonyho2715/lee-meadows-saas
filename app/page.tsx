"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Shield,
  Award,
  Globe,
  Play,
  CheckCircle2,
  TrendingUp,
  Clock,
  Zap,
  BarChart3,
  Users,
  Lock,
  Star
} from "lucide-react";
import { CryptoTicker } from "@/components/crypto-ticker";
import { AnimatedCounter } from "@/components/animated-counter";
import { BackToTop } from "@/components/back-to-top";
import { RiskWarning } from "@/components/risk-warning";
import { CookieConsent } from "@/components/cookie-consent";
import { AgeVerification } from "@/components/age-verification";
import { RiskDisclaimerModal } from "@/components/risk-disclaimer-modal";
import { BookingSection } from "@/components/booking-section";
import { FunnelFAQ } from "@/components/funnel-faq";

export default function Home() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] relative">
      {/* Compliance Modals */}
      <AgeVerification />
      <RiskDisclaimerModal />
      <BackToTop />
      <CookieConsent />

      {/* ========== NAVIGATION ========== */}
      <nav className="border-b border-white/5 bg-[#0a0e1a]/95 backdrop-blur sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
              TP
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">TradePulse AI</span>
              <span className="text-xs text-blue-400/80">Intelligent Trading</span>
            </div>
          </div>
          <Button
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/20"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="relative container mx-auto px-4 py-20 md:py-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Trust badge */}
          <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5">
            <Shield className="h-3.5 w-3.5 mr-2" />
            SEC Regulated • 10,000+ Active Traders
          </Badge>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            AI-Powered Trading
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
              That Works While You Sleep
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join thousands of investors using our AI system to generate consistent returns.
            No experience needed. Just <span className="text-blue-400 font-medium">10 minutes a day</span>.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="text-base px-8 py-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold shadow-xl shadow-blue-500/25 group"
            >
              Start Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <span className="text-sm text-gray-500 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              30-min call • 100% free
            </span>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-blue-400" />
              </div>
              <span>99.6% Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Lock className="h-4 w-4 text-blue-400" />
              </div>
              <span>$30M Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Globe className="h-4 w-4 text-blue-400" />
              </div>
              <span>30+ Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CRYPTO TICKER ========== */}
      <CryptoTicker />

      {/* ========== STATS BAR ========== */}
      <section className="border-y border-white/5 bg-[#0c1020]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <AnimatedCounter end={10847} suffix="+" />
              </div>
              <div className="text-sm text-gray-500">Active Traders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">
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
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">24/7</div>
              <div className="text-sm text-gray-500">AI Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRANSFORMATION SECTION (Before/After) ========== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Smarter Way to Trade
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Stop guessing. Let AI do the heavy lifting while you focus on what matters.
              </p>
            </div>

            {/* Before/After comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/5">
                <div className="text-red-400/80 text-sm font-medium mb-4 uppercase tracking-wide">Without AI Trading</div>
                <ul className="space-y-4">
                  {[
                    "Hours spent analyzing charts",
                    "Emotional decisions losing money",
                    "Missing opportunities while working",
                    "Complex strategies to learn",
                    "Stress and uncertainty"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="h-5 w-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
                <div className="text-blue-400 text-sm font-medium mb-4 uppercase tracking-wide">With TradePulse AI</div>
                <ul className="space-y-4">
                  {[
                    "AI analyzes millions of data points",
                    "Emotion-free, data-driven signals",
                    "Trade from anywhere in 10 min/day",
                    "Simple signals anyone can follow",
                    "Confidence backed by 99.6% accuracy"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-3 w-3 text-blue-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-20 md:py-28 bg-[#0c1020]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Started in 3 Simple Steps
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                From consultation to profits in less than a week
              </p>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: Users,
                  title: "Book Your Free Call",
                  desc: "30-minute strategy session with our trading experts. No commitment required."
                },
                {
                  step: "02",
                  icon: BarChart3,
                  title: "Get Your Custom Plan",
                  desc: "We create a personalized strategy based on your goals and investment capacity."
                },
                {
                  step: "03",
                  icon: Zap,
                  title: "Start Receiving Signals",
                  desc: "Follow our AI signals daily and watch your portfolio grow consistently."
                }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl font-bold text-blue-500/20">{item.step}</span>
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                  {/* Connector */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SOCIAL PROOF ========== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Investors Worldwide
              </h2>
              <p className="text-gray-400">Real results from real traders</p>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Michael T.",
                  location: "California, USA",
                  content: "The strategy call opened my eyes. Started with $500, now seeing consistent daily returns. The AI signals are incredibly accurate.",
                  result: "+$2,340 first month"
                },
                {
                  name: "Sarah K.",
                  location: "Sydney, Australia",
                  content: "Finally, a system that doesn't require me to stare at charts. I check signals during lunch and after work. Life-changing.",
                  result: "3x investment in 90 days"
                },
                {
                  name: "David L.",
                  location: "Singapore",
                  content: "The free consultation was eye-opening. They showed me exactly how the AI works with real data. Signed up immediately.",
                  result: "Full-time trader in 8 months"
                }
              ].map((testimonial, i) => (
                <Card key={i} className="border-white/5 bg-white/[0.02]">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-blue-400 text-blue-400" />
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm mb-4 italic">"{testimonial.content}"</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium mb-4">
                      {testimonial.result}
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        <span className="text-blue-400 font-medium">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-white text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/5">
              <span className="text-sm text-gray-600">Regulated by:</span>
              {["SEC", "ASIC", "MAS", "DFSA"].map((reg) => (
                <span key={reg} className="px-4 py-2 rounded-lg bg-white/[0.02] text-gray-500 text-sm border border-white/5">
                  {reg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <FunnelFAQ />

      {/* ========== BOOKING SECTION ========== */}
      <section id="booking" className="py-20 md:py-28 bg-gradient-to-b from-[#0c1020] to-[#0a0e1a]">
        <div className="container mx-auto px-4">
          <BookingSection />
        </div>
      </section>

      {/* ========== RISK WARNING ========== */}
      <RiskWarning />

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-white/5 bg-[#080b14]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
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
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
