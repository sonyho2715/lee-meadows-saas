"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  TrendingUp,
  Clock,
  Zap,
  BarChart3,
  Users,
  Lock,
  Star,
  AlertTriangle,
  Target,
  Brain,
  DollarSign,
  Calendar,
  Phone,
  XCircle,
  TrendingDown,
  Sparkles,
  Play
} from "lucide-react";
import { CryptoTicker } from "@/components/crypto-ticker";
import { AnimatedCounter } from "@/components/animated-counter";
import { BackToTop } from "@/components/back-to-top";
import { RiskWarning } from "@/components/risk-warning";
import { CookieConsent } from "@/components/cookie-consent";
import { BookingSection } from "@/components/booking-section";
import { FunnelFAQ } from "@/components/funnel-faq";

export default function Home() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] relative">
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

      {/* ========== HERO SECTION - PATTERN INTERRUPT ========== */}
      <section className="relative container mx-auto px-4 py-16 md:py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Urgency badge */}
          <Badge variant="secondary" className="bg-red-500/10 text-red-400 border-red-500/20 px-4 py-1.5 animate-pulse">
            <AlertTriangle className="h-3.5 w-3.5 mr-2" />
            WARNING: Only 7 Strategy Call Spots Left This Week
          </Badge>

          {/* Pattern interrupt headline */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Exposed: How Everyday People Are Making
            <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
              $247 to $1,200+ Per Day
            </span>
            <span className="block text-3xl md:text-4xl mt-4 text-gray-300">
              With An AI That Trades <span className="underline decoration-blue-400 decoration-4">While They Sleep</span>
            </span>
          </h1>

          {/* Subheadline with specifics */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            In the next <span className="text-white font-semibold">3 minutes</span>, you'll discover the exact AI trading system that's helped <span className="text-blue-400 font-semibold">10,847 people</span> quit stressful jobs, fire toxic bosses, and build <span className="text-white font-semibold">life-changing wealth</span>...
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ...even if you've <span className="italic">never</span> traded before, have no time, and are starting with as little as $300.
          </p>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-y border-white/10">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border-2 border-[#0a0e1a] flex items-center justify-center text-xs text-blue-300 font-medium">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-gray-400"><span className="text-white font-semibold">2,847</span> people booked this week</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span><span className="text-white font-semibold">4.9/5</span> from 3,200+ reviews</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="text-lg px-10 py-7 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold shadow-xl shadow-blue-500/30 group animate-pulse hover:animate-none"
            >
              YES! I Want My Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              100% Free • No Credit Card • 30-Minute Private Consultation
            </p>
          </div>
        </div>
      </section>

      {/* ========== CRYPTO TICKER ========== */}
      <CryptoTicker />

      {/* ========== CREDIBILITY BAR ========== */}
      <section className="border-y border-white/5 bg-[#0c1020]">
        <div className="container mx-auto px-4 py-10">
          <p className="text-center text-sm text-gray-500 mb-6">AS FEATURED IN</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            {["Forbes", "Bloomberg", "Reuters", "CNBC", "Yahoo Finance"].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-bold text-gray-600">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== THE PROBLEM SECTION ========== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section header - empathy */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Let Me Guess... You're <span className="text-red-400">Tired</span> Of...
              </h2>
            </div>

            {/* Pain points - make it hurt */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: Clock,
                  title: "Trading Your Time For Money",
                  desc: "Working 40, 50, 60+ hours a week just to make someone ELSE rich. Missing your kids' games, family dinners, and life itself."
                },
                {
                  icon: TrendingDown,
                  title: "Watching Opportunities Pass You By",
                  desc: "Hearing about Bitcoin, Ethereum, and crypto millionaires... but feeling like the \"boat has sailed\" and you missed your chance."
                },
                {
                  icon: XCircle,
                  title: "Failed Trading Attempts",
                  desc: "Maybe you tried trading before. Lost money. Felt stupid. Told yourself \"this isn't for people like me.\" Sound familiar?"
                },
                {
                  icon: DollarSign,
                  title: "Living Paycheck to Paycheck",
                  desc: "One emergency away from disaster. No real savings. No passive income. Just the same exhausting cycle, month after month."
                }
              ].map((pain, i) => (
                <div key={i} className="p-6 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-500/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <pain.icon className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{pain.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{pain.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Agitation */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/5">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                Here's the <span className="text-white font-semibold">brutal truth</span>:
              </p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                The financial system is <span className="text-red-400 font-semibold">rigged against you</span>. Wall Street insiders use sophisticated AI and algorithms to extract money from everyday investors. They have teams of quants, PhDs, and millions in technology...
              </p>
              <p className="text-2xl md:text-3xl font-bold text-white mt-6">
                ...and until now, you didn't.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== THE SOLUTION SECTION ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0c1020] to-[#0a0e1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Transition */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 mb-6">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                INTRODUCING THE SOLUTION
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                What If You Could <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Level The Playing Field</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                What if you had access to the <span className="text-white font-semibold">same AI technology</span> that hedge funds use to make millions... but simplified so anyone can use it in just <span className="text-blue-400 font-semibold">10 minutes a day</span>?
              </p>
            </div>

            {/* Solution reveal */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-blue-500/10 border border-blue-500/20 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-2xl shadow-blue-500/30">
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    TradePulse AI: Your 24/7 Wealth-Building Partner
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our proprietary AI analyzes <span className="text-blue-400 font-semibold">47 million data points per second</span> across global markets. It identifies high-probability trading opportunities with <span className="text-green-400 font-semibold">99.6% accuracy</span>... then sends you simple, easy-to-follow signals.
                  </p>
                </div>
              </div>
            </div>

            {/* Key benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  stat: "99.6%",
                  label: "Signal Accuracy",
                  desc: "Our AI doesn't guess. It analyzes patterns humans can't see, delivering near-perfect trade signals."
                },
                {
                  icon: Clock,
                  stat: "10 Min",
                  label: "Per Day Required",
                  desc: "Check your signals at 1 PM and 7 PM EST. Execute in seconds. That's it. Go live your life."
                },
                {
                  icon: Shield,
                  stat: "$30M+",
                  label: "Member Funds Protected",
                  desc: "Military-grade security. Your money stays in YOUR account on regulated exchanges. We never touch it."
                }
              ].map((benefit, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300 text-center">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{benefit.stat}</div>
                  <div className="text-blue-400 font-medium mb-3">{benefit.label}</div>
                  <p className="text-gray-500 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROOF SECTION ========== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Don't Take Our Word For It...
              </h2>
              <p className="text-xl text-gray-400">
                See what <span className="text-white font-semibold">real people</span> are saying:
              </p>
            </div>

            {/* Testimonials - story format */}
            <div className="space-y-8 mb-16">
              {[
                {
                  name: "Michael Thompson",
                  age: "42",
                  location: "Austin, Texas",
                  before: "Working 60+ hour weeks as a software engineer. Never saw my kids.",
                  after: "Quit my job after 6 months. Now I make more trading 30 minutes a day than I did working 60 hours.",
                  result: "$4,200/month → $11,800/month",
                  quote: "I was skeptical. Really skeptical. But the free strategy call showed me EXACTLY how the AI works. No fluff, just data. Within 3 weeks, I made back my entire first year's subscription. Within 6 months, I handed in my resignation.",
                  image: "MT"
                },
                {
                  name: "Sarah Chen",
                  age: "35",
                  location: "Sydney, Australia",
                  before: "Single mom. Two jobs. Zero savings. Constant stress.",
                  after: "Paid off $23,000 in debt. Building college fund for my daughter.",
                  result: "Started with $500 → Portfolio now $34,000+",
                  quote: "I literally started with $500 – money I was terrified to lose. The signals were so clear, so simple. Green arrow = buy. Red arrow = sell. That's it. My daughter doesn't know yet, but her college is going to be paid for.",
                  image: "SC"
                },
                {
                  name: "James Rodriguez",
                  age: "58",
                  location: "Miami, Florida",
                  before: "Retired. Fixed income. Watching savings dwindle.",
                  after: "Added $3,400/month passive income. Traveling with wife.",
                  result: "89% winning trades in first 90 days",
                  quote: "At my age, I thought I'd missed the crypto boat. Turns out, I was just waiting for the right vehicle. This AI is like having a brilliant financial advisor who works for free, 24/7. My wife and I just booked a 3-week cruise to Alaska. Paid in cash.",
                  image: "JR"
                }
              ].map((story, i) => (
                <Card key={i} className="border-white/5 bg-white/[0.02] overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3">
                      {/* Story */}
                      <div className="md:col-span-2 p-8">
                        <div className="flex gap-0.5 mb-4">
                          {[1,2,3,4,5].map((j) => (
                            <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6 italic">"{story.quote}"</p>
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                            {story.image}
                          </div>
                          <div>
                            <p className="font-semibold text-white">{story.name}, {story.age}</p>
                            <p className="text-sm text-gray-500">{story.location}</p>
                          </div>
                        </div>
                      </div>
                      {/* Results */}
                      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-8 flex flex-col justify-center border-l border-white/5">
                        <div className="space-y-4">
                          <div>
                            <p className="text-xs text-red-400 uppercase font-medium mb-1">Before</p>
                            <p className="text-sm text-gray-400">{story.before}</p>
                          </div>
                          <div>
                            <p className="text-xs text-green-400 uppercase font-medium mb-1">After</p>
                            <p className="text-sm text-gray-300">{story.after}</p>
                          </div>
                          <div className="pt-4 border-t border-white/10">
                            <p className="text-xs text-blue-400 uppercase font-medium mb-1">Results</p>
                            <p className="text-lg font-bold text-white">{story.result}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-blue-500/10 border border-blue-500/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter end={10847} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1">
                  $<AnimatedCounter end={47} suffix="M+" />
                </div>
                <div className="text-sm text-gray-400">Member Profits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">
                  <AnimatedCounter end={99.6} decimals={1} suffix="%" />
                </div>
                <div className="text-sm text-gray-400">Signal Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">
                  <AnimatedCounter end={32} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">Countries</div>
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Here's Exactly How It Works
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Three simple steps to your first profitable trade
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {[
                {
                  step: "STEP 1",
                  icon: Phone,
                  title: "Book Your Free Strategy Call (30 Minutes)",
                  desc: "This isn't a sales pitch. It's a genuine consultation where we learn about YOUR situation, goals, and investment capacity. We'll show you exactly how our AI works with real data – no fluff, no hype. If it's not right for you, we'll tell you. No pressure, no obligation.",
                  highlight: "Only 7 spots left this week",
                  time: "2 min to book"
                },
                {
                  step: "STEP 2",
                  icon: Target,
                  title: "Get Your Personalized Trading Blueprint",
                  desc: "Based on your strategy call, we create a custom plan tailored to YOUR budget, time, and goals. Whether you're starting with $300 or $30,000, we'll show you exactly what to expect. You'll know your projected returns, risk levels, and exactly what to do each day.",
                  highlight: "Usually ready within 24 hours",
                  time: "Custom plan created"
                },
                {
                  step: "STEP 3",
                  icon: Zap,
                  title: "Start Receiving AI Signals & Profit",
                  desc: "Every day at 1 PM and 7 PM EST, you'll receive crystal-clear signals. Green arrow = buy. Red arrow = sell. The exact entry price, exit price, and position size. No guessing. No analysis. Just follow the signals. Most members spend less than 10 minutes per day.",
                  highlight: "Average member profits within first week",
                  time: "10 min/day"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-8 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold">{item.step}</span>
                      <span className="text-xs text-gray-500">{item.time}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{item.desc}</p>
                    <p className="text-sm text-green-400 font-medium flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      {item.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== OBJECTION HANDLING ========== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                "But What If..." – Let's Address Your Concerns
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  objection: "\"I've never traded before. This seems complicated.\"",
                  answer: "Perfect – you're actually our IDEAL member. Why? Because you have no bad habits to unlearn. Our AI does ALL the heavy lifting. You literally just follow arrows. Green = buy. Red = sell. If you can read a traffic light, you can use TradePulse AI. We even have 78-year-old grandmothers making consistent profits."
                },
                {
                  objection: "\"I don't have a lot of money to start.\"",
                  answer: "Neither did 73% of our members. You can start with as little as $300 USDT. We actually recommend starting small to build confidence. Sarah started with $500 – her account is now worth $34,000+. It's not about how much you start with. It's about starting."
                },
                {
                  objection: "\"What if I lose money?\"",
                  answer: "Let's be real: ALL trading involves risk. But here's what makes us different – our AI has a 99.6% signal accuracy rate. That's not a typo. And we use strict risk management on every single trade. Your funds stay in YOUR exchange account – we never have access to withdraw your money. Ever."
                },
                {
                  objection: "\"I don't have time for this.\"",
                  answer: "You don't need time. Our signals arrive at 1 PM and 7 PM EST. You check them during lunch or after dinner. Execute the trade in under 60 seconds. Done. Most members spend less than 10 minutes total per day. That's less time than you spend scrolling Instagram."
                },
                {
                  objection: "\"Sounds too good to be true.\"",
                  answer: "Healthy skepticism is smart. That's exactly why we offer a FREE strategy call. We'll show you live trading data, real member results, and answer every question you have. No sales pressure. If it's not right for you, we'll tell you. We've turned away people who weren't a good fit. This isn't for everyone."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="text-lg font-semibold text-gray-300 mb-4">{item.objection}</p>
                  <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <FunnelFAQ />

      {/* ========== FINAL CTA ========== */}
      <section className="py-16 bg-gradient-to-b from-[#0a0e1a] to-[#0c1020]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Choice Is Simple
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/10">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Option A: Do Nothing</h3>
                <p className="text-gray-400 text-sm">Keep working 40+ hours/week. Watch others get rich. Wonder "what if" for the rest of your life.</p>
              </div>
              <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Option B: Take Action</h3>
                <p className="text-gray-400 text-sm">Book your FREE call. See if this is right for you. Worst case, you learn something. Best case? Everything changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BOOKING SECTION ========== */}
      <section id="booking" className="py-20 md:py-28 bg-[#0c1020]">
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
              IMPORTANT DISCLAIMER: Trading cryptocurrencies carries a high level of risk and may not be suitable for all investors. Past performance does not guarantee future results. The testimonials shown are individual results and may not reflect typical outcomes. You should carefully consider your investment objectives, level of experience, and risk appetite before making any investment decisions. Never invest more than you can afford to lose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
