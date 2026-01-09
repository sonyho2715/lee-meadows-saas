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
  Copy
} from "lucide-react";
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
              AB
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">Abundant Blessing AI</span>
              <span className="text-xs text-blue-400/80">Your Path to Financial Freedom</span>
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
              $300 to $10,000+ Per Month
            </span>
            <span className="block text-3xl md:text-4xl mt-4 text-gray-300">
              With A Simple <span className="underline decoration-blue-400 decoration-4">Copy & Paste System</span>
            </span>
          </h1>

          {/* Subheadline with specifics */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            In the next <span className="text-white font-semibold">3 minutes</span>, you'll discover the exact system that's helped <span className="text-blue-400 font-semibold">thousands of people</span> quit stressful jobs, fire toxic bosses, and build <span className="text-white font-semibold">life-changing wealth</span>...
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ...even if you have <span className="italic">zero</span> tech skills, no experience, and only <span className="text-blue-400 font-semibold">10 minutes a day</span> to spare.
          </p>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-y border-white/10">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span><span className="text-white font-semibold">4.9/5</span> from 500+ reviews</span>
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
                  desc: "Hearing about people making money online... but feeling like you missed your chance or don't have the skills."
                },
                {
                  icon: XCircle,
                  title: "Failed Side Hustles",
                  desc: "Maybe you tried dropshipping, crypto, or other \"opportunities\" before. Lost money. Felt stupid. Told yourself \"this isn't for people like me.\""
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
                Most "make money online" programs are <span className="text-red-400 font-semibold">designed to fail you</span>. They're complicated, time-consuming, and require skills you don't have. The gurus make money selling courses, not using them...
              </p>
              <p className="text-2xl md:text-3xl font-bold text-white mt-6">
                ...until now.
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
                What If Making Money Was As Simple As <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Copy & Paste</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                What if you had a <span className="text-white font-semibold">done-for-you system</span> that required just <span className="text-blue-400 font-semibold">10 minutes a day</span>... no tech skills, no experience, no complicated learning curve?
              </p>
            </div>

            {/* Solution reveal */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-blue-500/10 border border-blue-500/20 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-2xl shadow-blue-500/30">
                  <Copy className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Abundant Blessing AI: Your Simple Path to Extra Income
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our proven system gives you <span className="text-blue-400 font-semibold">ready-to-use templates and strategies</span> that you simply copy and paste. No guesswork. No complicated software. Just follow the simple steps, spend <span className="text-green-400 font-semibold">10 minutes a day</span>, and watch your income grow.
                  </p>
                </div>
              </div>
            </div>

            {/* Key benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Copy,
                  stat: "Copy",
                  label: "& Paste Simple",
                  desc: "No tech skills needed. If you can copy text and click a button, you can do this."
                },
                {
                  icon: Clock,
                  stat: "10 Min",
                  label: "Per Day Maximum",
                  desc: "Check in once or twice a day. Execute in minutes. That's it. Go live your life."
                },
                {
                  icon: Shield,
                  stat: "$300",
                  label: "Start Small",
                  desc: "You don't need thousands to start. Begin with what you're comfortable with and scale up."
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
                  after: "Now makes an extra $4,500/month working just 10 minutes a day.",
                  result: "$0 side income → $4,500/month",
                  quote: "I was skeptical. Really skeptical. But the free strategy call showed me EXACTLY how the system works. No fluff, just simple steps. Within 3 weeks, I was making extra money. Within 3 months, I had enough to start planning my exit from corporate life.",
                  image: "MT"
                },
                {
                  name: "Sarah Chen",
                  age: "35",
                  location: "Sydney, Australia",
                  before: "Single mom. Two jobs. Zero savings. Constant stress.",
                  after: "Paid off $23,000 in debt. Building college fund for my daughter.",
                  result: "Started with $500 → Now earning $2,800/month extra",
                  quote: "I literally started with $500 of savings. The copy-paste system was so simple. My daughter doesn't know yet, but her college is going to be paid for. All from 10 minutes a day between my jobs.",
                  image: "SC"
                },
                {
                  name: "James Rodriguez",
                  age: "58",
                  location: "Miami, Florida",
                  before: "Retired. Fixed income. Watching savings dwindle.",
                  after: "Added $3,400/month passive income. Traveling with wife.",
                  result: "From worried retiree to financial peace",
                  quote: "At my age, I thought making money online was for young tech people. This system proved me wrong. Copy, paste, done. My wife and I just booked a 3-week cruise to Alaska. Paid in cash.",
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
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1">
                  $<AnimatedCounter end={10} suffix="K+" />
                </div>
                <div className="text-sm text-gray-400">Top Earners/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">
                  <AnimatedCounter end={10} suffix=" min" />
                </div>
                <div className="text-sm text-gray-400">Per Day Required</div>
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
                Three simple steps to start earning extra income
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {[
                {
                  step: "STEP 1",
                  icon: Phone,
                  title: "Book Your Free Strategy Call (30 Minutes)",
                  desc: "This isn't a sales pitch. It's a genuine consultation where we learn about YOUR situation, goals, and available time. We'll show you exactly how the system works with real examples. If it's not right for you, we'll tell you. No pressure, no obligation.",
                  highlight: "Only 7 spots left this week",
                  time: "2 min to book"
                },
                {
                  step: "STEP 2",
                  icon: Target,
                  title: "Get Your Personalized Action Plan",
                  desc: "Based on your strategy call, we create a custom plan tailored to YOUR schedule, budget, and goals. Whether you're starting with $300 or $3,000, we'll show you exactly what to expect. You'll know your projected earnings and exactly what to do each day.",
                  highlight: "Usually ready within 24 hours",
                  time: "Custom plan created"
                },
                {
                  step: "STEP 3",
                  icon: Copy,
                  title: "Copy, Paste & Profit",
                  desc: "Every day, you'll get simple templates and instructions. Copy them. Paste them. Done. No complicated software. No tech skills. No guesswork. Most members spend 10 minutes or less per day. It's literally that simple.",
                  highlight: "Most members see results within first week",
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
                  objection: "\"I'm not tech-savvy. This seems complicated.\"",
                  answer: "Perfect – you're actually our IDEAL member. If you can copy text and click a button, you can do this. We've had 70-year-old grandmothers succeed with this system. It's literally copy, paste, done. No apps to learn. No software to master. Just simple steps anyone can follow."
                },
                {
                  objection: "\"I don't have a lot of money to start.\"",
                  answer: "Neither did most of our members. You can start with as little as $300. We actually recommend starting small to build confidence. Sarah started with $500 – now she earns an extra $2,800 a month. It's not about how much you start with. It's about starting."
                },
                {
                  objection: "\"What if it doesn't work for me?\"",
                  answer: "That's exactly why we offer a FREE strategy call first. We'll assess your situation honestly. If we don't think this is right for you, we'll tell you. We've turned people away before. But if you can follow simple instructions for 10 minutes a day, this will work."
                },
                {
                  objection: "\"I don't have time for this.\"",
                  answer: "You don't need much time. 10 minutes a day. That's less than your morning coffee break. Check in, follow the simple steps, done. Most members do it while watching TV or during lunch. If you have 10 minutes, you have enough time."
                },
                {
                  objection: "\"Sounds too good to be true.\"",
                  answer: "Healthy skepticism is smart. That's exactly why we offer a FREE strategy call. We'll show you real examples, answer every question, and let you decide. No pressure. If you leave thinking \"this isn't for me,\" no hard feelings. But most people leave saying \"why didn't I find this sooner?\""
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

      {/* ========== WHO THIS IS FOR ========== */}
      <section className="py-20 md:py-28 bg-[#0c1020]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Is This Right For You?
              </h2>
              <p className="text-gray-400 text-lg">
                This system works best for certain types of people. Let's see if you're a fit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* This IS For You */}
              <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6" />
                  This IS For You If...
                </h3>
                <ul className="space-y-4">
                  {[
                    "You want extra income but don't have hours to spare",
                    "You're willing to follow simple instructions consistently",
                    "You can start with at least $300",
                    "You're coachable and open to learning something new",
                    "You want a proven system, not another \"get rich quick\" scheme",
                    "You're tired of trading your time for money"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* This is NOT For You */}
              <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                  <XCircle className="h-6 w-6" />
                  This is NOT For You If...
                </h3>
                <ul className="space-y-4">
                  {[
                    "You're looking for overnight riches with zero effort",
                    "You can't commit to 10 minutes a day",
                    "You're not willing to follow simple steps",
                    "You expect guarantees (no legitimate system can promise that)",
                    "You'd rather complain than take action",
                    "You're happy with your current financial situation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-400 mb-4">
                If you see yourself in the left column, we should talk.
              </p>
              <Button
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-8 py-6"
              >
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
                <p className="text-gray-400 text-sm">Keep working 40+ hours/week. Keep living paycheck to paycheck. Wonder "what if" for the rest of your life.</p>
              </div>
              <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Option B: Take Action</h3>
                <p className="text-gray-400 text-sm">Book your FREE call. Spend 30 minutes learning about the system. Worst case, you learn something. Best case? Everything changes.</p>
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
                AB
              </div>
              <span className="text-gray-500 text-sm">Abundant Blessing AI</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="/terms" className="hover:text-gray-400 transition-colors">Terms</a>
              <a href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</a>
              <a href="/disclaimer" className="hover:text-gray-400 transition-colors">Disclaimer</a>
            </div>

            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Abundant Blessing AI. All rights reserved.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-gray-700 max-w-3xl mx-auto">
              IMPORTANT DISCLAIMER: Results shown are not typical and individual results may vary. The testimonials shown represent individual experiences and may not reflect typical outcomes. Success depends on many factors including your effort, time commitment, and market conditions. Never invest more than you can afford to lose. This is not financial advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
