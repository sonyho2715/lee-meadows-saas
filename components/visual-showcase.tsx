import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function VisualShowcase() {
  const showcaseItems = [
    {
      title: "BG Wealth Planning Chart",
      description: "Five-stage wealth management system with detailed profit projections",
      category: "Investment Strategy"
    },
    {
      title: "Trading Signals Schedule",
      description: "Daily signal times (EST) and usage guidelines for all members",
      category: "Trading Operations"
    },
    {
      title: "Referral Rewards System",
      description: "Complete breakdown of referral bonuses and dynamic signal rewards",
      category: "Rewards Program"
    },
    {
      title: "Regulatory Licenses",
      description: "SEC, ASIC, and international certifications displayed",
      category: "Compliance"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20 bg-[#0a0e27]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">
            Platform Overview
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Professional Investment Infrastructure
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive tools, detailed plans, and transparent operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseItems.map((item, index) => (
            <Card
              key={index}
              className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] hover:border-yellow-500/40 transition-all overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-yellow-500/10 to-amber-600/10 rounded-lg mb-4 flex items-center justify-center border border-yellow-500/20 group-hover:border-yellow-500/40 transition-colors">
                  <div className="text-center space-y-2">
                    <div className="text-6xl">📊</div>
                    <p className="text-xs text-gray-400">Visual Material Available</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-500 text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-2xl">📸</span>
            Image Assets Available
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                BG Wealth Planning Chart (5 stages breakdown)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                Daily Trading Signals Schedule
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                Referral Rewards Table
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                Team Level Bonuses Structure
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                SEC License Certificate
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                ASIC Registration Certificate
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                DSJ Exchange Authorization Letter
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                BG Wealth Sharing Stock Certificate
              </li>
            </ul>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            💡 To add images: Place image files in <code className="px-2 py-1 bg-black/30 rounded">/public/images/</code> and update the Image components
          </p>
        </div>
      </div>
    </section>
  );
}
