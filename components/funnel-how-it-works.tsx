"use client";

import { Calendar, MessageSquare, Rocket } from "lucide-react";

export function FunnelHowItWorks() {
  const steps = [
    {
      step: "01",
      icon: Calendar,
      title: "Book Your Free Strategy Call",
      description: "Schedule a 30-minute call with our trading experts. No commitment, just a conversation about your goals.",
    },
    {
      step: "02",
      icon: MessageSquare,
      title: "Get Your Personalized Plan",
      description: "We'll analyze your situation and create a custom strategy based on your investment capacity and goals.",
    },
    {
      step: "03",
      icon: Rocket,
      title: "Start Receiving AI Signals",
      description: "Once you're set up, you'll receive daily trading signals. Just follow them and watch your portfolio grow.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0d1229]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Getting Started is Simple
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Three steps to start your AI trading journey
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((item, i) => (
              <div key={i} className="relative group">
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-yellow-500/20 transition-colors h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-bold text-yellow-500/20">{item.step}</div>
                    <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-yellow-500" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                {/* Connector line */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-yellow-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
