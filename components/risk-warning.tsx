"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

export function RiskWarning() {
  const { language } = useLanguage();
  const t = componentTranslations[language].riskWarning;

  return (
    <section className="container mx-auto px-4 py-8">
      <Card className="border-2 border-red-500/30 bg-gradient-to-br from-red-900/10 to-red-950/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-bold text-red-400">
                {t.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.paragraph1}
                <strong className="text-white"> {t.lossWarning}</strong>
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.paragraph2}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/disclaimer"
                  className="text-yellow-500 hover:text-yellow-400 text-sm font-medium transition-colors underline"
                >
                  {t.links.disclaimer}
                </Link>
                <Link
                  href="/terms"
                  className="text-yellow-500 hover:text-yellow-400 text-sm font-medium transition-colors underline"
                >
                  {t.links.terms}
                </Link>
                <Link
                  href="/privacy"
                  className="text-yellow-500 hover:text-yellow-400 text-sm font-medium transition-colors underline"
                >
                  {t.links.privacy}
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
