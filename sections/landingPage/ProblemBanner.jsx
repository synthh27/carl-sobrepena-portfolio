'use client'

import ScrollingWordsBackground from '../../components/ScrollingWordsBackground'
import React, { useEffect, useRef, useState } from 'react'
import { Funnel, ChartNetwork, DoorStairwell , Waypoints, FishingHook } from 'lucide-react';

// Replace these with your own words later
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



const ProblemBanner = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const featureCards = [
  {
    icon: <Funnel className="size-8 text-ink" />,
    title: `Funnel Clarity`,
    description: "Map exactly where prospects abandon. Stop guessing. Start fixing the leaks that kill conversions."
  },
  {
    icon: <DoorStairwell className="size-8 text-ink" />,
    title: "Frictionless Journey",
    description: "Every step designed to move prospects forward. No confusion. No delays. No reasons to hesitate."
  },
  {
    icon: <Waypoints className="size-8 text-ink" />,
    title: "Automated Systems",
    description: "Nurture and convert 24/7 without manual work. Your funnel keeps working while you sleep."
  },
  {
    icon: <FishingHook className="size-8 text-ink" />,
    title: "Conversion Hooks",
    description: "Stop the scroll. Make them care. Messaging that cuts through noise and compels action."
  }
];
const FeatureCard = ({ icon, title, description }) => (
  <div className="relative flex flex-col gap-3 p-6 border-2 border-brass-soft rounded-lg bg-transparent text-paper-dim hover:bg-brass-soft/10 transition-colors duration-300">
    <div className="absolute -top-5 -left-5 z-10 bg-brass-soft  p-4 rounded-lg shadow-md">
      {icon}
    </div>
    
    <h3 className="mt-10 font-display text-xl min-[1020px]:text-md lg:text-xl uppercase font-bold text-paper-dimmer tracking-[0.05em]">
      {title}
    </h3>
    <p className="font-normal text-md lg:text-base text-paper-dimmer leading-relaxed">
      {description}
    </p>
  </div>
);

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
      id="problem-banner"
      className={`relative w-full overflow-hidden px-8 py-16 lg:py-28 sm:px-16 border-b border-t border-line bg-ink-soft transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>

        <ScrollingWordsBackground words={bgWords} />

        <div className="relative z-10 w-full ">
            <div className="flex flex-col gap-4 max-w-7xl mx-auto font-bold text-body text-center leading-relaxed">
                <h2 className="font-display font-bold text-2xl lg:text-3xl uppercase text-paper-dimmer tracking-wider">
                People's attention span today are <br/> <span className="inline-block text-brass-soft py-2 lg:py-4 text-4xl lg:text-7xl">shorter than ever.</span>
                </h2>
                <p className="mx-auto lg:mb-6 max-w-3xl md:max-w-xl lg:max-w-4xl font-normal tracking-wide text-paper-dimmer text-md md:text-lg lg:text-2xl">
                    Interest alone won't convert. It takes the <span className='bg-paper-dim px-2 text-brass-soft rounded-md'>best strategies</span> to turn keep your customer's journey rolling from strangers to actual checked out sales.
                </p>
                {/* Feature Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mt-8 mx-auto text-left">
                  {featureCards.map((card, index) => (
                    <FeatureCard key={index} {...card} />
                  ))}
                </div>
            </div>
            
        </div>
    </section>
    );
}

export default ProblemBanner