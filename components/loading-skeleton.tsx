import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-shimmer rounded-md bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800",
        "bg-[length:1000px_100%]",
        className
      )}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-6 space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-32 w-full mt-4" />
    </div>
  );
}

export function StatsCardSkeleton() {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-6 text-center space-y-2">
      <Skeleton className="h-12 w-24 mx-auto" />
      <Skeleton className="h-4 w-32 mx-auto" />
    </div>
  );
}

export function CertificateSkeleton() {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] overflow-hidden">
      <Skeleton className="aspect-[3/4] w-full" />
    </div>
  );
}
