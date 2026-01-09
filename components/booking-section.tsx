"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  Video,
  Shield,
  Gift,
  Zap
} from "lucide-react";

interface BookingSectionProps {
  variant?: "inline" | "modal" | "full";
}

export function BookingSection({ variant = "full" }: BookingSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission - replace with actual booking logic
    await new Promise(resolve => setTimeout(resolve, 1500));

    // TODO: Update with your actual Calendly/booking URL
    window.open("https://calendly.com/abundantblessingai/strategy-call", "_blank");

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const benefits = [
    "See exactly how the system works",
    "Get a personalized action plan",
    "Ask any questions you have",
    "No commitment required"
  ];

  if (isSubmitted) {
    return (
      <Card className="border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">You're All Set!</h3>
          <p className="text-gray-400 mb-4">
            Check your email for the calendar invite. We can't wait to show you how our simple system can help you build extra income.
          </p>
          <p className="text-sm text-blue-400">
            Look for an email from Abundant Blessing AI within 5 minutes
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={variant === "full" ? "grid lg:grid-cols-2 gap-8 items-center" : ""}>
      {/* Left side - Value proposition */}
      {variant === "full" && (
        <div className="space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-3">
              <Gift className="h-4 w-4" />
              FREE Strategy Session
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book Your Free
              <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Strategy Call Today
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              In just 30 minutes, discover how our simple copy-paste system can work for you.
              Get a personalized roadmap to start building extra income.
            </p>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                </div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Video className="h-4 w-4 text-blue-400/70" />
              <span>Zoom or Phone</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4 text-blue-400/70" />
              <span>30 Minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Shield className="h-4 w-4 text-blue-400/70" />
              <span>100% Free</span>
            </div>
          </div>
        </div>
      )}

      {/* Right side - Form */}
      <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
        <CardContent className="pt-6">
          {/* Urgency banner */}
          <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-white font-medium">Limited Availability</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-sm text-cyan-400 font-semibold">7 spots left</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <Calendar className="h-5 w-5 text-blue-400" />
            <span className="font-semibold text-white">Schedule Your Call</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-colors"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 text-base font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white group shadow-lg shadow-blue-500/25"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Booking...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Book My Free Strategy Call
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </Button>
          </form>

          <p className="text-center text-xs text-gray-600 mt-4">
            By booking, you agree to receive follow-up communications.
            We respect your privacy and will never spam you.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// Compact inline CTA for use throughout the page
export function InlineBookingCTA() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button
        size="lg"
        className="text-base px-8 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold group shadow-lg shadow-blue-500/25"
        onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Book Free Strategy Call
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
      <span className="text-sm text-gray-500 flex items-center gap-2">
        <Clock className="h-4 w-4" />
        30-min call, 100% free
      </span>
    </div>
  );
}
