"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  TrendingDown,
  Brain,
  AlertCircle,
  ArrowDown,
  CheckCircle2
} from "lucide-react";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: Clock,
      problem: "Working 60+ hours a week",
      agitation: "But your savings barely keep up with inflation. Another year passes, same financial situation.",
    },
    {
      icon: TrendingDown,
      problem: "Watching others profit from crypto",
      agitation: "While you missed Bitcoin at $1K, $10K, $30K... How many more opportunities will slip by?",
    },
    {
      icon: Brain,
      problem: "Too complex to learn trading",
      agitation: "Charts, indicators, market analysis. Who has time to become a trading expert while working full-time?",
    },
    {
      icon: AlertCircle,
      problem: "Afraid of losing money",
      agitation: "You've heard the horror stories. People losing their savings on bad trades. The fear keeps you stuck.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-red-950/10 to-[#0a0e27]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Does This Sound Like You?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Most people are stuck in the same cycle. Working hard but never getting ahead financially.
            </p>
          </div>

          {/* Pain points grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {painPoints.map((point, i) => (
              <Card key={i} className="border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{point.problem}</h3>
                      <p className="text-sm text-gray-500">{point.agitation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Transition to solution */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <ArrowDown className="h-8 w-8 text-yellow-500 animate-bounce" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              What If There Was a Better Way?
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Imagine an AI system that analyzes markets 24/7, identifies profitable trades, and tells you exactly what to do.
              <span className="text-yellow-500 font-medium"> No experience needed.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  const benefits = [
    {
      title: "AI Does the Heavy Lifting",
      description: "Our algorithm analyzes millions of data points to find the best trading opportunities. You just follow the signals.",
    },
    {
      title: "Just 10 Minutes a Day",
      description: "Check your signals at 1 PM and 7 PM EST. Execute the trades. That's it. The AI handles the analysis.",
    },
    {
      title: "99.6% Signal Accuracy",
      description: "Our AI has been tested across thousands of trades. The results speak for themselves.",
    },
    {
      title: "Start With Just $300",
      description: "You don't need thousands to begin. Start small, see the results, then scale up as you get comfortable.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0a0e27] to-[#0d1229]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-medium mb-4">
              The Solution
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Let AI Trade For You
              <span className="block text-yellow-500">While You Live Your Life</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              TradePulse AI uses advanced machine learning to analyze cryptocurrency markets and deliver precise trading signals directly to you.
            </p>
          </div>

          {/* Benefits list */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="h-8 w-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-500">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
