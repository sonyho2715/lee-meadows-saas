"use client";

import { useEffect, useState } from "react";
import { Clock, Users, TrendingUp, AlertTriangle } from "lucide-react";
import { InlineBookingCTA } from "./booking-section";

export function UrgencySection() {
  // Simulated countdown for session availability
  const [spotsLeft, setSpotsLeft] = useState(12);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-amber-500/10 to-yellow-500/5" />
      <div className="absolute inset-0 bg-[#0a0e27]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-yellow-500 text-sm font-medium">Limited Availability</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Don't Let Another Opportunity
            <span className="block text-yellow-500">Pass You By</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Every day you wait is another day of potential profits missed.
            Our AI is generating signals right now. The only question is: will you be there to receive them?
          </p>

          {/* Urgency stats */}
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto">
            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
              <div className="text-2xl font-bold text-yellow-500">{spotsLeft}</div>
              <div className="text-xs text-gray-500">Spots Left This Week</div>
            </div>
            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
              <div className="text-2xl font-bold text-white">847</div>
              <div className="text-xs text-gray-500">Joined This Month</div>
            </div>
            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
              <div className="text-2xl font-bold text-green-400">+2.1%</div>
              <div className="text-xs text-gray-500">Today's Signal Profit</div>
            </div>
          </div>

          {/* CTA */}
          <InlineBookingCTA />

          {/* Secondary reassurance */}
          <p className="text-sm text-gray-600 mt-6">
            No credit card required. Just a conversation about your financial goals.
          </p>
        </div>
      </div>
    </section>
  );
}

// Floating CTA bar that appears on scroll
export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (roughly 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0e27]/95 backdrop-blur border-t border-yellow-500/20 py-3 px-4 transform transition-transform duration-300">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-gray-400">
            <span className="text-green-400 font-medium">AI is live</span> — generating signals now
          </span>
        </div>
        <button
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold text-sm transition-colors"
        >
          Book Free Call →
        </button>
      </div>
    </div>
  );
}
