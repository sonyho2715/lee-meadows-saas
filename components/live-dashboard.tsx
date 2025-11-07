"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Activity, Users, DollarSign, CheckCircle, Clock, Zap, Target } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

export function LiveDashboard() {
  const { language } = useLanguage();
  const t = componentTranslations[language].liveDashboard;

  const [winRate, setWinRate] = useState(99.4);
  const [activeTraders, setActiveTraders] = useState(10247);
  const [todayProfit, setTodayProfit] = useState(284567);
  const [activeSignals, setActiveSignals] = useState(12);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setWinRate(prev => Math.min(99.9, prev + (Math.random() * 0.2 - 0.1)));
      setActiveTraders(prev => prev + Math.floor(Math.random() * 5 - 1));
      setTodayProfit(prev => prev + Math.floor(Math.random() * 5000));
      setActiveSignals(prev => Math.max(8, Math.min(18, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const recentTrades = [
    { id: 1, pair: "BTC/USDT", type: "LONG", profit: "+$2,450", time: "2 mins ago", status: "win" },
    { id: 2, pair: "ETH/USDT", type: "SHORT", profit: "+$1,890", time: "5 mins ago", status: "win" },
    { id: 3, pair: "ADA/USDT", type: "LONG", profit: "+$780", time: "8 mins ago", status: "win" },
    { id: 4, pair: "BTC/USDT", type: "LONG", profit: "+$3,120", time: "12 mins ago", status: "win" },
    { id: 5, pair: "SOL/USDT", type: "SHORT", profit: "+$1,450", time: "15 mins ago", status: "win" }
  ];

  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-[#0a0e27] to-[#0a0e27]/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500 animate-pulse">
            <Activity className="h-3 w-3 mr-1" />
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t.title} <span className="text-yellow-500">{t.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Live Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Win Rate */}
          <Card className="border-yellow-500/30 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl" />
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Target className="h-4 w-4 text-yellow-500" />
                {t.stats.winRate}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-500 mb-1">
                {winRate.toFixed(1)}%
              </div>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <TrendingUp className="h-3 w-3" />
                <span>{t.stats.fromAvg}</span>
              </div>
            </CardContent>
          </Card>

          {/* Active Traders */}
          <Card className="border-blue-500/30 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-500" />
                {t.stats.activeTraders}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500 mb-1">
                {activeTraders.toLocaleString()}
              </div>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <TrendingUp className="h-3 w-3" />
                <span>{t.stats.today}</span>
              </div>
            </CardContent>
          </Card>

          {/* Today's Profit */}
          <Card className="border-green-500/30 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl" />
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-green-500" />
                {t.stats.todayProfit}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500 mb-1">
                ${(todayProfit / 1000).toFixed(0)}K
              </div>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <TrendingUp className="h-3 w-3" />
                <span>{t.stats.allMembers}</span>
              </div>
            </CardContent>
          </Card>

          {/* Active Signals */}
          <Card className="border-purple-500/30 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Zap className="h-4 w-4 text-purple-500" />
                {t.stats.activeSignals}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-500 mb-1">
                {activeSignals}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Clock className="h-3 w-3" />
                <span>{t.stats.liveNow}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Winning Trades Feed */}
        <Card className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Activity className="h-5 w-5 text-yellow-500 animate-pulse" />
              {t.recentTrades.title}
              <Badge variant="secondary" className="ml-auto bg-green-500/20 text-green-500 border-green-500/30">
                {t.recentTrades.live}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTrades.map((trade) => (
                <div
                  key={trade.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-green-950/20 to-transparent border border-green-500/20 hover:border-green-500/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{trade.pair}</div>
                      <div className="text-sm text-gray-400">{trade.type} {t.recentTrades.position}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-500 text-lg">{trade.profit}</div>
                    <div className="text-xs text-gray-400">{trade.time.replace('ago', t.recentTrades.ago)}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Auto-scrolling indicator */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                {t.recentTrades.disclaimer}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Card className="border-yellow-500/30 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-yellow-900/20 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              {t.cta.title}
            </h3>
            <p className="text-gray-300 mb-6">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-medium transition-all"
              >
                {t.cta.startTrading}
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-medium transition-all"
              >
                {t.cta.calculateProfits}
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
