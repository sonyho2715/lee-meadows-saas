"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, X, TrendingDown, DollarSign, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RiskDisclaimerModal() {
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
              <h2 className="text-2xl font-bold text-white">Investment Risk Disclosure</h2>
              <p className="text-sm text-gray-400">Please read carefully before proceeding</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Main Warning */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <p className="text-red-400 font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              High-Risk Investment Warning
            </p>
            <p className="text-gray-300 text-sm">
              Cryptocurrency trading and investment carries a <span className="text-red-400 font-bold">HIGH LEVEL OF RISK</span> and
              may not be suitable for all investors. You could lose some or all of your invested capital.
            </p>
          </div>

          {/* Risk Categories */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <TrendingDown className="h-8 w-8 text-red-400 mb-3" />
              <h3 className="font-bold text-white mb-2">Market Volatility</h3>
              <p className="text-xs text-gray-400">
                Cryptocurrency markets are extremely volatile. Prices can fluctuate dramatically in short periods.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <DollarSign className="h-8 w-8 text-orange-400 mb-3" />
              <h3 className="font-bold text-white mb-2">Capital at Risk</h3>
              <p className="text-xs text-gray-400">
                Never invest money you cannot afford to lose. Past performance does not guarantee future results.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <Shield className="h-8 w-8 text-yellow-400 mb-3" />
              <h3 className="font-bold text-white mb-2">No Guarantees</h3>
              <p className="text-xs text-gray-400">
                While we strive for high performance, no investment returns are guaranteed.
              </p>
            </div>
          </div>

          {/* Detailed Risks */}
          <div className="space-y-3 text-sm text-gray-300">
            <h3 className="font-bold text-white text-base">Key Risk Factors:</h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span><strong>Market Risk:</strong> Cryptocurrency prices can increase or decrease rapidly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span><strong>Liquidity Risk:</strong> You may not be able to withdraw funds immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span><strong>Regulatory Risk:</strong> Changes in laws may affect cryptocurrency operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span><strong>Technology Risk:</strong> Blockchain and cryptocurrency technology risks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span><strong>Operational Risk:</strong> Platform or exchange operational failures</span>
              </li>
            </ul>
          </div>

          {/* Performance Disclaimer */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-sm text-gray-300">
              <span className="text-yellow-500 font-semibold">Performance Claims:</span> The 99.6% win rate
              and profit projections shown are based on historical data and simulations. They are not guarantees
              of future performance. Individual results may vary significantly.
            </p>
          </div>

          {/* Recommendations */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-blue-400 mb-2">We Strongly Recommend:</h4>
            <ul className="text-sm text-gray-300 space-y-1 ml-4">
              <li>• Only invest funds you can afford to lose</li>
              <li>• Diversify your investment portfolio</li>
              <li>• Seek independent financial advice if unsure</li>
              <li>• Understand the investment before committing</li>
              <li>• Start with small amounts to test the platform</li>
            </ul>
          </div>

          {/* Acknowledge Button */}
          <div className="pt-4">
            <Button
              onClick={handleAcknowledge}
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold py-6 text-base"
            >
              I Understand the Risks and Wish to Continue
            </Button>
            <p className="text-xs text-center text-gray-500 mt-3">
              By clicking above, you acknowledge that you have read, understood, and accept all risks
              associated with cryptocurrency investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
