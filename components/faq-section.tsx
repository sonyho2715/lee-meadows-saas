import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "How do I start investing with Lee Meadows AI Trading?",
    answer: "Getting started is simple: (1) Contact Lee Meadows to create your trading account, (2) Make your minimum deposit of $300 USDT, (3) Start receiving daily AI-powered trading signals, and (4) Follow the signals to grow your investment."
  },
  {
    question: "What is the minimum investment amount?",
    answer: "The minimum investment is $300 USDT. This entry-level investment allows you to access the Lee Meadows AI Trading platform and start receiving trading signals. You can scale up to higher stages ($500, $1000, $3000, $5000) for increased profits."
  },
  {
    question: "How does the 99.6% win rate work?",
    answer: "Our AI trading system analyzes market data in real-time and provides signals with a historical accuracy of 99.6%. The system uses advanced machine learning algorithms, big data prediction, and market intelligence to minimize risk and maximize returns."
  },
  {
    question: "How can I withdraw my funds?",
    answer: "After completing 1x trading volume transfer to your futures account, you can withdraw cash freely within 15-30 minutes to your cryptocurrency wallet. Lee Meadows AI Trading guarantees the principal can be withdrawn at any time regardless of transaction volume."
  },
  {
    question: "What regulatory compliance does the platform have?",
    answer: "Our platform is fully licensed and regulated in over 30 countries including: US (SEC), Australia (ASIC), Singapore (MAS), Dubai (DFSA), and Bahamas Central Bank. This ensures your funds are protected under international financial regulations."
  },
  {
    question: "How do referral rewards work?",
    answer: "You earn rewards by referring new members: 10% of their deposit as referrer reward, plus the new user gets a 5% bonus. For example, referring someone who deposits $1000 earns you $100 and they get $50. After 5 successful referrals with deposits over $500, you're promoted to Team Agent with permanent benefits."
  },
  {
    question: "What are trading signals and how do I receive them?",
    answer: "Trading signals are AI-powered recommendations on when to buy/sell cryptocurrencies. You'll receive 2 fixed signals daily (1:00 PM and 7:00 PM EST) for all members, plus additional signals (2:00 PM, 2:30 PM, 8:00 PM, 8:30 PM, 9:00 PM EST) for eligible members. Signals are sent via the platform and Bonchat."
  },
  {
    question: "Is my investment protected?",
    answer: "Yes! Lee Meadows AI Trading operates with institutional-grade security and regulatory compliance to ensure the safety of all members' funds. Our platform provides long-term stability and protection through established partnerships with licensed exchanges."
  },
  {
    question: "What cryptocurrencies can I trade?",
    answer: "You can trade major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Cardano (ADA), and many others through our partner exchanges. The platform supports spot trading, futures, perpetual contracts, and options trading."
  },
  {
    question: "Do I need trading experience?",
    answer: "No trading experience required! Lee Meadows' AI system provides all trading signals with specific timing, direction, and amounts. Simply follow the signals provided. A smartphone is enough to operate, and it only takes a few minutes per day - it won't affect your work or daily life."
  }
];

export function FAQSection() {
  return (
    <section className="container mx-auto px-4 py-20 bg-[#0a0e27]/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2 border-yellow-500/30 text-yellow-500">FAQ</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about investing with Lee Meadows AI Trading
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
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
