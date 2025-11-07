"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp, Users, Star, Wallet, BarChart3, Globe, Lock } from "lucide-react";
import { CryptoTicker } from "@/components/crypto-ticker";
import { FAQSection } from "@/components/faq-section";
import { TrustBadges } from "@/components/trust-badges";
import { AnimatedCounter } from "@/components/animated-counter";
import { HowItWorks } from "@/components/how-it-works";
import { BackToTop } from "@/components/back-to-top";
import { VisualShowcase } from "@/components/visual-showcase";
import { RiskWarning } from "@/components/risk-warning";
import { CookieConsent } from "@/components/cookie-consent";
import { CertificatesGallery } from "@/components/certificates-gallery";
import { InvestmentCalculator } from "@/components/investment-calculator";
import { MobileNav } from "@/components/mobile-nav";
import { AgeVerification } from "@/components/age-verification";
import { RiskDisclaimerModal } from "@/components/risk-disclaimer-modal";
import { AnimatedBackground } from "@/components/animated-background";
import { TeamSection } from "@/components/team-section";
import { TradingSystemDetails } from "@/components/trading-system-details";
import { ComparisonTable } from "@/components/comparison-table";
import { AnimatedStats } from "@/components/animated-stats";
import { LiveDashboard } from "@/components/live-dashboard";
import { ProfitTimeline } from "@/components/profit-timeline";
import { KnowledgeHub } from "@/components/knowledge-hub";
import { LanguageToggle } from "@/components/language-toggle";
import {
  HeroSection,
  NavigationLinks,
  NavigationButtons,
  AboutSection,
  FeaturesSection,
  CTASection,
  FooterContent,
  FooterCopyright
} from "@/components/home-content";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Compliance Modals */}
      <AgeVerification />
      <RiskDisclaimerModal />

      <BackToTop />
      <CookieConsent />
      <MobileNav />
      {/* Navigation */}
      <nav className="border-b border-primary/20 bg-[#0a0e27]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a0e27]/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              TP
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">TradePulse AI</span>
              <span className="text-xs text-yellow-500">AI-Powered Trading Intelligence</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <NavigationLinks />
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <NavigationButtons />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Crypto Ticker */}
      <CryptoTicker />

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-2 border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-yellow-500">
                  <AnimatedCounter end={1000000} suffix="+" />
                </CardTitle>
                <CardDescription className="text-base text-gray-300">{t.stats.peopleHelped}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-yellow-500">
                  <AnimatedCounter end={99.6} decimals={1} suffix="%" />
                </CardTitle>
                <CardDescription className="text-base text-gray-300">{t.stats.tradingWinRate}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-yellow-500">
                  <AnimatedCounter end={30} suffix="+" />
                </CardTitle>
                <CardDescription className="text-base text-gray-300">{t.stats.countryLicenses}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-yellow-500">24/7</CardTitle>
                <CardDescription className="text-base text-gray-300">{t.stats.tradingSignals}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Certificates Gallery */}
      <CertificatesGallery />

      {/* Investment Calculator */}
      <div id="calculator">
        <InvestmentCalculator />
      </div>

      {/* How It Works */}
      <HowItWorks />

      {/* Team Section */}
      <TeamSection />

      {/* Trading System Details */}
      <TradingSystemDetails />

      {/* Animated Stats Section */}
      <AnimatedStats />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Live Dashboard */}
      <LiveDashboard />

      {/* Profit Timeline Visualizer */}
      <ProfitTimeline />

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Investment Plans Section */}
      <section id="plans" className="container mx-auto px-4 py-20 bg-[#0a0e27]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">{t.investmentPlans.badge}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {t.investmentPlans.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.investmentPlans.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative border-yellow-500/30 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{t.investmentPlans.stage} 1</CardTitle>
                <CardDescription className="text-gray-300">{t.investmentPlans.accountBalance} 1%</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-yellow-500">$500</span>
                  <span className="text-gray-300"> USDT</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-sm text-gray-400">{t.investmentPlans.monthlyProfit}</div>
                  <div className="text-2xl font-bold text-yellow-500">$3.25</div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">{t.investmentPlans.startStage} 1</Button>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">{t.investmentPlans.benefits.stage1.profit}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">{t.investmentPlans.benefits.stage1.signals}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-yellow-500 border-2 shadow-lg shadow-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="px-4 py-1 bg-gradient-to-r from-yellow-500 to-amber-600">{t.investmentPlans.mostPopular}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-white">{t.investmentPlans.stage} 3</CardTitle>
                <CardDescription className="text-gray-300">{t.investmentPlans.accountBalance} 9%</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-yellow-500">$1,000</span>
                  <span className="text-gray-300"> USDT</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-sm text-gray-400">{t.investmentPlans.monthlyProfit}</div>
                  <div className="text-2xl font-bold text-yellow-500">$29.25</div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">{t.investmentPlans.startStage} 3</Button>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">{t.investmentPlans.benefits.stage3.profit}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">{t.investmentPlans.benefits.stage3.strategies}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">{t.investmentPlans.benefits.stage3.bonus}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-yellow-500/30 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{t.investmentPlans.stage} 5</CardTitle>
                <CardDescription className="text-gray-300">{t.investmentPlans.accountBalance} - {t.investmentPlans.allIn}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-yellow-500">$5,000</span>
                  <span className="text-gray-300"> USDT</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-sm text-gray-400">{t.investmentPlans.monthlyProfit}</div>
                  <div className="text-2xl font-bold text-yellow-500">$195</div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">{t.investmentPlans.startStage} 5</Button>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">{t.investmentPlans.benefits.stage5.returns}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">{t.investmentPlans.benefits.stage5.potential}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">{t.investmentPlans.benefits.stage5.vip}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">{t.investmentPlans.benefits.stage5.manager}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm max-w-3xl mx-auto">
              {t.investmentPlans.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">{t.referral.badge}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {t.referral.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.referral.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{t.referral.bonusesTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/10">
                    <span className="text-gray-300">$300 {t.referral.deposit}</span>
                    <div className="text-right">
                      <div className="text-yellow-500 font-bold">$15 {t.referral.referrer} + $15 {t.referral.newUser}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/10">
                    <span className="text-gray-300">$500 {t.referral.deposit}</span>
                    <div className="text-right">
                      <div className="text-yellow-500 font-bold">$25 {t.referral.referrer} + $25 {t.referral.newUser}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/10">
                    <span className="text-gray-300">$1000 {t.referral.deposit}</span>
                    <div className="text-right">
                      <div className="text-yellow-500 font-bold">$100 {t.referral.referrer} + $50 {t.referral.newUser}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/10">
                    <span className="text-gray-300">$3000 {t.referral.deposit}</span>
                    <div className="text-right">
                      <div className="text-yellow-500 font-bold">$300 {t.referral.referrer} + $150 {t.referral.newUser}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/10">
                    <span className="text-gray-300">$5000 {t.referral.deposit}</span>
                    <div className="text-right">
                      <div className="text-yellow-500 font-bold">$500 {t.referral.referrer} + $250 {t.referral.newUser}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{t.referral.signalsTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      {t.referral.benefits.earn10Percent}
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      {t.referral.benefits.bonus5Percent}
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      {t.referral.benefits.extraSignals}
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      {t.referral.benefits.teamAgent}
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      {t.referral.benefits.staticSignals}
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">{t.testimonials.badge}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.people.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic text-gray-300">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Visual Showcase */}
      <VisualShowcase />

      {/* Knowledge Hub */}
      <KnowledgeHub />

      {/* CTA Section */}
      <CTASection />

      {/* Risk Warning */}
      <RiskWarning />

      {/* Footer */}
      <footer className="border-t border-yellow-500/20 bg-[#0a0e27]/80">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <FooterContent />
          </div>

          <FooterCopyright />
        </div>
      </footer>
    </div>
  );
}
