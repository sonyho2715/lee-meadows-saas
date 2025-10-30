import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        // Base glassmorphism styles
        "relative backdrop-blur-xl bg-white/5 border border-white/10",
        "rounded-2xl p-6",
        // Gradient overlay
        "before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-gradient-to-br before:from-white/10 before:to-transparent",
        "before:pointer-events-none",
        // Shadow
        "shadow-lg shadow-black/20",
        // Hover effect
        hover && "transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-yellow-500/10",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlassCardHighlight({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        // Enhanced glassmorphism with yellow accent
        "relative backdrop-blur-xl bg-gradient-to-br from-yellow-500/10 via-white/5 to-transparent",
        "border border-yellow-500/30",
        "rounded-2xl p-6",
        // Glow effect
        "shadow-xl shadow-yellow-500/20",
        // Animated gradient border
        "before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-gradient-to-br before:from-yellow-500/20 before:to-transparent",
        "before:pointer-events-none",
        // Hover effect
        "transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30",
        "hover:border-yellow-500/50",
        className
      )}
    >
      {children}
    </div>
  );
}
