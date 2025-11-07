"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import { componentTranslations } from "@/lib/component-translations";

export function FAQSection() {
  const { language } = useLanguage();
  const t = componentTranslations[language].faq;

  return (
    <section className="container mx-auto px-4 py-20 bg-[#0a0e27]/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">{t.badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {t.questions.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-yellow-500/20 rounded-lg px-6 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]"
            >
              <AccordionTrigger className="text-left text-white hover:text-yellow-500 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
