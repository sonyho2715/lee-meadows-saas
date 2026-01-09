"use client";

import { useState, useEffect } from "react";
import { Shield, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

export function AgeVerification() {
  const { language } = useLanguage();
  const t = componentTranslations[language].ageVerification;
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Check if user has already verified their age
    const verified = localStorage.getItem("age_verified");
    if (verified === "true") {
      setIsVerified(true);
    } else {
      // Show modal after 1 second
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("age_verified", "true");
    setIsVerified(true);
    setIsOpen(false);
  };

  const handleDecline = () => {
    // Redirect to a warning page or close the site
    window.location.href = "https://www.google.com";
  };

  if (isVerified || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Modal */}
      <div className="relative max-w-md w-full bg-gradient-to-br from-[#1a1f3a] to-[#0a0e1a] rounded-2xl border border-blue-500/30 shadow-2xl shadow-blue-500/20 overflow-hidden">
        {/* Header with icon */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 border-b border-blue-500/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Shield className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">{t.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-sm text-gray-300">
              <p className="font-semibold text-amber-500 mb-1">{t.importantNotice}</p>
              <p>{t.noticeText}</p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-400">
            <p>{t.certifyText}</p>
            <ul className="space-y-2">
              {t.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleConfirm}
              className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-6"
            >
              {t.confirm}
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-red-500/30 text-red-500 hover:bg-red-500/10 py-6"
            >
              {t.decline}
            </Button>
          </div>

          <p className="text-xs text-center text-gray-500 pt-2">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
