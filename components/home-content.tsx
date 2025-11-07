"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp, Users, Star, Wallet, BarChart3, Globe, Lock } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function HeroSection() {
  const { t, language } = useTranslation();

  return (
    <section className="relative container mx-auto px-4 py-20 md:py-32 overflow-hidden">
      {/* Modern Space Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#0a0e27] to-blue-900/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-cyan-500/10" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[150px]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <Badge variant="secondary" className="mb-4 bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
          <Zap className="h-3 w-3 mr-1" />
          {t.hero.badge}
        </Badge>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
          {t.hero.title}
          <br />
          <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button size="lg" className="text-lg px-8 py-6 group bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">
            {t.hero.ctaPrimary}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10">
            {t.hero.ctaSecondary}
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-yellow-500" />
            <span className="whitespace-nowrap">{language === "vi" ? "Tối thiểu $300 USDT" : "Minimum $300 USDT"}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-yellow-500" />
            <span className="whitespace-nowrap">{language === "vi" ? "Tỷ lệ thắng 99.6%" : "99.6% Win Rate"}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-yellow-500" />
            <span className="whitespace-nowrap">{language === "vi" ? "Được Cấp Phép & Bảo Mật" : "Licensed & Secure"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NavigationLinks() {
  const { t } = useTranslation();

  return (
    <>
      <a href="#about" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors">{t.nav.about}</a>
      <a href="#calculator" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors">{t.nav.calculator}</a>
      <a href="#features" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors">{t.nav.features}</a>
      <a href="#plans" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors">{t.nav.plans}</a>
      <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors">{t.nav.contact}</a>
    </>
  );
}

export function NavigationButtons() {
  const { t } = useTranslation();

  return (
    <>
      <Button variant="ghost" size="sm" className="text-gray-300 hover:text-yellow-500">{t.nav.signIn}</Button>
      <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">{t.nav.getStarted}</Button>
    </>
  );
}

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">{t.about.badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-yellow-500">{t.about.mission.title}</CardTitle>
              <CardDescription className="text-gray-300 text-base">
                {t.about.mission.content}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <CardTitle className="text-yellow-500">{t.about.technology.title}</CardTitle>
              <CardDescription className="text-gray-300 text-base">
                {t.about.technology.content}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">{t.features.badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-yellow-500" />
              </div>
              <CardTitle className="text-white">{t.features.accuracy.title}</CardTitle>
              <CardDescription className="text-gray-300">
                {t.features.accuracy.description}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-yellow-500" />
              </div>
              <CardTitle className="text-white">{t.features.automated.title}</CardTitle>
              <CardDescription className="text-gray-300">
                {t.features.automated.description}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-yellow-500" />
              </div>
              <CardTitle className="text-white">{t.features.secure.title}</CardTitle>
              <CardDescription className="text-gray-300">
                {t.features.secure.description}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-yellow-500" />
              </div>
              <CardTitle className="text-white">{t.features.proven.title}</CardTitle>
              <CardDescription className="text-gray-300">
                {t.features.proven.description}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-yellow-500" />
              </div>
              <CardTitle className="text-white">{t.features.diversified.title}</CardTitle>
              <CardDescription className="text-gray-300">
                {t.features.diversified.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <Card className="border-2 border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] via-[#0a0e27] to-[#1a1f3a]">
          <CardHeader className="text-center space-y-6 py-12">
            <CardTitle className="text-3xl md:text-5xl font-bold text-white">
              {t.cta.title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-300">
              {t.cta.subtitle}
            </CardDescription>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">
                {t.cta.button}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10">
                {t.cta.buttonSecondary}
              </Button>
            </div>
            <div className="pt-6 space-y-2">
              <p className="text-gray-400 text-sm">{t.cta.email}</p>
              <p className="text-gray-400 text-sm">{t.cta.licensed}</p>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}

export function FooterContent() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-white font-bold">
            TP
          </div>
          <span className="text-lg font-bold text-white">TradePulse AI</span>
        </div>
        <p className="text-sm text-gray-400">
          {t.footer.description}
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-white">{t.footer.investment}</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#about" className="hover:text-yellow-500 transition-colors">{t.footer.aboutTrading}</a></li>
          <li><a href="#plans" className="hover:text-yellow-500 transition-colors">{t.footer.investmentPlans}</a></li>
          <li><a href="#calculator" className="hover:text-yellow-500 transition-colors">{t.footer.roiCalculator}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{t.footer.tradingSignals}</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-white">{t.footer.resources}</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{t.footer.faq}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{t.footer.howItWorks}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{t.footer.referralProgram}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{t.footer.contactSupport}</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-white">{t.footer.legal}</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="/terms" className="hover:text-yellow-500 transition-colors">{t.footer.terms}</a></li>
          <li><a href="/privacy" className="hover:text-yellow-500 transition-colors">{t.footer.privacy}</a></li>
          <li><a href="/disclaimer" className="hover:text-yellow-500 transition-colors">{t.footer.disclaimer}</a></li>
          <li><a href="/disclaimer#risk-warning" className="hover:text-yellow-500 transition-colors">{t.footer.riskDisclosure}</a></li>
        </ul>
      </div>
    </>
  );
}

export function FooterCopyright() {
  const { t } = useTranslation();

  return (
    <div className="border-t border-yellow-500/20 pt-8 text-center text-sm text-gray-400">
      <p>&copy; 2025 {t.footer.copyright}</p>
      <p className="mt-2 text-xs">{t.footer.tagline}</p>
    </div>
  );
}
