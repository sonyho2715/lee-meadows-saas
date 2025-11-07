"use client";

import { useState } from "react";
import { Calculator, TrendingUp, DollarSign, Clock, Target } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

// Investment stages from the wealth planning chart
const investmentStages = [
  { stage: 1, amount: 500, dailyProfit: 15, monthlyProfit: 450, duration: 30 },
  { stage: 2, amount: 1000, dailyProfit: 35, monthlyProfit: 1050, duration: 30 },
  { stage: 3, amount: 2000, dailyProfit: 80, monthlyProfit: 2400, duration: 30 },
  { stage: 4, amount: 3000, dailyProfit: 135, monthlyProfit: 4050, duration: 30 },
  { stage: 5, amount: 5000, dailyProfit: 250, monthlyProfit: 7500, duration: 30 },
];

export function InvestmentCalculator() {
  const { language } = useLanguage();
  const t = componentTranslations[language].calculator;
  const [selectedStage, setSelectedStage] = useState(investmentStages[0]);
  const [customAmount, setCustomAmount] = useState(500);
  const [duration, setDuration] = useState(30);
  const [isCustom, setIsCustom] = useState(false);

  // Calculate returns based on custom amount (3% daily average)
  const calculateCustomReturns = () => {
    const dailyRate = 0.03; // 3% daily return
    const dailyProfit = customAmount * dailyRate;
    const totalProfit = dailyProfit * duration;
    const totalReturn = customAmount + totalProfit;
    const roi = (totalProfit / customAmount) * 100;

    return {
      dailyProfit: dailyProfit.toFixed(2),
      totalProfit: totalProfit.toFixed(2),
      totalReturn: totalReturn.toFixed(2),
      roi: roi.toFixed(2),
    };
  };

  // Calculate returns for preset stages
  const calculateStageReturns = () => {
    const totalProfit = selectedStage.dailyProfit * duration;
    const totalReturn = selectedStage.amount + totalProfit;
    const roi = (totalProfit / selectedStage.amount) * 100;

    return {
      dailyProfit: selectedStage.dailyProfit.toFixed(2),
      totalProfit: totalProfit.toFixed(2),
      totalReturn: totalReturn.toFixed(2),
      roi: roi.toFixed(2),
    };
  };

  const results = isCustom ? calculateCustomReturns() : calculateStageReturns();

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
            <Calculator className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium text-yellow-500">
              {t.badge}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t.title} <span className="text-yellow-500">{t.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Input */}
          <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] rounded-2xl p-6 md:p-8 border border-yellow-500/20">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-yellow-500" />
              {t.investmentDetails}
            </h3>

            {/* Toggle: Preset vs Custom */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setIsCustom(false)}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  !isCustom
                    ? "bg-yellow-500 text-black"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {t.presetStages}
              </button>
              <button
                onClick={() => setIsCustom(true)}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  isCustom
                    ? "bg-yellow-500 text-black"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {t.customAmount}
              </button>
            </div>

            {/* Preset Stages */}
            {!isCustom && (
              <div className="space-y-4 mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.selectStage}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {investmentStages.map((stage) => (
                    <button
                      key={stage.stage}
                      onClick={() => setSelectedStage(stage)}
                      className={`p-3 rounded-lg border transition-all ${
                        selectedStage.stage === stage.stage
                          ? "bg-yellow-500/20 border-yellow-500 text-yellow-500"
                          : "bg-white/5 border-white/10 text-gray-400 hover:border-yellow-500/50"
                      }`}
                    >
                      <div className="text-xs opacity-70 mb-1">{t.stage} {stage.stage}</div>
                      <div className="font-bold">${stage.amount}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Amount */}
            {isCustom && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.investmentAmount}
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(Number(e.target.value))}
                    min="100"
                    step="100"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">{t.minimum}</p>
              </div>
            )}

            {/* Duration Slider */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {t.duration}: {duration} {t.days}
              </label>
              <input
                type="range"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                min="7"
                max="365"
                step="1"
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>7 {t.days}</span>
                <span>6 {t.months}</span>
                <span>1 {t.year}</span>
              </div>
            </div>

            {/* Current Investment Display */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-sm text-gray-400 mb-1">{t.yourInvestment}</div>
              <div className="text-3xl font-bold text-yellow-500">
                ${isCustom ? customAmount.toLocaleString() : selectedStage.amount.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-2xl p-6 md:p-8 border border-yellow-500/30">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-yellow-500" />
                {t.projectedReturns}
              </h3>

              <div className="space-y-6">
                {/* Daily Profit */}
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">{t.dailyProfit}</div>
                  <div className="text-2xl font-bold text-green-400">
                    +${results.dailyProfit}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{t.perDay}</div>
                </div>

                {/* Total Profit */}
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">{t.totalProfit}</div>
                  <div className="text-2xl font-bold text-green-400">
                    +${results.totalProfit}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{t.after} {duration} {t.days}</div>
                </div>

                {/* Total Return */}
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">{t.totalReturn}</div>
                  <div className="text-3xl font-bold text-yellow-500">
                    ${results.totalReturn}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {t.investmentPlusProfit}
                  </div>
                </div>

                {/* ROI Percentage */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-green-500/10 rounded-lg p-4 border border-yellow-500/30">
                  <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    {t.roi}
                  </div>
                  <div className="text-4xl font-bold text-yellow-500">
                    {results.roi}%
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-6 md:p-8 text-center">
              <h4 className="text-xl font-bold text-black mb-2">
                {t.readyToStart}
              </h4>
              <p className="text-black/70 text-sm mb-4">
                {t.joinDescription}
              </p>
              <button className="w-full bg-black text-yellow-500 py-3 px-6 rounded-lg font-bold hover:bg-black/80 transition-colors">
                {t.getStarted}
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 max-w-3xl mx-auto">
            {t.disclaimer}
          </p>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #eab308;
          cursor: pointer;
          border-radius: 50%;
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #eab308;
          cursor: pointer;
          border-radius: 50%;
          border: none;
        }
      `}</style>
    </section>
  );
}
