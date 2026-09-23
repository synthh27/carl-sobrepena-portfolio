'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    router.push(href);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-display tracking-wide ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('/')}
              className="text-2xl font-bold uppercase text-brass-soft hover:text-brass transition-colors"

            >
              Carl
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Nav Link */}
            <button
              onClick={() => handleNavClick('/projects')}
              className="text-sm text-paper-dim font-medium hover:text-brass-soft transition-colors relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brass-soft group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavClick('/#services')}
              className="text-sm text-paper-dim font-medium hover:text-brass-soft transition-colors relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brass-soft group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Dropdown Nav Link */}
            {/* <div className="relative group">
              <button className="text-sm text-paper-dim font-medium hover:text-brass-soft transition-colors flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <button
                    onClick={() => handleNavClick('/services/funnels')}
                    className="block w-full text-left px-4 py-2 text-sm text-paper-dim hover:bg-[#f1f1f1] hover:text-brass-soft transition-colors"
                  >
                    Sales Funnels
                  </button>
                  <button
                    onClick={() => handleNavClick('/services/email')}
                    className="block w-full text-left px-4 py-2 text-sm text-paper-dim hover:bg-[#f1f1f1] hover:text-brass-soft transition-colors"
                  >
                    Email Campaigns
                  </button>
                  <button
                    onClick={() => handleNavClick('/services/automation')}
                    className="block w-full text-left px-4 py-2 text-sm text-paper-dim hover:bg-[#f1f1f1] hover:text-brass-soft transition-colors"
                  >
                    Chat Automation
                  </button>
                  <button
                    onClick={() => handleNavClick('/services/leads')}
                    className="block w-full text-left px-4 py-2 text-sm text-paper-dim hover:bg-[#f1f1f1] hover:text-brass-soft transition-colors"
                  >
                    Lead Generation
                  </button>
                </div>
              </div> */}

            {/* Another Nav Link */}
            <button
              onClick={() => handleNavClick('/#how-we-work')}
              className="text-sm text-paper-dim font-medium hover:text-brass-soft transition-colors relative group"
            >
              How We Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brass-soft group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('https://api.leadconnectorhq.com/widget/booking/aKlI25FVdSB34NKfTFed')}
              className="ml-4 px-6 py-2 bg-brass-soft text-white text-sm font-medium rounded-sm hover:bg-brass transition-all duration-200 active:scale-95"
            >
              Book your schedule
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-paper-dim hover:text-brass-soft transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200/50 p-4 space-y-3">
            <button
              onClick={() => handleNavClick('/projects')}
              className="block w-full text-left px-4 py-2 text-sm text-paper-dim hover:text-brass-soft hover:bg-[#f1f1f1] rounded transition-colors"
            >
              Project
            </button>

            {/* Mobile Dropdown */}
            {/* <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left px-4 py-2 text-sm text-paper-dim hover:text-brass-soft hover:bg-[#f1f1f1] rounded flex items-center justify-between transition-colors"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="bg-[#f1f1f1] rounded ml-4 mt-2 space-y-2 py-2 px-2">
                  <button
                    onClick={() => handleNavClick('/services/funnels')}
                    className="block w-full text-left px-2 py-2 text-sm text-paper-dim hover:text-brass-soft rounded transition-colors"
                  >
                    Sales Funnels
                  </button>
                  <button
                    onClick={() => handleNavClick('/services/email')}
                    className="block w-full text-left px-2 py-2 text-sm text-paper-dim hover:text-brass-soft rounded transition-colors"
                  >
                    Email Campaigns
                  </button>
                  <button
                    onClick={() => handleNavClick('/services/automation')}
                    className="block w-full text-left px-2 py-2 text-sm text-paper-dim hover:text-brass-soft rounded transition-colors"
                  >
                    Chat Automation
                  </button>
                  <button
                    onClick={() => handleNavClick('/services/leads')}
                    className="block w-full text-left px-2 py-2 text-sm text-paper-dim hover:text-brass-soft rounded transition-colors"
                  >
                    Lead Generation
                  </button>
                </div>
              )}
            </div> */}
            

            <button
              onClick={() => handleNavClick('/#services')}
              className="block w-full text-left px-4 py-2 text-sm text-paper-dim hover:text-brass-soft hover:bg-[#f1f1f1] rounded transition-colors"
            >
              Services
            </button>

            <button
              onClick={() => handleNavClick('/#how-we-work')}
              className="block w-full text-left px-4 py-2 text-sm text-paper-dim hover:text-brass-soft hover:bg-[#f1f1f1] rounded transition-colors"
            >
              How we work
            </button>

            <a
              // onClick={() => handleNavClick('https://api.leadconnectorhq.com/widget/booking/aKlI25FVdSB34NKfTFed')}
              href="https://api.leadconnectorhq.com/widget/booking/aKlI25FVdSB34NKfTFed"
              target="_blank"
              rel="noopener noreferrer"   
              className="block text-center w-full mt-4 px-4 py-2 bg-brass-soft text-white text-sm font-medium rounded-sm hover:bg-brass transition-all duration-200"
            >
              Book your schedule
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}