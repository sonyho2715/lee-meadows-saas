"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, X, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

export function ComparisonTable() {
  const { language } = useLanguage();
  const t = componentTranslations[language].comparison;

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
            {t.title} <span className="text-yellow-500">{t.titleHighlight}</span> {t.titleEnd}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div></div>
              <Card className="border-red-500/30 bg-gradient-to-br from-red-950/30 to-[#0a0e27] p-6 text-center">
                <div className="text-red-400 font-bold text-xl mb-2">{t.traditional.title}</div>
                <p className="text-gray-400 text-sm">{t.traditional.subtitle}</p>
              </Card>
              <Card className="border-yellow-500/50 bg-gradient-to-br from-yellow-900/30 to-[#0a0e27] p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {t.recommended}
                </div>
                <div className="flex items-center justify-center gap-2 text-yellow-500 font-bold text-xl mb-2">
                  <TrendingUp className="h-5 w-5" />
                  {t.aiTrading.title}
                </div>
                <p className="text-gray-300 text-sm">{t.aiTrading.subtitle}</p>
              </Card>
            </div>

            {/* Table Rows */}
            <div className="space-y-3">
              {t.features.map((item, index) => (
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
                {t.cta.calculateReturns}
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
