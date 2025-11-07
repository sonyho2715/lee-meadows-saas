"use client";

import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";

export function useTranslation() {
  const [language, setLanguage] = useState<"en" | "vi">("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as "en" | "vi";
    if (saved) {
      setLanguage(saved);
    }

    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setLanguage(customEvent.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const t = translations[language];

  return { language, t };
}
