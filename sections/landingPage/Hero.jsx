'use client'
import ScrollingWordsBackground from '@/components/ScrollingWordsBackground';
import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const bgWords = [
    "STRATEGY",
    "FUNNELS",
    "CONVERSION",
    "GROWTH",
    "SYSTEMS",
    "ATTENTION",
    "TRUST",
    "SCALE",
  ]
  
  useEffect(() => {
      const node = sectionRef.current
      if (!node) return
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(node) // only trigger once
          }
        },
        {
          threshold: 0.2, // fire once ~20% of the section is visible
          rootMargin: '0px 0px -10% 0px', // trigger slightly before it fully enters
        }
      )
  
      observer.observe(node)
      return () => observer.disconnect()
    }, [])
  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`relative w-full overflow-hidden px-8 pt-36 pb-28 lg:py-28 sm:px-16 border-b border-t border-line bg-ink transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <ScrollingWordsBackground words={bgWords} />
      <div className="w-full mx-auto flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6 text-center text-wrap">
        <p className="font-mono text-xs lg:text-xl uppercase tracking-[0.25em] font-semibold text-brass text-center">
          Branding that standout, System that converts.
        </p>
        <h1 className="md:max-w-4xl lg:max-w-7xl font-display font-bold text-4xl md:text-5xl lg:text-7xl tracking-wide leading-tighter text-brass-soft uppercase">
           <span className="block text-paper-dimmer  ">Amplify your</span> Brand and Digital Marketing Strategy<span className="block text-paper-dimmer  ">All done for you</span>
        </h1>
        <p className="max-w-full md:max-w-3xl lg:max-w-5xl tracking-wide leading-relaxed font-display text-paper-dimmer text-sm md:text-lg lg:text-2xl">
          Helping bussines owners and entrepreneurs around the globe fix leaky customer journeys and grow predictable revenue with Brand Design, Funnel Design, and Marketing Automation.
        </p>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="https://api.leadconnectorhq.com/widget/booking/aKlI25FVdSB34NKfTFed"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-fit rounded-md bg-brass-soft px-8 py-3 font-mono text-xs font-semibold md:text-md uppercase tracking-[0.15em] text-ink-dim transition-colors hover:bg-brass-soft/80 hover:shadow-xl border-2 border-brass-soft "
          >
            Book a Clarity Call
          </a>
          <a
            href="#services"
            className="w-full sm:w-fit font-mono font-semibold rounded-md text-xs md:text-md uppercase tracking-[0.15em] bg-transparent border-brass px-8 py-3 text-brass transition-colors hover:text-brass-soft hover:border-brass-soft hover:shadow-xl border-2"
          >
            Check Our Works →
          </a>
        </div>
      </div>
    </section>
  );
}
