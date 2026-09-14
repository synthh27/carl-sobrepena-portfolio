'use client'
import React, { useEffect, useRef, useState } from 'react'
import ScrollingWordsBackground from '@/components/ScrollingWordsBackground'
import { Hammer } from 'lucide-react'

const page = () => {
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
  ];

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
    }, []);
  return (
    <section
      ref={sectionRef}
      id="contact-banner"
      className={`relative min-h-screen w-full overflow-hidden px-8 py-16 lg:py-28 sm:px-8 border-b border-t border-line bg-ink transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
  >
      <style>{`
          @keyframes rotateBorder {
          0%{
              border-color: #005050;
          }
          100% {
              border-color: #008080;
          }
      `}</style>
      <ScrollingWordsBackground words={bgWords} />
      <div className='relative flex flex-col pt-20  w-full min-h-full mx-auto max-w-6xl text-center font-display gap-4'>
        <Hammer className='mx-auto text-red-400 size-20 self-center'/> 
        <h2 className='mx-auto max-w-5xl font-bold text-red-400 text-5xl'>Sorry, this page is still unavailable</h2>
        <p className='mx-auto max-w-4xl text-brass text-2xl lg:text-2xl'>Check our home page for more info</p>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            onClick={() => handleNavClick('/')}
            href="/"
            className="w-full sm:w-fit font-mono font-bold rounded-md text-xs md:text-md uppercase tracking-[0.15em] bg-transparent border-brass px-8 py-3 text-brass transition-colors hover:text-brass-soft hover:border-brass-soft hover:shadow-xl border-2"
          >
            Explore our services
          </a>
        </div>
      </div>

    </section>
  )
}

export default page