import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
};

// Only apply Sentry config if DSN is configured
const isSentryConfigured = !!process.env.NEXT_PUBLIC_SENTRY_DSN &&
                           process.env.NEXT_PUBLIC_SENTRY_DSN !== 'https://your-sentry-dsn@sentry.io/your-project-id';

let exportedConfig = nextConfig;

if (isSentryConfigured) {
  const { withSentryConfig } = require("@sentry/nextjs");

  exportedConfig = withSentryConfig(nextConfig, {
    org: process.env.SENTRY_ORG || "your-org-slug",
    project: process.env.SENTRY_PROJECT || "lee-meadows-saas",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    reactComponentAnnotation: { enabled: true },
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  });
}

export default exportedConfig;
