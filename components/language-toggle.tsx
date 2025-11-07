"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const [language, setLanguage] = useState<"en" | "vi">("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as "en" | "vi";
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "vi" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLang }));
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-gray-300 hover:text-yellow-500 gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="font-semibold">{language === "en" ? "EN" : "VI"}</span>
    </Button>
  );
}
