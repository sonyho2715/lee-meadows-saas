import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export function RiskWarning() {
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
                Risk Warning: Cryptocurrency Trading Involves Substantial Risk
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Trading and investing in cryptocurrencies carries a high level of risk and may not be suitable for all investors.
                The high degree of leverage and volatility can work against you as well as for you. Before deciding to trade cryptocurrency,
                you should carefully consider your investment objectives, level of experience, and risk appetite.
                <strong className="text-white"> You could lose some or all of your initial investment.</strong>
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Past performance is not indicative of future results. The stated 99.6% win rate is based on historical data
                and does not guarantee future performance. All trading involves risk, and individual results may vary significantly.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/disclaimer"
                  className="text-yellow-500 hover:text-yellow-400 text-sm font-medium transition-colors underline"
                >
                  Read Full Disclaimer
                </Link>
                <Link
                  href="/terms"
                  className="text-yellow-500 hover:text-yellow-400 text-sm font-medium transition-colors underline"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="text-yellow-500 hover:text-yellow-400 text-sm font-medium transition-colors underline"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
