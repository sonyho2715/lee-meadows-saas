"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Users, Globe, Shield } from "lucide-react";

export function FunnelSocialProof() {
  const stats = [
    { value: "10,000+", label: "Active Traders", icon: Users },
    { value: "99.6%", label: "Signal Accuracy", icon: TrendingUp },
    { value: "30+", label: "Countries", icon: Globe },
    { value: "$30M", label: "Fund Protection", icon: Shield },
  ];

  const testimonials = [
    {
      name: "Michael T.",
      location: "California, USA",
      content: "I was skeptical at first, but after the strategy call, everything made sense. Started with $500, now I'm seeing consistent daily returns. The AI signals are incredibly accurate.",
      result: "+$2,340 in first month",
    },
    {
      name: "Sarah K.",
      location: "Sydney, Australia",
      content: "Finally, a trading system that doesn't require me to stare at charts all day. I check my signals twice a day during my lunch break and after work. It's changed my financial outlook completely.",
      result: "3x initial investment",
    },
    {
      name: "David L.",
      location: "Singapore",
      content: "The free strategy call was eye-opening. They explained exactly how the AI works and showed me real results. No pressure, just facts. I signed up immediately after.",
      result: "Quit job in 8 months",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Join Thousands of Successful Traders
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Real people, real results. Here's what our members are saying.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <stat.icon className="h-5 w-5 text-yellow-500/70 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-white/5 bg-white/[0.02]">
                <CardContent className="pt-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-400 text-sm mb-4 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Result badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium mb-4">
                    {testimonial.result}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center">
                      <span className="text-yellow-500 font-medium">
                        {testimonial.name.charAt(0)}
                      </span>
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
              <span key={reg} className="px-3 py-1 rounded bg-white/[0.03] text-gray-500 text-sm border border-white/5">
                {reg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
