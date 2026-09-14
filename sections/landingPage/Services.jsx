'use client'

import ScrollingWordsBackground from '@/components/ScrollingWordsBackground'
import React, { useEffect, useRef, useState } from 'react'
import { PenTool ,Zap, Mail, MessageCircle, Workflow } from 'lucide-react';



const Services = () => {
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

    const featureCards = [
      {
        icon: <PenTool className="size-8 text-ink" />,
        title: "Visual Brand Identity Design",
        description: "Your business looks generic. We design a distinctive visual identity that commands attention and signals premium."
      },
      {
        icon: <Zap className="size-8 text-ink" />,
        title: "Funnel & Landing Page Design",
        description: "Prospects land and bounce before you pitch. We design funnels that eliminate friction and convert."
      },
      {
        icon: <Mail className="size-8 text-ink" />,
        title: "Email Campaigns Sequence",
        description: "Emails get ignored without constant work. We build sequences that nurture automatically and convert."
      },
      {
        icon: <MessageCircle className="size-8 text-ink" />,
        title: "Chat Automation Setup",
        description: "You're answering the same questions endlessly and losing leads. We deploy chatbots that qualify 24/7."
      },
      {
        icon: <Workflow className="size-8 text-ink" />,
        title: "CRM Setup & Workflows",
        description: "Your data is scattered and you're losing opportunities. We centralize everything and keep deals moving."
      }
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
        }, [])

    const FeatureCard = ({ icon, title, description }) => (
      <div className="relative flex flex-col gap-3 p-6 border-2 border-paper-dimmer/60 rounded-lg bg-transparent text-paper-dim hover:border-brass-soft hover:bg-brass-soft/5 hover:shadow-md transition-colors duration-300">
        <div className="absolute -top-5 -left-5 z-10 bg-brass-soft  p-4 rounded-lg shadow-md">
          {icon}
        </div>
        
        <h3 className="mt-10 font-display text-lg lg:text-xl uppercase font-bold text-paper-dimmer tracking-[0.05em]">
          {title}
        </h3>
        <p className="font-normal text-md lg:text-base text-paper-dimmer leading-relaxed">
          {description}
        </p>
        <a
          href="/projects"
          className="w-full mt-auto text-center font-mono font-semibold rounded-sm text-xs md:text-md uppercase tracking-[0.15em] bg-transparent border-paper-dimmer/30 px-2 py-2 text-paper-dim/60 transition-colors  hover:border-paper-dimmer/50 hover:text-paper-dim/70 hover:bg-paper-dim/5 hover:shadow-sm border"
        >
          Sample Projects →
        </a>
      </div>
    );
    

  return (
    <section
    ref={sectionRef}
    id="services"
    className={`relative w-full overflow-hidden px-8 py-16 lg:py-28 sm:px-16 border-b border-t border-line bg-ink-soft transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <ScrollingWordsBackground words={bgWords} />

        <div className="relative z-10 w-full">
            <div className="flex flex-col gap-4 max-w-7xl mx-auto font-bold text-body text-center leading-relaxed">
                <h2 className="font-display font-bold text-2xl lg:text-3xl uppercase text-paper-dimmer tracking-[0.05em]">
                Full-stack digital marketing<br/> <span className="inline-block text-brass-soft py-2 md:py-4 text-5xl lg:text-7xl">All Done For You</span>
                </h2>
                <p className="mx-auto max-w-3xl md:max-w-xl lg:max-w-2xl font-normal tracking-wide text-paper-dimmer text-lg md:text-lg lg:text-2xl">
                    We don't <span className='font-semibold'> stop at delivery.</span> We stay <span className='font-semibold'> until it works.</span>
                </p>
                {/* Feature Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  max-w-6xl mt-8 md:mt-16 mx-auto text-left">
                  {featureCards.map((card, index) => (
                    <FeatureCard key={index} {...card} />
                  ))}
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Services