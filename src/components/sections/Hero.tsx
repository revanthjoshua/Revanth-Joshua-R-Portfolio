import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Hero: React.FC = () => {
  const { ref: revealRef, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.05,
  });

  // Parallax scrolling offset for the tech-doodle background pattern
  const [scrollY, setScrollY] = useState(0);

  // Mouse-movement parallax coordinates with smooth damping
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const currentMouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  // Scroll parallax effect
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect user's reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const heroEl = document.getElementById('hero');
          if (heroEl) {
            const rect = heroEl.getBoundingClientRect();
            // Update parallax while hero is visible in or near viewport
            if (rect.bottom > -100 && rect.top < window.innerHeight + 100) {
              setScrollY(window.scrollY);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth mouse-movement interpolation loop
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const animate = () => {
      // Damping factor: 0.08 for responsive, fluid movement
      const factor = 0.08;
      const dx = targetMouseRef.current.x - currentMouseRef.current.x;
      const dy = targetMouseRef.current.y - currentMouseRef.current.y;

      if (Math.abs(dx) > 0.02 || Math.abs(dy) > 0.02) {
        currentMouseRef.current.x += dx * factor;
        currentMouseRef.current.y += dy * factor;
        setMouseOffset({
          x: currentMouseRef.current.x,
          y: currentMouseRef.current.y,
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Track cursor position across Hero container
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

    // Inverse translation for realistic optical depth with balanced, symmetrical response
    targetMouseRef.current = {
      x: -x * 72,
      y: -y * 72,
    };
  };

  const handleMouseLeave = () => {
    targetMouseRef.current = { x: 0, y: 0 };
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-28 pb-20 md:pt-36 md:pb-32 bg-[#ECE2D7] text-[#28221D] overflow-hidden"
    >
      {/* Subtle Atmospheric Radiance Layers in Champagne & Pearl Stone */}
      <div className="absolute top-0 right-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-[#D8C9B9]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 sm:left-10 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] rounded-full bg-[#C9B6A2]/30 blur-3xl pointer-events-none" />

      {/* Parallax Tech-Doodle Background Pattern Layer with Soft Atmospheric Blur & Amplified Motion */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <div
          className="absolute -top-48 -bottom-48 -left-28 -right-28 bg-repeat opacity-[0.20] mix-blend-multiply will-change-transform filter blur-[2px]"
          style={{
            backgroundImage: `url('/images/hero-pattern.png')`,
            backgroundSize: '420px 420px',
            transform: `translate3d(${mouseOffset.x.toFixed(2)}px, ${(scrollY * 0.22 + mouseOffset.y).toFixed(2)}px, 0)`,
          }}
        />
      </div>

      <div
        ref={revealRef}
        className={`max-w-7xl mx-auto px-6 sm:px-10 w-full relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-5xl xl:max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* Prominent Serif Name */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#28221D] tracking-tight leading-[1.12] mb-6 sm:mb-8">
            {PERSONAL_INFO.name}
          </h1>

          {/* Cursive Welcome Message: Satisfy Script Exclusively */}
          <p className="font-satisfy font-['Satisfy',cursive] text-xl sm:text-2xl md:text-[1.75rem] text-[#60472F] leading-relaxed md:leading-[1.85] max-w-4xl lg:max-w-5xl w-full mx-auto px-2 sm:px-4 mb-8 sm:mb-10 text-center font-normal">
            Welcome to my folio. Step inside an evolving showcase of my journey—where intricate logic transforms into fluid web interfaces, and complex data distills into purposeful insights. Take a look below to explore the projects, hands-on experiences, hackathon builds, and verified certifications that define my craft in building practical, beautiful digital products.
          </p>

          {/* Action Buttons with Tactile Elevation */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href="#contact"
              className="btn-editorial-primary inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#60472F] hover:bg-[#4B3622] text-[#ECE2D7] font-sans text-xs sm:text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#907258] group"
            >
              <span>Contact Me</span>
              <span className="text-base leading-none transition-transform group-hover:translate-x-0.5">→</span>
            </a>

            <a
              href="#about"
              className="btn-editorial-secondary inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-transparent hover:bg-[#D8C9B9]/50 border border-[#907258] text-[#28221D] font-sans text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#907258] group"
            >
              <span>Go Ahead</span>
              <span className="text-base leading-none transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
