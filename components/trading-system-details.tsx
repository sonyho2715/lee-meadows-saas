"use client";

import { Badge } from "@/components/ui/badge";
import { GlassCard, GlassCardHighlight } from "@/components/glass-card";
import { Zap, Clock, DollarSign, TrendingUp, Shield, Percent, ArrowRight, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

export function TradingSystemDetails() {
  const { language } = useLanguage();
  const t = componentTranslations[language].tradingSystem;
  const iconMap: Record<number, any> = {
    0: Zap,
    1: Clock,
    2: Percent,
    3: DollarSign
  };

  const streamIconMap: Record<number, any> = {
    0: TrendingUp,
    1: Users,
    2: Award,
    3: DollarSign
  };

  const streamColorMap: Record<number, string> = {
    0: "text-green-400",
    1: "text-blue-400",
    2: "text-purple-400",
    3: "text-yellow-400"
  };

  return (
    <section className="container mx-auto px-4 py-20 bg-[#0a0e27]/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">
            <Zap className="h-3 w-3 mr-1" />
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t.title} <span className="text-yellow-500">{t.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {t.features.map((feature, index) => {
            const Icon = iconMap[index];
            return (
              <GlassCard key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-yellow-500 font-medium mb-2">{feature.description}</p>
                    <p className="text-gray-400 text-sm">{feature.details}</p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Capital Growth Timeline */}
        <GlassCardHighlight className="p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{t.capitalGrowth.title}</h3>
            <p className="text-gray-300">{t.capitalGrowth.subtitle}</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">$500</div>
              <div className="text-gray-400">{t.capitalGrowth.starting}</div>
            </div>
            <ArrowRight className="h-8 w-8 text-yellow-500 rotate-90 md:rotate-0" />
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">$1,000</div>
              <div className="text-gray-400">{t.capitalGrowth.after60Days}</div>
            </div>
            <div className="text-sm text-gray-400 md:ml-6 text-center md:text-left">
              <div className="font-semibold text-green-400 mb-1">{t.capitalGrowth.growth}</div>
              <div>{t.capitalGrowth.description}</div>
            </div>
          </div>
        </GlassCardHighlight>

        {/* Income Streams */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">{t.incomeStreams.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.incomeStreams.streams.map((item, index) => {
              const Icon = streamIconMap[index];
              return (
                <GlassCard key={index} className="p-6 text-center">
                  <Icon className={`h-10 w-10 ${streamColorMap[index]} mx-auto mb-3`} />
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Withdrawal Information */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">{t.withdrawal.title}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {t.withdrawal.types.map((info, index) => (
              <GlassCard key={index} className="p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 mb-3">
                    <Shield className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-1">{info.type}</h4>
                  <div className="text-3xl font-bold text-yellow-500 my-2">{info.fee}</div>
                  <div className="text-sm text-gray-400 mb-2">{info.condition}</div>
                </div>
                <p className="text-gray-400 text-sm text-center border-t border-white/10 pt-4">
                  {info.description}
                </p>
              </GlassCard>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            {t.withdrawal.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
