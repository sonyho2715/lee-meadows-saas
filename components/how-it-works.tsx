"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Wallet, TrendingUp, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

export function HowItWorks() {
  const { language } = useLanguage();
  const t = componentTranslations[language].howItWorks;

  const stepIcons = [UserPlus, Wallet, TrendingUp, DollarSign];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">{t.badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step, index) => {
            const Icon = stepIcons[index];
            const stepNumber = String(index + 1).padStart(2, '0');
            return (
              <Card
                key={index}
                className="relative border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] hover:border-yellow-500/40 transition-all hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {stepNumber}
                  </div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-yellow-500/10 mb-4">
                    <Icon className="h-7 w-7 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">{t.cta.ready}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-medium transition-all"
            >
              {t.cta.contactNow}
            </a>
            <a
              href="#plans"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-medium transition-all"
            >
              {t.cta.viewPlans}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
