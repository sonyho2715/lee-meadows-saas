import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function VisualShowcase() {
  const showcaseItems = [
    {
      title: "BG Wealth Planning Chart",
      description: "Five-stage wealth management system with detailed profit projections",
      category: "Investment Strategy",
      image: "/images/investment/wealth-planning-chart.png",
      alt: "BG Team Wealth Planning Chart showing 5 investment stages from $500 to $5000 USDT"
    },
    {
      title: "Trading Signals Schedule",
      description: "Daily signal times (EST) and usage guidelines for all members",
      category: "Trading Operations",
      image: "/images/investment/trading-signals-guidelines.png",
      alt: "BG Wealth Sharing Daily Trading Signals Usage Guidelines with fixed and additional signal times"
    },
    {
      title: "Referral Rewards System",
      description: "Complete breakdown of referral bonuses and dynamic signal rewards",
      category: "Rewards Program",
      image: "/images/investment/referral-rewards-2025.png",
      alt: "BG Wealth Sharing 2025 Referral Rewards table showing deposit amounts and rewards"
    },
    {
      title: "Regulatory Licenses",
      description: "SEC, ASIC, and international certifications displayed",
      category: "Compliance",
      image: "/images/certificates/sec-license-bg.jpg",
      alt: "U.S. Securities and Exchange Commission license for BG Wealth Sharing LTD"
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
                <div className="aspect-video bg-gradient-to-br from-yellow-500/10 to-amber-600/10 rounded-lg mb-4 overflow-hidden border border-yellow-500/20 group-hover:border-yellow-500/40 transition-colors relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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

        {/* Additional Documentation Gallery */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative aspect-square rounded-lg overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-colors group">
            <Image
              src="/images/investment/referral-rewards-mechanism.png"
              alt="Referral reward signal mechanism details"
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-colors group">
            <Image
              src="/images/investment/team-bonus-structure.png"
              alt="Team bonus structure LV1 through LV7"
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-colors group">
            <Image
              src="/images/certificates/asic-registration.jpg"
              alt="ASIC Australian registration certificate"
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-colors group">
            <Image
              src="/images/certificates/five-advantages.jpg"
              alt="Five advantages of BG Wealth Sharing investment"
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
