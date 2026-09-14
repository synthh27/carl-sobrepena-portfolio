'use client'

import ScrollingWordsBackground from '../../components/ScrollingWordsBackground'
import React, { useEffect, useRef, useState } from 'react'

const ContactBanner = () => {
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
        }, [])
    return (
        
        <section
            ref={sectionRef}
            id="contact-banner"
            className={`relative w-full overflow-hidden px-8 py-16 lg:py-28 sm:px-8 border-b border-t border-line bg-brass-soft transition-all duration-1000 ease-out ${
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
            <div className="z-10 flex flex-col gap-4 max-w-5xl mx-auto">
                <h2 className="text-center font-display font-semibold text-xl md:text-xl lg:text-xl uppercase text-ink sm:text-4xl tracking-[0.05em]">
                    <span className='text-paper-dimmer'>Still have</span> questions? <span className="block font-bold text-7xl text-ink ">Let's <span className='text-paper-dimmer'>talk.</span></span>
                </h2>
                <p className="w-full text-center font-display font-semibold uppercase tracking-wide md:tracking-wide text-xl md:text-lg text-paper-dimmer">
                    What happens after the <span className='text-ink'>clarity call?</span>
                </p>
                <p className="w-fit mx-auto font-semibold text-center font-display uppercase tracking-wide md:tracking-wider text-md md:text-lg text-brass-soft bg-paper-dim px-4 rounded-md">
                    You got two options:
                </p>
                <p className="w-full text-ink md:max-w-2xl tracking-wider mx-auto text-center font-display font-semibold uppercase text-sm md:text-md">
                    Walk away your audited business, or we can work together and amplify your sales revenue.
                </p>
                <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center text-center gap-4 mt-6">
                    <a
                        href="https://cal.com/carl-sobrepena-3fexby/15min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full rounded-md bg-paper-dimmer px-8 lg:px-8 py-3 font-display text-sm lg:text-sm font-semibold uppercase tracking-wide text-ink-dim transition-colors  hover:bg-paper-dimmer/90 hover:border-paper-dimmer border-2  hover:shadow-md border-paper-dimmer"
                    >
                        Reserve your spot
                        <span className='block text-xs lg:text-[.65rem] text-ink-dim font-thin'>100% free 15 min call. Zero Commitment.</span>
                    </a>
                    <a
                    href="#projects"
                    className="w-full font-display font-semibold rounded-md text-sm lg:text-md uppercase tracking-wide border-paper-dimmer px-8 py-3 text-paper-dimmer transition-colors duration-300 hover:text-paper-dimmer/80 hover:border-paper-dimmer/70 border-2 hover:shadow-md "
                    >
                    Check our work process
                    <span className='block text-xs lg:text-[.65rem] text-ink-dim font-thin'>step-by-step from discovery to delivery</span>
                    </a>
                </div>
                
            </div>
        </section>
    )
}

export default ContactBanner