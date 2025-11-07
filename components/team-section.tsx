"use client";

import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/glass-card";
import { Users, Award, TrendingUp, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

export function TeamSection() {
  const { language } = useLanguage();
  const t = componentTranslations[language].team;
  const statIconMap: Record<number, any> = {
    0: Globe,
    1: Users,
    2: Award,
    3: TrendingUp
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">
            <Users className="h-3 w-3 mr-1" />
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t.title} <span className="text-yellow-500">{t.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {t.stats.map((stat, index) => {
            const Icon = statIconMap[index];
            return (
              <GlassCard key={index} className="text-center p-6" hover={false}>
                <Icon className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </GlassCard>
            );
          })}
        </div>

        {/* TradePulse AI Profile */}
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shrink-0">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{t.profile.name}</h3>
                <p className="text-yellow-500 font-medium">{t.profile.role}</p>
                <p className="text-gray-400 text-sm mt-1">
                  {t.profile.focus}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <Award className="h-4 w-4 text-yellow-500" />
                Education
              </h4>
              <ul className="space-y-1">
                {t.profile.education.map((edu, i) => (
                  <li key={i} className="text-gray-400 text-sm pl-6">• {edu}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-yellow-500" />
                Experience & Expertise
              </h4>
              <ul className="space-y-1">
                {t.profile.experience.map((exp, i) => (
                  <li key={i} className="text-gray-400 text-sm pl-6">• {exp}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements</h4>
              <ul className="space-y-1">
                {t.profile.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-400 text-sm pl-6">• {achievement}</li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </div>

        {/* Success Story */}
        <GlassCard className="mt-8 p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">{t.advantage.title}</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            {t.advantage.description}
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
