"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, DollarSign, Percent } from "lucide-react";

export function ProfitTimeline() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [selectedDuration, setSelectedDuration] = useState(180);

  const amounts = [500, 1000, 3000, 5000];
  const durations = [
    { days: 30, label: "1 Month" },
    { days: 90, label: "3 Months" },
    { days: 180, label: "6 Months" },
    { days: 365, label: "1 Year" }
  ];

  const calculateProfit = (amount: number, days: number) => {
    const dailyRate = 0.025; // 2.5% daily
    const totalReturn = amount * Math.pow(1 + dailyRate, days);
    const profit = totalReturn - amount;
    return {
      total: totalReturn,
      profit: profit,
      percentage: ((profit / amount) * 100)
    };
  };

  const result = calculateProfit(selectedAmount, selectedDuration);

  // Generate milestone data
  const milestones = [
    { day: Math.floor(selectedDuration * 0.25), label: "25% Timeline" },
    { day: Math.floor(selectedDuration * 0.5), label: "50% Timeline" },
    { day: Math.floor(selectedDuration * 0.75), label: "75% Timeline" },
    { day: selectedDuration, label: "Target Reached" }
  ].map(m => ({
    ...m,
    ...calculateProfit(selectedAmount, m.day)
  }));

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">
            <Calendar className="h-3 w-3 mr-1" />
            Interactive Profit Visualizer
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Visualize Your <span className="text-yellow-500">Wealth Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See exactly how your investment grows over time with AI trading signals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-8">
            {/* Investment Amount Selector */}
            <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-yellow-500" />
                  Select Investment Amount
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {amounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount ? "default" : "outline"}
                      className={`h-16 text-lg font-bold ${
                        selectedAmount === amount
                          ? "bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700"
                          : "border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10"
                      }`}
                      onClick={() => setSelectedAmount(amount)}
                    >
                      ${amount.toLocaleString()}
                    </Button>
                  ))}
                </div>
                <div className="mt-4">
                  <label className="text-sm text-gray-400 mb-2 block">Custom Amount (USDT)</label>
                  <input
                    type="number"
                    min="300"
                    max="100000"
                    value={selectedAmount}
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Duration Selector */}
            <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-yellow-500" />
                  Select Time Period
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {durations.map((duration) => (
                    <Button
                      key={duration.days}
                      variant={selectedDuration === duration.days ? "default" : "outline"}
                      className={`h-16 text-base font-bold ${
                        selectedDuration === duration.days
                          ? "bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700"
                          : "border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10"
                      }`}
                      onClick={() => setSelectedDuration(duration.days)}
                    >
                      {duration.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            {/* Main Result Card */}
            <Card className="border-2 border-yellow-500/30 bg-gradient-to-br from-yellow-900/20 via-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
              <CardContent className="p-8 relative">
                <div className="text-center space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Your Investment</p>
                    <p className="text-3xl font-bold text-white">${selectedAmount.toLocaleString()}</p>
                  </div>

                  <div className="flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-yellow-500" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-2">Grows To</p>
                    <p className="text-5xl font-bold text-yellow-500 mb-2">
                      ${result.total.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-green-500">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-bold">+${result.profit.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Percent className="h-4 w-4" />
                        <span>+{result.percentage.toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-yellow-500/20">
                    <p className="text-gray-400 text-xs">in {selectedDuration} days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Milestones */}
            <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Growth Milestones</h3>
                <div className="space-y-3">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-[#0a0e27] border border-yellow-500/20"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{milestone.label}</p>
                        <p className="text-xs text-gray-400">Day {milestone.day}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-yellow-500">
                          ${milestone.total.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </p>
                        <p className="text-xs text-green-500">
                          +${milestone.profit.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 max-w-3xl mx-auto">
            Projections based on 2.5% average daily return with compound interest. Past performance does not guarantee future results.
            Cryptocurrency trading involves substantial risk of loss.
          </p>
        </div>
      </div>
    </section>
  );
}
