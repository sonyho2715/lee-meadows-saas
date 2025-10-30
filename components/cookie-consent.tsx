"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
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
        <Card className="border-2 border-yellow-500/30 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] backdrop-blur-lg shadow-2xl">
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
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <Cookie className="h-6 w-6 text-yellow-500" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold text-white">Cookie Notice</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze site traffic,
                  and provide personalized content. By clicking "Accept All", you consent to our use of cookies.
                  You can manage your preferences or learn more in our{" "}
                  <Link href="/privacy" className="text-yellow-500 hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                <Button
                  onClick={declineCookies}
                  variant="outline"
                  className="border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all"
                >
                  Decline
                </Button>
                <Button
                  onClick={acceptCookies}
                  className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-medium transition-all"
                >
                  Accept All
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 pt-4 border-t border-yellow-500/20">
              <p className="text-xs text-gray-400">
                Essential cookies are required for the website to function and cannot be disabled.
                Optional cookies help us improve your experience and can be managed in your browser settings.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
