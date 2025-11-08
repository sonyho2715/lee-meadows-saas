"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";

export function DynamicMetadata() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update document title based on language
    const title = language === "vi"
      ? "TradePulse AI | Tín Hiệu AI Trading | Giao Dịch Crypto Thuật Toán"
      : "TradePulse AI | AI Trading Signals | Cryptocurrency Algorithmic Trading";

    document.title = title;

    // Update meta description
    const description = language === "vi"
      ? "Join TradePulse AI nhận automated crypto trading signals. Machine learning algorithms với 99.6% accuracy. Chỉ cần $300 USDT để bắt đầu. Licensed SEC & regulated."
      : "Join TradePulse AI for automated cryptocurrency trading signals. Advanced machine learning algorithms with 99.6% accuracy. Minimum $300 USDT. SEC licensed and regulated.";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      // Create meta description if it doesn't exist
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update og:title for social sharing
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', title);
      document.head.appendChild(ogTitle);
    }

    // Update og:description for social sharing
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    } else {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', description);
      document.head.appendChild(ogDescription);
    }
  }, [language]);

  return null;
}
