"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FunnelFAQ() {
  const faqs = [
    {
      question: "What happens on the strategy call?",
      answer: "It's a friendly 30-minute conversation where we learn about your financial goals, show you exactly how our copy-paste system works, and answer any questions you have. There's no pressure to sign up. It's purely educational."
    },
    {
      question: "Do I need any special skills or experience?",
      answer: "No experience required. If you can copy text and click a button, you can do this. Our system is designed for complete beginners. We've had people from all backgrounds succeed, including retirees and busy parents with no tech background."
    },
    {
      question: "How much money do I need to start?",
      answer: "You can start with as little as $300. We recommend starting small to get comfortable with the system, then scaling up as you see results. Many of our most successful members started with modest amounts."
    },
    {
      question: "Is my money safe?",
      answer: "Your funds stay in your own accounts. We never have access to your money. Our system simply provides you with templates and instructions. You maintain full control of everything at all times."
    },
    {
      question: "What kind of results can I expect?",
      answer: "Results vary based on your effort, time commitment, and starting budget. During your strategy call, we can show you realistic expectations based on your situation. We believe in transparency, not hype."
    },
    {
      question: "How much time does this take?",
      answer: "Most members spend about 10 minutes per day. You check in, follow the simple steps, and go about your day. It's designed for busy people who don't have hours to spare."
    },
    {
      question: "What if I change my mind after signing up?",
      answer: "We offer a satisfaction guarantee. If you're not happy with the service within the first 30 days, we'll work with you to address any concerns. Our goal is long-term success, not quick sales."
    },
    {
      question: "Is the strategy call really free?",
      answer: "Yes, 100% free with no obligation. We believe in the value of our system enough that we're happy to spend 30 minutes showing you how it works. If it's not right for you, no hard feelings."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0d1229]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Got Questions? We've Got Answers
            </h2>
            <p className="text-gray-400">
              Everything you need to know before booking your call
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-white/5 rounded-lg px-6 bg-white/[0.01] data-[state=open]:border-blue-500/20"
              >
                <AccordionTrigger className="text-left text-white hover:text-blue-400 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom CTA */}
          <div className="text-center mt-10 pt-8 border-t border-white/5">
            <p className="text-gray-500 mb-4">
              Still have questions? Get them answered on your free strategy call.
            </p>
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Book Your Free Call →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
