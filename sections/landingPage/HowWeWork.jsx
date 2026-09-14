'use client';
import React, { useState, useEffect, useRef } from 'react';

// Reusable Process Card Component
const ProcessCard = ({ number, phase, title, description, tags, isVisible }) => {
  return (
    <div
      className={`
        flex
        flex-col
        lg:h-full
        p-6 sm:p-8
        bg-ink
        border-2 border-line
        rounded-lg
        transition-all duration-500 ease-out
        hover:border-brass hover:shadow-xl hover:-translate-y-1
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-5'
        }
      `}
      style={{
        animation: isVisible ? `slideUp 0.6s ease-out forwards` : 'none',
        animationDelay: `${(number - 1) * 100}ms`
      }}
    >
      {/* Card Header */}
      <div className="flex gap-4 mb-5">
        <div className="px-4 py-1 rounded-md text-4xl sm:text-5xl font-bold text-ink bg-brass-soft leading-none flex-shrink-0">
          {String(number).padStart(2, '0')}
        </div>
        <p className="text-xs font-semibold tracking-widest text-paper-dimmer uppercase pt-1">
          {phase}
        </p>
      </div>

      {/* Card Content */}
      <h3 className="text-3xl sm:text-2xl font-bold text-brass-soft  mb-4 leading-tight">
        {title}
      </h3>

      <p className="text-sm sm:text-md text-paper-dimmer leading-relaxed mb-6">
        {description}
      </p>

      {/* Tags */}
      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="
              inline-block
              px-2 py-1
              text-xs font-medium
              text-paper-dimmer/80
              bg-brass-soft/10
              border border-brass-soft/40
              rounded-lg
              transition-all duration-200
              hover:bg-brass hover:text-ink hover:border-brass
              cursor-pointer
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// Timeline Indicator Component
const ProcessTimeline = () => {
  return (
    <div className="w-full">
      <svg
        className="hidden lg:block w-full h-auto max-h-32"
        viewBox="0 0 1200 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Main line */}
        <line x1="40" y1="50" x2="1160" y2="50" stroke="#008080" strokeWidth="3" />

        {/* Dots for each phase */}
        {[0, 1, 2, 3].map((index) => {
          const x = 40 + (index * 373.3);
          return (
            <circle
              key={index}
              cx={x}
              cy="50"
              r="10"
              fill={index < 3 ? '#14213D' : '#008080'}
              stroke="#008080"
              strokeWidth="3"
            />
          );
        })}

        {/* End circle (faded) */}
        <circle cx="1160" cy="50" r="8" fill="none" stroke="#008080" strokeWidth="2" opacity="0.3" />
      </svg>
    </div>
  );
};

// Main How We Work Section Component
const HowWeWork = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false, false]);
  const cardsRef = useRef([]);

  const processData = [
    {
      number: 1,
      phase: 'Goals & Challenges Discovery',
      title: 'Discover',
      description:
        'We start by understanding your business model, revenue goals, and customer acquisition pain points. We audit your current systems, customer journey, and marketing infrastructure—then identify which channels and strategies will actually move the needle for your specific business.',
      tags: ['Customer Journey Audit', 'Systems Audit', 'Competitor Analysis', 'Funnel Gap Analysis', 'Revenue Model Review']
    },
    {
      number: 2,
      phase: 'Marketing Strategy & Positioning',
      title: 'Strategize',
      description:
        'Based on what we discovered, we design your complete marketing engine. This means mapping your funnel, positioning your offer, identifying your highest-leverage channels, and outlining the customer journey from awareness through repeat purchase. Strategy done right saves thousands in wasted spend.',
      tags: ['Funnel Design', 'Brand Positioning', 'Messaging Architecture', 'Channel Strategy', 'Customer Lifecycle Mapping']
    },
    {
      number: 3,
      phase: 'Campaign Execution & Build',
      title: 'Build',
      description:
        'We bring your strategy to life. From landing pages and email sequences to ad campaigns and automation workflows, we handle design, copywriting, integration, and deployment. Everything is built to convert—not just to look good.',
      tags: ['Landing Page Design', 'Email Funnel Setup', 'Ad Campaign Creation', 'Chat Automation', 'CRM Configuration', 'Marketing Automation']
    },
    {
      number: 4,
      phase: 'Launch, Measure & Optimize',
      title: 'Optimize',
      description:
        'Launch isn\'t the end—it\'s the beginning. We track performance metrics, run tests on copy and offers, optimize conversion rates, and scale what works. Your marketing system gets smarter and more profitable with every cycle.',
      tags: ['Performance Analytics', 'A/B Testing', 'CRO (Conversion Rate Optimization)', 'Campaign Scaling', 'Attribution & Tracking', 'Growth Optimization']
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardsRef.current.indexOf(entry.target);
          setVisibleCards((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section 
      id="how-we-work"
      className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-paper-dim from-0% via-paper-dimmer via-15% to-paper-dim to-100%">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center ">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display text-ink mb-4 sm:mb-6 tracking-tight leading-tight">
              How <span className='text-brass-soft'>We</span> Work
            </h2>
            <p className="w-full text-lg font-se sm:text-2xl text-ink font-display  mx-auto leading-relaxed tracking-wide">
              We don't just take direction. We bring <span className='font-semibold text-brass-soft bg-paper px-2 py-0.5 rounded-md'>strategy</span> to the table.
            </p>
          </div>

          {/* Timeline */}
          <ProcessTimeline />

          <div className="text-center my-8">
            <p className="w-full text-sm md:text-lg lg:text-2xl text-ink font-display  mx-auto leading-relaxed tracking-wide">
              Our step-by-step process that guides our clients to success.
            </p>
          </div>
          {/* Cards Grid */}
          <div className="mt-8 grid grid-cols-1 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
            
            {processData.map((item, index) => (
              <div
                key={item.number}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <ProcessCard
                  {...item}
                  isVisible={visibleCards[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default HowWeWork;