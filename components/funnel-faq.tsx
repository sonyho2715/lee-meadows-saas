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
      answer: "It's a friendly 30-minute conversation where we learn about your financial goals, explain how our AI trading system works, show you real results, and answer any questions you have. There's no pressure to sign up. It's purely educational."
    },
    {
      question: "Do I need trading experience?",
      answer: "No experience required. Our AI handles all the complex analysis. You simply receive signals that tell you exactly what to do. If you can follow simple instructions, you can use our system."
    },
    {
      question: "How much money do I need to start?",
      answer: "You can start with as little as $300 USDT. We recommend starting small to get comfortable with the system, then scaling up as you see results. Many of our most successful traders started with modest amounts."
    },
    {
      question: "Is my money safe?",
      answer: "Your funds are held in your own trading account on SEC-regulated exchanges. We never have access to your money. Our AI simply provides signals. You execute the trades yourself, maintaining full control."
    },
    {
      question: "What kind of returns can I expect?",
      answer: "While we can't guarantee specific returns (no legitimate trading system can), our AI has a 99.6% signal accuracy rate. Individual results vary based on investment amount and market conditions. During your strategy call, we can show you realistic projections based on your situation."
    },
    {
      question: "How much time does this take?",
      answer: "Most traders spend about 10-15 minutes per day. Our AI sends signals at 1 PM and 7 PM EST. You check the signal, execute the trade, and go about your day. It's designed for busy professionals."
    },
    {
      question: "What if I change my mind after signing up?",
      answer: "We offer a satisfaction guarantee. If you're not happy with the service within the first 30 days, we'll work with you to address any concerns. Our goal is long-term partnerships, not quick sales."
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
                className="border border-white/5 rounded-lg px-6 bg-white/[0.01] data-[state=open]:border-yellow-500/20"
              >
                <AccordionTrigger className="text-left text-white hover:text-yellow-500 hover:no-underline py-5">
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
              className="text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
            >
              Book Your Free Call →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
