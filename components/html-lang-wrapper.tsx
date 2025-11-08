"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";

export function HtmlLangWrapper() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update the HTML lang attribute whenever language changes
    document.documentElement.lang = language;
  }, [language]);

  return null;
}
