"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

export function CookieConsent() {
  const { language } = useLanguage();
  const t = componentTranslations[language].cookieConsent;
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="container mx-auto max-w-6xl pointer-events-auto">
        <Card className="border-2 border-blue-500/30 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e1a] backdrop-blur-lg shadow-2xl">
          <CardContent className="p-6">
            <button
              onClick={declineCookies}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Cookie className="h-6 w-6 text-blue-400" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold text-white">{t.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t.description}{" "}
                  <Link href="/privacy" className="text-blue-400 hover:underline">
                    {t.privacyPolicy}
                  </Link>.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                <Button
                  onClick={declineCookies}
                  variant="outline"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
                >
                  {t.decline}
                </Button>
                <Button
                  onClick={acceptCookies}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium transition-all"
                >
                  {t.acceptAll}
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 pt-4 border-t border-blue-500/20">
              <p className="text-xs text-gray-400">
                {t.additionalInfo}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
