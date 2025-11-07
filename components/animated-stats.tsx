"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Target, Award, Zap } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  color: string;
  gradient: string;
}

export function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      icon: Target,
      value: 99.6,
      suffix: "%",
      label: "AI Signal Accuracy",
      color: "text-yellow-500",
      gradient: "from-yellow-500 to-amber-600"
    },
    {
      icon: Users,
      value: 10000,
      suffix: "+",
      label: "Active Traders",
      color: "text-blue-500",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: DollarSign,
      value: 30,
      suffix: "M",
      prefix: "$",
      label: "Total Profits Generated",
      color: "text-green-500",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      value: 2.5,
      suffix: "%",
      label: "Average Daily Returns",
      color: "text-purple-500",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Award,
      value: 365,
      suffix: " Days",
      label: "Trading Days Per Year",
      color: "text-orange-500",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Zap,
      value: 2,
      suffix: " Sec",
      label: "Average Signal Speed",
      color: "text-cyan-500",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">
            Performance Metrics
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Proven Results That <span className="text-yellow-500">Speak for Themselves</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real-time statistics from TradePulse AI AI Trading platform showing consistent performance and growing community
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm max-w-3xl mx-auto">
            All statistics are updated in real-time and based on actual trading performance across our platform.
            Past performance does not guarantee future results. Trading cryptocurrencies involves risk.
          </p>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isVisible, delay }: { stat: StatItem; isVisible: boolean; delay: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      countRef.current += increment;
      if (countRef.current >= stat.value) {
        countRef.current = stat.value;
        clearInterval(timer);
      }
      setCount(countRef.current);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  const Icon = stat.icon;

  const formatNumber = (num: number): string => {
    if (stat.suffix === "M") {
      return num.toFixed(0);
    } else if (stat.suffix === "%") {
      return num.toFixed(1);
    } else if (stat.suffix === " Sec") {
      return num.toFixed(1);
    } else {
      return Math.floor(num).toLocaleString();
    }
  };

  return (
    <Card
      className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] hover:border-yellow-500/40 transition-all overflow-hidden group relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s ease-out ${delay}ms`
      }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

      <div className="relative p-6 md:p-8">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${stat.gradient} mb-4`}>
          <Icon className="h-7 w-7 text-white" />
        </div>

        {/* Number */}
        <div className="mb-2">
          <span className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
            {stat.prefix}
            {formatNumber(count)}
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <p className="text-gray-300 font-medium text-sm md:text-base">
          {stat.label}
        </p>

        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Card>
  );
}
