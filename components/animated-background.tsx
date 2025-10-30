"use client";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-amber-600/15 rounded-full blur-[100px] animate-float-medium" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[140px] animate-float-fast" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #eab308 1px, transparent 1px),
            linear-gradient(to bottom, #eab308 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0a0e27]/50 to-[#0a0e27]" />
    </div>
  );
}
