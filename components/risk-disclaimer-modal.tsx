"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, X, TrendingDown, DollarSign, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

export function RiskDisclaimerModal() {
  const { language } = useLanguage();
  const t = componentTranslations[language].riskDisclaimer;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has acknowledged disclaimer
    const acknowledged = localStorage.getItem("risk_disclaimer_acknowledged");
    const ageVerified = localStorage.getItem("age_verified");

    if (!acknowledged && ageVerified === "true") {
      // Show after age verification (3 seconds delay)
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem("risk_disclaimer_acknowledged", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const riskIcons = [TrendingDown, DollarSign, Shield];

  return (
    <div className="fixed inset-0 z-[190] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Modal */}
      <div className="relative max-w-2xl w-full bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] rounded-2xl border border-red-500/30 shadow-2xl shadow-red-500/20 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleAcknowledge}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-white" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-600/20 p-6 border-b border-red-500/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
              <AlertTriangle className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{t.title}</h2>
              <p className="text-sm text-gray-400">{t.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Main Warning */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <p className="text-red-400 font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              {t.warning.title}
            </p>
            <p className="text-gray-300 text-sm">
              {t.warning.description}
            </p>
          </div>

          {/* Risk Categories */}
          <div className="grid md:grid-cols-3 gap-4">
            {t.categories.map((category, index) => {
              const Icon = riskIcons[index];
              return (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <Icon className="h-8 w-8 text-red-400 mb-3" />
                  <h3 className="font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-xs text-gray-400">{category.description}</p>
                </div>
              );
            })}
          </div>

          {/* Detailed Risks */}
          <div className="space-y-3 text-sm text-gray-300">
            <h3 className="font-bold text-white text-base">{t.keyRisks.title}</h3>
            <ul className="space-y-2 ml-4">
              {t.keyRisks.risks.map((risk, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>{risk.label}</strong> {risk.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Performance Disclaimer */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-sm text-gray-300">
              <span className="text-yellow-500 font-semibold">{t.performance.title}</span> {t.performance.description}
            </p>
          </div>

          {/* Recommendations */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-blue-400 mb-2">{t.recommendations.title}</h4>
            <ul className="text-sm text-gray-300 space-y-1 ml-4">
              {t.recommendations.items.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* Acknowledge Button */}
          <div className="pt-4">
            <Button
              onClick={handleAcknowledge}
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold py-6 text-base"
            >
              {t.acknowledge}
            </Button>
            <p className="text-xs text-center text-gray-500 mt-3">
              {t.acknowledgementText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
