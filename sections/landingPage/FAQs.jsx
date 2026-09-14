'use client';

import { useState } from 'react';
import { ChevronDown, Zap, Target, Clock, DollarSign } from 'lucide-react';

const faqData = [
  {
    id: 1,
    // icon: Zap,
    question: "How long does it take to see results?",
    answer: "Most clients see measurable improvements in funnel performance within 2-4 weeks. Email open rates and conversion metrics typically improve first, followed by overall customer acquisition metrics. The exact timeline depends on your current baseline and how quickly you can implement our recommendations."
  },
  {
    id: 2,
    // icon: Target,
    question: "Do you work with businesses outside the Philippines?",
    answer: "Yes. We work with both local Filipino businesses and international USD-paying clients. Our strategies are tailored to your market—local SMEs get pricing and messaging calibrated for the Philippine market, while international clients work with us on USD-based packages."
  },
  {
    id: 3,
    // icon: Clock,
    question: "What if my funnel is already set up?",
    answer: "We start with a comprehensive audit to identify leaks, friction points, and missed opportunities. Most established funnels have 20-40% improvement potential without rebuilding from scratch. We'll show you exactly where the money is getting left on the table."
  },
  {
    id: 4,
    // icon: DollarSign,
    question: "What's included in your packages?",
    answer: "Our full-stack approach covers funnel design, email automation setup, CRM configuration, sales page optimization, conversion tracking, and ongoing performance monitoring. Everything is designed to work together as an integrated system, not siloed tactics."
  },
  {
    id: 5,
    // icon: Zap,
    question: "Do I need existing traffic to start?",
    answer: "No. If you don't have traffic yet, we build the foundation—the funnel, email sequences, and conversion systems—so they're ready the moment traffic arrives. This prevents the costly mistake of scaling broken funnels."
  },
  {
    id: 6,
    // icon: Target,
    question: "Can you handle service businesses and e-commerce?",
    answer: "We specialize in service businesses and F&B, but our funnel and automation expertise applies to any high-ticket or repeat-purchase model. E-commerce with average order values under $50 typically doesn't justify the investment in our full-stack approach."
  }
];

const FAQItem = ({ item, isOpen, onToggle }) => {
  const Icon = item.icon;

  return (
    <div className="border-b border-line last:border-b-0">
      <button
        onClick={onToggle}
        className={`w-full flex items-start gap-4 py-6 px-6 text-left transition-colors duration-300 ${
          isOpen ? 'bg-paper-dimmer/10' : 'hover:bg-paper-dimmer/30'
        }`}
      >
        <div className="flex-grow">
          <h3 className="font-display text-base lg:text-lg font-semibold text-ink tracking-[0.02em]">
            {item.question}
          </h3>
        </div>
        <div className="flex-shrink-0 pt-1">
          <ChevronDown
            className={`w-5 h-5 text-brass-soft transition-transform duration-500 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 bg-paper-dimmer/40">
          <p className="text-sm lg:text-base text-ink-soft leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full mx-auto  py-16 lg:py-24 px-4 border-t-2 border-b-2 border-t-paper border-b-paper bg-gradient-to-br from-paper-dim from-20% via-paper-dimmer  to-paper-dim to-100%">
      <div className="lg:max-w-6xl mx-auto font-display">
        {/* Header */}
        <div className="w-full max-w-4xl mx-auto mb-12 text-center ">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-ink tracking-[0.05em] mb-4">
            Questions? We've Got <span className="text-brass-soft">Answers.</span>
          </h2>
          <p className=" max-w-2xl mx-auto text-sm md:text-md lg:text-lg text-ink-soft  ">
            Everything you need to know about <span className='text-brass-soft font-semibold px-1.5 py-.5 bg-paper'>how we build and scale</span> high-converting funnels for your business.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="rounded-lg overflow-hidden tracking-wide">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggleFAQ(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}