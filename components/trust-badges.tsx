import { Shield, Award, CheckCircle2, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "SEC Licensed",
      description: "US Securities & Exchange Commission"
    },
    {
      icon: Award,
      title: "ASIC Registered",
      description: "Australian Securities & Investments Commission"
    },
    {
      icon: CheckCircle2,
      title: "MAS Approved",
      description: "Monetary Authority of Singapore"
    },
    {
      icon: Globe,
      title: "30+ Countries",
      description: "Internationally Licensed & Regulated"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Trusted & Regulated Worldwide</h3>
          <p className="text-gray-400">Licensed by major financial authorities</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Card
                key={index}
                className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] hover:border-yellow-500/40 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-500/10 mb-3">
                    <Icon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{badge.title}</h4>
                  <p className="text-xs text-gray-400">{badge.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
