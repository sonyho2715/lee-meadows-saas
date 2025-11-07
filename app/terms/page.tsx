"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { legalTranslations } from "@/lib/legal-translations";
import { useEffect, useState } from "react";

export default function TermsPage() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const t = legalTranslations[language].terms;

  // Update document title
  useEffect(() => {
    document.title = t.metadata.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t.metadata.description);
    }
  }, [t.metadata.title, t.metadata.description]);

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

        {/* Important Notice */}
        <Card className="border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-900/20 to-amber-950/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-yellow-400">
              <AlertCircle className="h-6 w-6" />
              {t.importantNotice.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 space-y-3">
            <p className="font-semibold">
              {t.importantNotice.subtitle}
            </p>
            <p>
              {t.importantNotice.content}
            </p>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-8">
          {t.sections.map((section: any, index: number) => (
            <Card key={index} className="border-yellow-500/20 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  {index === 0 && <FileText className="h-5 w-5 text-yellow-500" />}
                  {index === 7 && <Shield className="h-5 w-5 text-yellow-500" />}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                {section.content.map((item: any, itemIndex: number) => {
                  if (item.type === "paragraph") {
                    return (
                      <p key={itemIndex} className={item.bold ? "font-semibold text-white" : ""}>
                        {item.text}
                        {item.link && (
                          <>
                            {" "}
                            <Link href={item.link.href} className="text-yellow-500 hover:underline">
                              {item.link.text}
                            </Link>
                            {item.after}
                          </>
                        )}
                      </p>
                    );
                  }

                  if (item.type === "subtitle") {
                    return (
                      <h3 key={itemIndex} className="font-semibold text-white mt-4">
                        {item.text}
                      </h3>
                    );
                  }

                  if (item.type === "list") {
                    return (
                      <ul key={itemIndex} className="list-disc list-inside space-y-2 pl-4">
                        {item.items.map((listItem: string, listItemIndex: number) => (
                          <li key={listItemIndex}>{listItem}</li>
                        ))}
                      </ul>
                    );
                  }

                  if (item.type === "contact") {
                    return (
                      <div key={itemIndex} className="space-y-2 mt-4">
                        <p className="font-semibold text-white">{item.company}</p>
                        <p>Email: <span className="text-yellow-500">{item.email}</span></p>
                        <p>Representative: {item.representative}</p>
                      </div>
                    );
                  }

                  return null;
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Acceptance Acknowledgment */}
        <Card className="border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-900/20 to-amber-950/20 mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-3">{t.acknowledgment.title}</h3>
            <ul className="text-gray-200 space-y-2 text-left max-w-2xl mx-auto">
              {t.acknowledgment.items.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Bottom Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/disclaimer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-medium transition-all"
          >
            {t.bottomNav.viewDisclaimer}
          </Link>
          <Link
            href="/privacy"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 font-medium transition-all"
          >
            {t.bottomNav.viewPrivacy}
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
