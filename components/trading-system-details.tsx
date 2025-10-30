import { Badge } from "@/components/ui/badge";
import { GlassCard, GlassCardHighlight } from "@/components/glass-card";
import { Zap, Clock, DollarSign, TrendingUp, Shield, Percent, ArrowRight, Users, Award } from "lucide-react";

export function TradingSystemDetails() {
  const features = [
    {
      title: "Automated Trading",
      description: "AI pulls exactly 1% of your account funds per trade",
      icon: Zap,
      details: "Precision-controlled position sizing for optimal risk management"
    },
    {
      title: "60-Second Execution",
      description: "Trades completed within 60 seconds",
      icon: Clock,
      details: "Lightning-fast order execution with automatic profit distribution"
    },
    {
      title: "Guaranteed 60% ROI",
      description: "Minimum 60% return on trading signals",
      icon: Percent,
      details: "Industry-leading returns backed by 99.6% prediction accuracy"
    },
    {
      title: "Daily Trading Codes",
      description: "Two fixed codes per day, valid for 10 minutes each",
      icon: DollarSign,
      details: "Scheduled releases across multiple time zones for global access"
    }
  ];

  const incomeStreams = [
    {
      stream: "Trading Profits",
      description: "60% minimum ROI per successful trade",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      stream: "Referral Commissions",
      description: "Earnings from members you refer to the platform",
      icon: Users,
      color: "text-blue-400"
    },
    {
      stream: "Team Bonuses",
      description: "Incentives for building and managing your team",
      icon: Award,
      color: "text-purple-400"
    },
    {
      stream: "Dividends",
      description: "Passive income distributions from platform growth",
      icon: DollarSign,
      color: "text-yellow-400"
    }
  ];

  const withdrawalInfo = [
    {
      type: "Standard Withdrawal",
      fee: "12%",
      condition: "After 60 days",
      description: "DSJEX mandated platform fee"
    },
    {
      type: "Early Withdrawal",
      fee: "32%",
      condition: "Before 60 days",
      description: "20% early withdrawal + 12% platform fee"
    },
    {
      type: "Access",
      fee: "Anytime",
      condition: "No restrictions",
      description: "Funds accessible 24/7 without lock-up"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20 bg-[#0a0e27]/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">
            <Zap className="h-3 w-3 mr-1" />
            Trading System
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Advanced AI-Powered <span className="text-yellow-500">Trading Infrastructure</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Automated algorithms on DSJ Exchange with 99.6% prediction accuracy
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
            <h3 className="text-2xl font-bold text-white mb-2">Capital Growth Timeline</h3>
            <p className="text-gray-300">Consistent participation with daily trading signals</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">$500</div>
              <div className="text-gray-400">Starting Capital</div>
            </div>
            <ArrowRight className="h-8 w-8 text-yellow-500 rotate-90 md:rotate-0" />
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">$1,000</div>
              <div className="text-gray-400">After 60 Days</div>
            </div>
            <div className="text-sm text-gray-400 md:ml-6 text-center md:text-left">
              <div className="font-semibold text-green-400 mb-1">100% Growth</div>
              <div>Approximately doubles<br />in two months</div>
            </div>
          </div>
        </GlassCardHighlight>

        {/* Income Streams */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Multiple Income Streams</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {incomeStreams.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard key={index} className="p-6 text-center">
                  <Icon className={`h-10 w-10 ${item.color} mx-auto mb-3`} />
                  <h4 className="font-bold text-white mb-2">{item.stream}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Withdrawal Information */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Withdrawal Structure</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {withdrawalInfo.map((info, index) => (
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
            * Fees are standardized by DSJEX exchange. Early withdrawal fee encourages long-term growth strategy.
          </p>
        </div>
      </div>
    </section>
  );
}
