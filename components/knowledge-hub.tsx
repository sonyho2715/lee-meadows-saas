"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Video, FileText, Lightbulb, TrendingUp, Shield, Clock, ArrowRight } from "lucide-react";

export function KnowledgeHub() {
  const articles = [
    {
      category: "Getting Started",
      icon: BookOpen,
      color: "text-blue-500",
      gradient: "from-blue-500 to-cyan-600",
      articles: [
        {
          title: "Complete Beginner's Guide to AI Trading",
          description: "Everything you need to know before starting your trading journey",
          readTime: "8 min read",
          tag: "Essential"
        },
        {
          title: "How to Set Up Your Trading Account",
          description: "Step-by-step walkthrough of account creation and verification",
          readTime: "5 min read",
          tag: "Tutorial"
        },
        {
          title: "Understanding Trading Signals",
          description: "Learn how to read and execute AI-generated trading signals",
          readTime: "6 min read",
          tag: "Essential"
        }
      ]
    },
    {
      category: "Trading Strategies",
      icon: TrendingUp,
      color: "text-yellow-500",
      gradient: "from-yellow-500 to-amber-600",
      articles: [
        {
          title: "Maximizing Returns with AI Signals",
          description: "Best practices for executing signals to optimize profit potential",
          readTime: "10 min read",
          tag: "Advanced"
        },
        {
          title: "Risk Management Fundamentals",
          description: "How to protect your capital while maximizing gains",
          readTime: "7 min read",
          tag: "Essential"
        },
        {
          title: "Compound Growth Strategies",
          description: "Leveraging compound interest for exponential wealth growth",
          readTime: "9 min read",
          tag: "Strategy"
        }
      ]
    },
    {
      category: "Market Insights",
      icon: Lightbulb,
      color: "text-purple-500",
      gradient: "from-purple-500 to-pink-600",
      articles: [
        {
          title: "Cryptocurrency Market Analysis 2025",
          description: "Current trends and future predictions from AI models",
          readTime: "12 min read",
          tag: "Analysis"
        },
        {
          title: "Why AI Outperforms Manual Trading",
          description: "Data-driven comparison of AI vs human trading performance",
          readTime: "8 min read",
          tag: "Research"
        },
        {
          title: "Understanding Market Volatility",
          description: "How AI systems adapt to changing market conditions",
          readTime: "6 min read",
          tag: "Education"
        }
      ]
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      color: "text-green-500",
      gradient: "from-green-500 to-emerald-600",
      articles: [
        {
          title: "Platform Security Measures",
          description: "How we protect your funds and personal information",
          readTime: "5 min read",
          tag: "Security"
        },
        {
          title: "Regulatory Compliance Guide",
          description: "Understanding SEC, ASIC, and international regulations",
          readTime: "7 min read",
          tag: "Legal"
        },
        {
          title: "Withdrawal Process & Best Practices",
          description: "How to safely withdraw your profits",
          readTime: "4 min read",
          tag: "Guide"
        }
      ]
    }
  ];

  const videos = [
    {
      title: "TradePulse AI: The Future of Algorithmic Trading",
      duration: "12:45",
      views: "15.2K",
      thumbnail: "bg-gradient-to-br from-yellow-500/20 to-amber-600/20"
    },
    {
      title: "How to Execute Your First Trade",
      duration: "8:20",
      views: "28.5K",
      thumbnail: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20"
    },
    {
      title: "Understanding the Dashboard",
      duration: "6:15",
      views: "12.8K",
      thumbnail: "bg-gradient-to-br from-purple-500/20 to-pink-600/20"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20 bg-[#0a0e27]/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">
            <BookOpen className="h-3 w-3 mr-1" />
            Knowledge Hub
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Learn, Grow, and <span className="text-yellow-500">Succeed</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive guides, tutorials, and insights to help you master AI-powered trading
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Video className="h-6 w-6 text-yellow-500" />
            Video Tutorials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card
                key={index}
                className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] hover:border-yellow-500/40 transition-all cursor-pointer group"
              >
                <CardContent className="p-0">
                  <div className={`aspect-video ${video.thumbnail} flex items-center justify-center relative overflow-hidden`}>
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
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="space-y-8">
          {articles.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex}>
                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${category.color}`}>
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
                          <Badge className={`bg-gradient-to-r ${category.gradient} text-white border-0`}>
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
                          Read Article
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
          <Card className="border-yellow-500/30 bg-gradient-to-br from-yellow-900/20 to-[#0a0e27] p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Trading Glossary</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Complete dictionary of trading terms and AI concepts explained simply
                </p>
                <a href="#" className="text-yellow-500 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Browse Terms <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>

          <Card className="border-yellow-500/30 bg-gradient-to-br from-yellow-900/20 to-[#0a0e27] p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">FAQ & Support</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Quick answers to common questions and 24/7 support resources
                </p>
                <a href="#" className="text-yellow-500 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Get Help <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
