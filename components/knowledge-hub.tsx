"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Video, FileText, Lightbulb, TrendingUp, Shield, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

export function KnowledgeHub() {
  const { language } = useLanguage();
  const t = componentTranslations[language].knowledgeHub;

  const categoryIconMap: Record<number, any> = {
    0: BookOpen,
    1: TrendingUp,
    2: Lightbulb,
    3: Shield
  };

  const categoryColorMap: Record<number, string> = {
    0: "text-blue-500",
    1: "text-yellow-500",
    2: "text-purple-500",
    3: "text-green-500"
  };

  const categoryGradientMap: Record<number, string> = {
    0: "from-blue-500 to-cyan-600",
    1: "from-yellow-500 to-amber-600",
    2: "from-purple-500 to-pink-600",
    3: "from-green-500 to-emerald-600"
  };

  return (
    <section className="container mx-auto px-4 py-20 bg-[#0a0e27]/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">
            <BookOpen className="h-3 w-3 mr-1" />
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t.title} <span className="text-yellow-500">{t.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Video className="h-6 w-6 text-yellow-500" />
            {t.videoTutorials}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.videos.map((video, index) => {
              const thumbnails = [
                "bg-gradient-to-br from-yellow-500/20 to-amber-600/20",
                "bg-gradient-to-br from-blue-500/20 to-cyan-600/20",
                "bg-gradient-to-br from-purple-500/20 to-pink-600/20"
              ];
              return (
                <Card
                  key={index}
                  className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] hover:border-yellow-500/40 transition-all cursor-pointer group"
                >
                  <CardContent className="p-0">
                    <div className={`aspect-video ${thumbnails[index]} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      <div className="relative w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Video className="h-8 w-8 text-black ml-1" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                        {video.title}
                      </h4>
                      <p className="text-xs text-gray-400">{video.views} views</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="space-y-8">
          {t.categories.map((category, categoryIndex) => {
            const Icon = categoryIconMap[categoryIndex];
            return (
              <div key={categoryIndex}>
                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${categoryColorMap[categoryIndex]}`}>
                  <Icon className="h-6 w-6" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.articles.map((article, articleIndex) => (
                    <Card
                      key={articleIndex}
                      className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] hover:border-yellow-500/40 transition-all cursor-pointer group"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge className={`bg-gradient-to-r ${categoryGradientMap[categoryIndex]} text-white border-0`}>
                            {article.tag}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-base text-white group-hover:text-yellow-500 transition-colors">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-400 mb-4">
                          {article.description}
                        </p>
                        <div className="flex items-center gap-2 text-yellow-500 text-sm font-medium group-hover:gap-3 transition-all">
                          {t.readArticle}
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.quickLinks.map((link, index) => {
            const icons = [FileText, Lightbulb];
            const Icon = icons[index];
            return (
              <Card key={index} className="border-yellow-500/30 bg-gradient-to-br from-yellow-900/20 to-[#0a0e27] p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{link.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {link.description}
                    </p>
                    <a href="#" className="text-yellow-500 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                      {link.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
