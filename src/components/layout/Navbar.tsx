import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../data/portfolioData';
import { ResumeModal } from '../resume/ResumeModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = NAVIGATION_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAVIGATION_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-[#ECE2D7]/80 backdrop-blur-md border-b border-[#C9B6A2]/55 py-3 sm:py-3.5 shadow-[0_4px_24px_-4px_rgba(96,71,47,0.08)]'
          : 'bg-[#ECE2D7]/92 backdrop-blur-xs py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group inline-flex items-center -ml-1 sm:-ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A6858] rounded-lg transition-transform duration-200 active:scale-95 shrink-0"
          aria-label="Revanth Joshua R - Home"
        >
          <div className="px-2.5 py-1 rounded-md bg-[#D8C9B9] border border-[#C9B6A2] text-[#60472F] font-serif font-bold text-xs uppercase tracking-wider group-hover:bg-[#7A6858] group-hover:text-[#ECE2D7] group-hover:border-[#7A6858] transition-all duration-200 shadow-2xs group-hover:shadow-xs group-hover:-translate-y-0.5">
            RJ
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3.5" aria-label="Main Navigation">
          <ul className="flex items-center gap-1 xl:gap-2 2xl:gap-2.5 text-[11px] xl:text-xs 2xl:text-[13px] font-sans font-medium">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative inline-flex items-center justify-center px-2.5 py-1 xl:px-3 xl:py-1.5 rounded-full transition-all duration-200 ease-out transform motion-reduce:transform-none ${
                      isActive
                        ? 'bg-[#7A6858] text-[#ECE2D7] font-semibold shadow-xs -translate-y-[1px]'
                        : 'text-[#544940] hover:text-[#ECE2D7] hover:bg-[#7A6858] hover:-translate-y-0.5 active:translate-y-0 active:scale-95'
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A6858] focus-visible:ring-offset-1`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA Button: Let's Connect -> */}
        <div className="flex items-center gap-3 sm:gap-4 lg:ml-3 xl:ml-4 shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#60472F] hover:bg-[#7A6858] text-[#ECE2D7] text-xs font-semibold tracking-wide transition-all duration-200 ease-out shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A6858] focus-visible:ring-offset-2 shrink-0"
          >
            <span>Let's Connect</span>
            <span className="text-sm font-sans transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-[#C9B6A2] text-[#28221D] hover:text-[#ECE2D7] hover:bg-[#7A6858] hover:border-[#7A6858] bg-[#D8C9B9]/50 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A6858]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[64px] bg-[#ECE2D7]/98 backdrop-blur-xl border-b border-[#C9B6A2] shadow-2xl px-6 py-6 animate-fade-in max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#60472F] pb-2 border-b border-[#C9B6A2]/50 font-bold">
              Portfolio Navigation
            </span>
            <nav className="flex flex-col gap-1">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`group flex items-center justify-between py-2.5 px-3 rounded-xl font-serif text-base tracking-tight transition-all duration-200 ease-out transform motion-reduce:transform-none active:scale-[0.98] ${
                      isActive
                        ? 'bg-[#7A6858] text-[#ECE2D7] font-semibold shadow-xs'
                        : 'text-[#28221D] hover:bg-[#7A6858] hover:text-[#ECE2D7] hover:translate-x-1 border-b border-[#C9B6A2]/25'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs transition-colors duration-200 ${
                          isActive ? 'text-[#ECE2D7]/85' : 'text-[#907258] group-hover:text-[#ECE2D7]/85'
                        }`}
                      >
                        {item.number}
                      </span>
                      <span className="font-medium">{item.label}</span>
                    </span>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-all duration-200 ${
                        isActive
                          ? 'text-[#ECE2D7]'
                          : 'text-[#907258] group-hover:text-[#ECE2D7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 font-sans text-xs text-[#62584F] flex flex-col gap-0.5">
              <span className="font-medium text-[#28221D]">SNS College of Engineering • Coimbatore</span>
              <span className="text-[#907258]">Full-Stack Web Developer &amp; Data Analyst</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Interactive Resume Modal */}
      <ResumeModal />
    </header>
  );
};
