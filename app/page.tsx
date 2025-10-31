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
import Image from "next/image";

export default function Home() {
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
              LM
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">Lee Meadows</span>
              <span className="text-xs text-yellow-500">AI Trading Signals</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors">About</a>
            <a href="#calculator" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors">Calculator</a>
            <a href="#features" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors">Features</a>
            <a href="#plans" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors">Plans</a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors">Contact</a>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-yellow-500">Sign In</Button>
            <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 md:py-32 overflow-hidden">
        {/* Modern Space Gradient Background - No Images */}
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
            Advanced AI Trading Signal System
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Transform Your Wealth Through
            <br />
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Cryptocurrency Trading
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join Lee Meadows, a proven 7-figure entrepreneur, and discover the AI trading strategy that
            works while you live your life. Just minutes a day to follow signals and watch your wealth grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="lg" className="text-lg px-8 py-6 group bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">
              Start Investing Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10">
              View Investment Plans
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-yellow-500" />
              <span className="whitespace-nowrap">Minimum $300 USDT</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-yellow-500" />
              <span className="whitespace-nowrap">99.6% Win Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-yellow-500" />
              <span className="whitespace-nowrap">SEC Licensed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Ticker */}
      <CryptoTicker />

      {/* Risk Warning */}
      <RiskWarning />

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-2 border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-yellow-500">
                  <AnimatedCounter end={1000000} suffix="+" />
                </CardTitle>
                <CardDescription className="text-base text-gray-300">People Helped</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-yellow-500">
                  <AnimatedCounter end={99.6} decimals={1} suffix="%" />
                </CardTitle>
                <CardDescription className="text-base text-gray-300">Trading Win Rate</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-yellow-500">
                  <AnimatedCounter end={30} suffix="+" />
                </CardTitle>
                <CardDescription className="text-base text-gray-300">Country Licenses</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-yellow-500">24/7</CardTitle>
                <CardDescription className="text-base text-gray-300">Trading Signals</CardDescription>
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

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">About</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Lee Meadows AI Trading Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced algorithmic trading signals operating in 40+ countries with 10,000+ active traders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-yellow-500">Our Mission</CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  Lee Meadows' AI Trading Platform delivers cutting-edge algorithmic trading signals to traders worldwide.
                  Using advanced machine learning and real-time data analysis, our proprietary AI system achieves 99.6%
                  accuracy in signal predictions. We empower individuals to profit from cryptocurrency markets through
                  automated trading signals and sophisticated predictive analytics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-yellow-500">AI-Powered Technology</CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  Lee Meadows partners with industry-leading AI algorithm developers to deliver cutting-edge trading
                  signals. The technology operates on SEC-licensed exchanges with full regulatory compliance across
                  major markets including US, Australia, Singapore, and Dubai. Advanced machine learning processes
                  millions of data points per second to identify profitable opportunities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Five Major Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Why Choose Lee Meadows AI Trading Signals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle className="text-white">Long-term Stable Income</CardTitle>
                <CardDescription className="text-gray-300">
                  AI trading data combined with signal win rate calculation as high as 99.6% or above.
                  Professional technical department ensures consistent returns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle className="text-white">Legal & Compliant</CardTitle>
                <CardDescription className="text-gray-300">
                  Operates on SEC-licensed exchanges with full regulatory compliance across 30+ countries
                  including US, Australia (ASIC), Singapore (MAS), Dubai (DFSA), and Bahamas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle className="text-white">Secure Trading Environment</CardTitle>
                <CardDescription className="text-gray-300">
                  Advanced encryption and secure API integration with licensed exchanges to ensure
                  safety of all member funds and trading activities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle className="text-white">Proven Track Record</CardTitle>
                <CardDescription className="text-gray-300">
                  Lee Meadows' AI trading strategy has consistently delivered results, with a proven
                  99.6% signal accuracy rate and $100M+ in daily trading volume.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle className="text-white">Diversified Income</CardTitle>
                <CardDescription className="text-gray-300">
                  Multiple profit streams including signal trading, team bonuses, and transaction
                  volume rewards for additional income opportunities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle className="text-white">Low Entry Barrier</CardTitle>
                <CardDescription className="text-gray-300">
                  Minimum investment of just $300 USDT with flexible withdrawal options.
                  Simple smartphone operation without affecting work and life.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Plans Section */}
      <section id="plans" className="container mx-auto px-4 py-20 bg-[#0a0e27]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">Investment Plans</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Wealth Management Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Five-stage wealth planning for maximum returns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative border-yellow-500/30 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Stage 1</CardTitle>
                <CardDescription className="text-gray-300">Account Balance 1%</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-yellow-500">$500</span>
                  <span className="text-gray-300"> USDT</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-sm text-gray-400">Monthly Profit</div>
                  <div className="text-2xl font-bold text-yellow-500">$3.25</div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">Start Stage 1</Button>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">8 USDT profit in total</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">Daily trading signals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-yellow-500 border-2 shadow-lg shadow-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="px-4 py-1 bg-gradient-to-r from-yellow-500 to-amber-600">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-white">Stage 3</CardTitle>
                <CardDescription className="text-gray-300">Account Balance 9%</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-yellow-500">$1,000</span>
                  <span className="text-gray-300"> USDT</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-sm text-gray-400">Monthly Profit</div>
                  <div className="text-2xl font-bold text-yellow-500">$29.25</div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">Start Stage 3</Button>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">72 USDT profit in total</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">Advanced trading strategies</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">Team bonus eligible</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-yellow-500/30 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Stage 5</CardTitle>
                <CardDescription className="text-gray-300">Account Balance - All In</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-yellow-500">$5,000</span>
                  <span className="text-gray-300"> USDT</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-sm text-gray-400">Monthly Profit</div>
                  <div className="text-2xl font-bold text-yellow-500">$195</div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">Start Stage 5</Button>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">Maximum returns - All in</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">1950 USDT total profit potential</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">VIP signals & support</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">Manager bonus eligibility</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm max-w-3xl mx-auto">
              Monthly fund return rate is at least 60%, forming a zero-cost, zero-risk investment environment.
              You can double your principal within 40 days.
            </p>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">Rewards</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Referral Rewards Program
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Earn additional income by sharing the project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Referral Bonuses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/10">
                    <span className="text-gray-300">$300 deposit</span>
                    <div className="text-right">
                      <div className="text-yellow-500 font-bold">$15 referrer + $15 new user</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/10">
                    <span className="text-gray-300">$500 deposit</span>
                    <div className="text-right">
                      <div className="text-yellow-500 font-bold">$25 referrer + $25 new user</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/10">
                    <span className="text-gray-300">$1000 deposit</span>
                    <div className="text-right">
                      <div className="text-yellow-500 font-bold">$100 referrer + $50 new user</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/10">
                    <span className="text-gray-300">$3000 deposit</span>
                    <div className="text-right">
                      <div className="text-yellow-500 font-bold">$300 referrer + $150 new user</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-500/10">
                    <span className="text-gray-300">$5000 deposit</span>
                    <div className="text-right">
                      <div className="text-yellow-500 font-bold">$500 referrer + $250 new user</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Dynamic Trading Signals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      Referrers earn 10% of new user's deposit as reward
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      New users receive 5% bonus on first deposit
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      Additional 6 dynamic trading signals for referrals over $500
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      After 5 successful referrals: promoted to Team Agent with permanent benefits
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm">
                      Receive 3 static trading signals every day
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
            <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">Success Stories</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Trusted by Investors Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join over 1 million people who have transformed their financial future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "David Zhang",
                role: "Early Investor, Singapore",
                content: "Started with $1000 USDT and within 3 months, I've seen consistent returns. The AI trading signals are incredibly accurate. Best investment decision I've made.",
                rating: 5
              },
              {
                name: "Maria Santos",
                role: "Team Agent, Philippines",
                content: "The referral program changed my life. I built a team of 20 members and now earn passive income from both trading and team bonuses. Highly recommended!",
                rating: 5
              },
              {
                name: "James Wilson",
                role: "Professional Trader, USA",
                content: "As someone with trading experience, I'm impressed by Lee Meadows' AI system accuracy. The signals are incredibly precise and the automated trading makes it effortless.",
                rating: 5
              }
            ].map((testimonial) => (
              <Card key={testimonial.name} className="hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
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

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] via-[#0a0e27] to-[#1a1f3a]">
            <CardHeader className="text-center space-y-6 py-12">
              <CardTitle className="text-3xl md:text-5xl font-bold text-white">
                Ready to Start Your Investment Journey?
              </CardTitle>
              <CardDescription className="text-lg text-gray-300">
                Join Lee Meadows' AI Trading Platform today and start receiving automated trading signals. Minimum investment $300 USDT.
              </CardDescription>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700">
                  Contact Lee Meadows
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10">
                  View Complete Guide
                </Button>
              </div>
              <div className="pt-6 space-y-2">
                <p className="text-gray-400 text-sm">Email: contact@leemeadowstrading.com</p>
                <p className="text-gray-400 text-sm">Licensed & Regulated by SEC, ASIC, MAS, DFSA</p>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-500/20 bg-[#0a0e27]/80">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-white font-bold">
                  LM
                </div>
                <span className="text-lg font-bold text-white">Lee Meadows</span>
              </div>
              <p className="text-sm text-gray-400">
                AI Trading Signal Platform. Helping individuals achieve financial freedom through advanced algorithmic trading and automated signals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Investment</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-yellow-500 transition-colors">About AI Trading</a></li>
                <li><a href="#plans" className="hover:text-yellow-500 transition-colors">Investment Plans</a></li>
                <li><a href="#calculator" className="hover:text-yellow-500 transition-colors">ROI Calculator</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Trading Signals</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Referral Program</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Contact Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/terms" className="hover:text-yellow-500 transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
                <li><a href="/disclaimer" className="hover:text-yellow-500 transition-colors">Disclaimer</a></li>
                <li><a href="/disclaimer#risk-warning" className="hover:text-yellow-500 transition-colors">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-yellow-500/20 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Lee Meadows - AI Trading Signal Platform. All rights reserved.</p>
            <p className="mt-2 text-xs">Advanced Algorithmic Trading | Licensed by SEC, ASIC, MAS, DFSA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
