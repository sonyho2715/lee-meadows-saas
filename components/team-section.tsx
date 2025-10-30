import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/glass-card";
import { Users, Award, TrendingUp, Globe } from "lucide-react";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Professor Stephen Beard",
      role: "Founder & Chief Strategist",
      nationality: "British",
      born: "1985",
      education: [
        "Finance Degree - Oxford Brookes University",
        "PhD in Finance"
      ],
      experience: [
        "Former Cryptocurrency Exchange Gemini",
        "International Monetary Fund (IMF)",
        "Specialist in Short-term Trading",
        "Expert in Big Data Analytics"
      ],
      icon: Award,
      gradient: "from-yellow-500 to-amber-600"
    },
    {
      name: "Joseph Smith",
      role: "Chief Operating Officer - DSJEX",
      focus: "North American Expansion",
      achievements: [
        "Leading DSJEX operations across North America",
        "10,000+ Active Users under management",
        "Strategic partnerships and growth initiatives"
      ],
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-600"
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
            Meet the Experts Behind <span className="text-yellow-500">BG Wealth Sharing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Led by industry veterans with decades of combined experience in finance, cryptocurrency, and algorithmic trading
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

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8">
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
                    {member.nationality && (
                      <p className="text-gray-400 text-sm mt-1">
                        {member.nationality} • Born {member.born}
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

                {member.focus && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Focus Area</h4>
                    <p className="text-gray-400 text-sm">{member.focus}</p>
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

        {/* Supporting Team */}
        <GlassCard className="mt-8 p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Backed by 200 Professional Market Analysts</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our dedicated team of market analysts monitors cryptocurrency markets continuously, providing 24/7 coverage
            across all major exchanges. With a proven track record of 99.6% accuracy in trading predictions, our
            analytical team combines cutting-edge AI technology with decades of traditional finance expertise.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
