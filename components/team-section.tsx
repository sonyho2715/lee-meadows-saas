import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/glass-card";
import { Users, Award, TrendingUp, Globe } from "lucide-react";

export function TeamSection() {
  const teamMembers = [
    {
      name: "TradePulse AI",
      role: "AI-Powered Trading Intelligence Platform",
      focus: "Empowering Traders Through Advanced AI Algorithms",
      education: [
        "Built on Advanced Machine Learning Technology",
        "Developed by Leading AI & Trading Experts"
      ],
      experience: [
        "Powered by state-of-the-art AI trading algorithms",
        "Revolutionary AI signal generation technology",
        "Partnership with top quantitative trading firms",
        "Dedicated to democratizing advanced trading intelligence"
      ],
      achievements: [
        "99.6% AI signal accuracy rate",
        "Serving 10,000+ active traders globally",
        "Processing millions of data points per second",
        "Simplifying wealth creation - just minutes per day"
      ],
      icon: Award,
      gradient: "from-yellow-500 to-amber-600"
    }
  ];

  const stats = [
    { number: "40+", label: "Countries", icon: Globe },
    { number: "300+", label: "Investment Teams", icon: Users },
    { number: "200", label: "Market Analysts", icon: Award },
    { number: "99.6%", label: "Prediction Accuracy", icon: TrendingUp }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">
            <Users className="h-3 w-3 mr-1" />
            Leadership Team
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Powered by <span className="text-yellow-500">TradePulse AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Revolutionary AI trading platform delivering precision signals. Take a short break each day to make more money.
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <GlassCard key={index} className="text-center p-6" hover={false}>
                <Icon className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </GlassCard>
            );
          })}
        </div>

        {/* Lee Meadows Profile */}
        <div className="max-w-4xl mx-auto">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <GlassCard key={index} className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shrink-0`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-yellow-500 font-medium">{member.role}</p>
                    {member.focus && (
                      <p className="text-gray-400 text-sm mt-1">
                        {member.focus}
                      </p>
                    )}
                  </div>
                </div>

                {member.education && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-500" />
                      Education
                    </h4>
                    <ul className="space-y-1">
                      {member.education.map((edu, i) => (
                        <li key={i} className="text-gray-400 text-sm pl-6">• {edu}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.experience && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-yellow-500" />
                      Experience & Expertise
                    </h4>
                    <ul className="space-y-1">
                      {member.experience.map((exp, i) => (
                        <li key={i} className="text-gray-400 text-sm pl-6">• {exp}</li>
                      ))}
                    </ul>
                  </div>
                )}


                {member.achievements && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm pl-6">• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>

        {/* Success Story */}
        <GlassCard className="mt-8 p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">The TradePulse AI Advantage</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            TradePulse AI represents the cutting edge of algorithmic trading technology. Our advanced AI system
            monitors global cryptocurrency markets 24/7, processing millions of data points per second to deliver
            99.6% accurate trading signals. All you need is a few minutes each day to follow the signals and watch
            your wealth grow. TradePulse AI proves that with the right AI-powered strategy, anyone can transform
            their financial future through intelligent, automated trading.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
