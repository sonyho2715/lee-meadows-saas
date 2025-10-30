"use client";

import { useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export function RippleButton({
  children,
  onClick,
  className,
  variant = "default",
  size = "default"
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={cn("relative overflow-hidden", className)}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            transform: "translate(-50%, -50%)",
            animation: "ripple 600ms ease-out",
          }}
        />
      ))}
      {children}
    </Button>
  );
}
