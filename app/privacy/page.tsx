"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, UserCheck } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { legalTranslations } from "@/lib/legal-translations";
import { useEffect, useState } from "react";

export default function PrivacyPage() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const t = legalTranslations[language].privacy;

  // Update document title
  useEffect(() => {
    document.title = t.metadata.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t.metadata.description);
    }
  }, [t.metadata.title, t.metadata.description]);

  const getSectionIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Database className="h-5 w-5 text-yellow-500" />;
      case 1:
        return <UserCheck className="h-5 w-5 text-yellow-500" />;
      case 3:
        return <Lock className="h-5 w-5 text-yellow-500" />;
      case 13:
        return <Eye className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      {/* Header */}
      <header className="border-b border-yellow-500/20 bg-[#0a0e27]/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors">
            {t.header.backToHome}
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-yellow-500/30 text-yellow-500">
            {t.hero.badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.hero.title}
          </h1>
          <p className="text-gray-300 text-lg">
            {t.hero.lastUpdated}
          </p>
        </div>

        {/* Privacy Commitment */}
        <Card className="border-2 border-blue-500/50 bg-gradient-to-br from-blue-900/20 to-blue-950/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-blue-400">
              <Shield className="h-6 w-6" />
              {t.commitment.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 space-y-3">
            {t.commitment.content.map((paragraph, index) => (
              <p key={index} className={index === 1 ? "font-semibold" : ""}>
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {t.sections.map((section: any, index: number) => (
            <Card key={index} className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  {getSectionIcon(index)}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                {/* Main text */}
                {section.text && <p>{section.text}</p>}
                {section.subtext && <p>{section.subtext}</p>}

                {/* Simple list (for sections like International Data Transfers) */}
                {section.list && (
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    {section.list.map((item: string, listIndex: number) => (
                      <li key={listIndex}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Content array (for sections like Children's Privacy) */}
                {section.content && (
                  <div className="space-y-3">
                    {section.content.map((paragraph: string, contentIndex: number) => (
                      <p key={contentIndex}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {/* Subsections */}
                {section.subsections && section.subsections.map((subsection: any, subIndex: number) => (
                  <div key={subIndex}>
                    <h3 className="font-semibold text-white mt-4">{subsection.subtitle}</h3>
                    {subsection.text && <p>{subsection.text}</p>}

                    {/* Subsection list */}
                    {subsection.list && (
                      <ul className="list-disc list-inside space-y-2 pl-4">
                        {subsection.list.map((item: string, listIndex: number) => (
                          <li key={listIndex}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {/* Cookie items (special structure for section 7) */}
                    {subsection.items && (
                      <div className="space-y-3">
                        {subsection.items.map((item: any, itemIndex: number) => (
                          <div key={itemIndex}>
                            <p className="font-semibold text-white">{item.name}</p>
                            <p className="text-sm">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Contact info (for section 14) */}
                {section.contact && (
                  <div className="space-y-3 mt-4 p-4 bg-[#0a0e27]/50 rounded-lg">
                    <p className="font-semibold text-white">{section.contact.company}</p>
                    <p><strong>{language === "en" ? "General Inquiries" : "Yêu Cầu Chung"}:</strong> <span className="text-yellow-500">{section.contact.emails.general}</span></p>
                    <p><strong>{language === "en" ? "Privacy Matters" : "Vấn Đề Quyền Riêng Tư"}:</strong> <span className="text-yellow-500">{section.contact.emails.privacy}</span></p>
                    <p><strong>{language === "en" ? "Data Protection Officer" : "Cán Bộ Bảo Vệ Dữ Liệu"}:</strong> <span className="text-yellow-500">{section.contact.emails.dpo}</span></p>
                    <p><strong>{language === "en" ? "Representative" : "Đại Diện"}:</strong> {section.contact.representative}</p>
                    <p className="text-sm italic mt-4">{section.contact.responseTime}</p>
                  </div>
                )}

                {/* Footer text */}
                {section.footer && (
                  <p className={section.footer.includes("IMPORTANT") || section.footer.includes("continued use") ? "font-semibold text-white mt-4" : "mt-4"}>
                    {section.footer}
                  </p>
                )}

                {/* Disclaimer text */}
                {section.disclaimer && (
                  <p className="font-semibold text-white mt-4">
                    {section.disclaimer}
                  </p>
                )}

                {/* Contact text */}
                {section.contact && typeof section.contact === "string" && (
                  <p className="font-semibold text-white mt-4">
                    {section.contact}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/disclaimer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-medium transition-all"
          >
            {t.bottomNav.viewDisclaimer}
          </Link>
          <Link
            href="/terms"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-medium transition-all"
          >
            {t.bottomNav.viewTerms}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-medium transition-all"
          >
            {t.bottomNav.returnHome}
          </Link>
        </div>
      </main>
    </div>
  );
}
