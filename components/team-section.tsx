import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/glass-card";
import { Users, Award, TrendingUp, Globe } from "lucide-react";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Lee Meadows",
      role: "7-Figure Entrepreneur & AI Trading Pioneer",
      focus: "Empowering Others Through AI Trading Signals",
      education: [
        "Proven 7-Figure Success in Multiple Ventures",
        "Early Adopter of AI Trading Technology"
      ],
      experience: [
        "Achieved 7-figure success in previous businesses",
        "Discovered revolutionary AI trading signal strategy",
        "Partnered with leading AI trading algorithm developers",
        "Dedicated to helping others achieve financial freedom"
      ],
      achievements: [
        "Built multiple successful 7-figure businesses",
        "Leverages AI system with 99.6% signal accuracy",
        "Helping 10,000+ traders profit daily",
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
            Meet <span className="text-yellow-500">Lee Meadows</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            7-Figure entrepreneur sharing revolutionary AI trading strategy. Take a short break each day to make more money.
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
          <h3 className="text-xl font-bold text-white mb-4">From Success to Significance</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            After achieving 7-figure success in multiple business ventures, Lee Meadows discovered a game-changing
            AI trading signal strategy. Now, she's dedicated to helping others achieve the same financial freedom.
            The AI system monitors markets 24/7, delivering 99.6% accurate signals. All you need is a few minutes
            each day to follow the signals and watch your wealth grow. Lee proves that with the right strategy,
            anyone can transform their financial future.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
