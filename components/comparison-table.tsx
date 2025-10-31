"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, X, Zap, TrendingUp } from "lucide-react";

export function ComparisonTable() {
  const comparisons = [
    {
      feature: "Win Rate Accuracy",
      traditional: "60-70%",
      traditionalBad: true,
      aiTrading: "99.6%",
      aiBad: false
    },
    {
      feature: "Time Investment Required",
      traditional: "4-8 hours daily",
      traditionalBad: true,
      aiTrading: "Just minutes per day",
      aiBad: false
    },
    {
      feature: "Technical Knowledge Needed",
      traditional: "Extensive experience required",
      traditionalBad: true,
      aiTrading: "No experience needed",
      aiBad: false
    },
    {
      feature: "Emotional Decision Making",
      traditional: "High risk of emotional trades",
      traditionalBad: true,
      aiTrading: "100% data-driven, zero emotion",
      aiBad: false
    },
    {
      feature: "Market Analysis Speed",
      traditional: "Manual, slow analysis",
      traditionalBad: true,
      aiTrading: "Real-time AI processing",
      aiBad: false
    },
    {
      feature: "Signal Timing",
      traditional: "Often missed opportunities",
      traditionalBad: true,
      aiTrading: "Precise entry/exit signals",
      aiBad: false
    },
    {
      feature: "Risk Management",
      traditional: "Inconsistent, human error",
      traditionalBad: true,
      aiTrading: "Automated risk controls",
      aiBad: false
    },
    {
      feature: "Daily Profit Potential",
      traditional: "Unpredictable, volatile",
      traditionalBad: true,
      aiTrading: "Consistent daily returns",
      aiBad: false
    },
    {
      feature: "Stress Level",
      traditional: "High stress, constant monitoring",
      traditionalBad: true,
      aiTrading: "Low stress, automated",
      aiBad: false
    },
    {
      feature: "Learning Curve",
      traditional: "Months to years",
      traditionalBad: true,
      aiTrading: "Start profiting day 1",
      aiBad: false
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20 bg-[#0a0e27]/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">
            <Zap className="h-3 w-3 mr-1" />
            AI vs Traditional
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Why <span className="text-yellow-500">AI Trading</span> Beats Traditional Methods
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See the clear advantages of Lee Meadows AI-powered trading system compared to traditional manual trading
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div></div>
              <Card className="border-red-500/30 bg-gradient-to-br from-red-950/30 to-[#0a0e27] p-6 text-center">
                <div className="text-red-400 font-bold text-xl mb-2">Traditional Trading</div>
                <p className="text-gray-400 text-sm">Manual, Time-Intensive</p>
              </Card>
              <Card className="border-yellow-500/50 bg-gradient-to-br from-yellow-900/30 to-[#0a0e27] p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                  RECOMMENDED
                </div>
                <div className="flex items-center justify-center gap-2 text-yellow-500 font-bold text-xl mb-2">
                  <TrendingUp className="h-5 w-5" />
                  Lee Meadows AI Trading
                </div>
                <p className="text-gray-300 text-sm">Automated, AI-Powered</p>
              </Card>
            </div>

            {/* Table Rows */}
            <div className="space-y-3">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 items-center group hover:scale-[1.02] transition-transform"
                >
                  {/* Feature Name */}
                  <div className="bg-gradient-to-r from-[#1a1f3a] to-transparent p-4 rounded-l-lg">
                    <p className="text-white font-semibold">{item.feature}</p>
                  </div>

                  {/* Traditional Trading */}
                  <Card className="border-red-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-4 group-hover:border-red-500/40 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                          <X className="h-4 w-4 text-red-400" />
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">{item.traditional}</p>
                    </div>
                  </Card>

                  {/* AI Trading */}
                  <Card className="border-yellow-500/30 bg-gradient-to-br from-yellow-900/10 to-[#0a0e27] p-4 group-hover:border-yellow-500/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                          <Check className="h-4 w-4 text-yellow-500" />
                        </div>
                      </div>
                      <p className="text-white font-medium text-sm">{item.aiTrading}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Card className="border-yellow-500/30 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-yellow-900/20 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Make the Switch to AI Trading?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of traders who have already upgraded to Lee Meadows AI-powered system and are earning consistent daily profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-medium transition-all"
              >
                Start AI Trading Today
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-medium transition-all"
              >
                Calculate Your Returns
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
