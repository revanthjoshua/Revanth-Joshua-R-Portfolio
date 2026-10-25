import React, { useState } from 'react';

/**
 * HeroVisual Component — Soft Creative Direction (Style A)
 * 
 * An original, layered vector illustration celebrating:
 * - Initials 'J' and 'R' intertwined with kinetic volleyball trajectory
 * - Palette: Warm Cream (#FFF5EB), Soft Peach (#FFD6C3), Warm Blush (#F5C4C9), Apricot (#F2B66E), Terracotta (#984B36), Deep Ink (#27231F)
 * - Layered organic shapes and architectural curves with approachable warmth
 * - Zero realistic portrait fabrication, zero stock technology clichés.
 */
export const HeroVisual: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-6 sm:p-8 select-none group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="img"
      aria-label="Soft creative editorial illustration combining initials J and R with geometric volleyball motion"
    >
      {/* Layered Backdrop Shapes: Soft Peach & Warm Blush Cards */}
      <div className="absolute inset-4 bg-peach/40 rounded-3xl -rotate-2 border border-terracotta/15 transition-transform duration-700 ease-out group-hover:-rotate-3" />
      <div className="absolute inset-2 bg-blush/30 rounded-3xl rotate-1 border border-terracotta/15 transition-transform duration-700 ease-out group-hover:rotate-2" />
      <div className="absolute inset-0 bg-cream-light border border-terracotta/20 rounded-2xl shadow-soft transition-all duration-500 overflow-hidden group-hover:shadow-soft-lg" />

      {/* Editorial Studio Index Strip */}
      <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-terracotta border-b border-terracotta/15 pb-2.5 z-10">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-apricot animate-pulse" />
          <span className="font-semibold">Study 01 // Form & Motion</span>
        </span>
        <span className="text-ink/60">Edition 2026</span>
      </div>

      {/* Main SVG Vector Composition */}
      <svg
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 max-w-[380px] max-h-[380px] transition-transform duration-700 ease-out"
        style={{
          transform: hovered ? 'scale(1.03) translateY(-2px)' : 'scale(1)',
        }}
      >
        {/* Soft Organic Background Discs */}
        <ellipse
          cx="240"
          cy="250"
          rx="170"
          ry="150"
          fill="#FFD6C3"
          fillOpacity="0.45"
        />
        <circle
          cx="310"
          cy="180"
          r="95"
          fill="#F5C4C9"
          fillOpacity="0.5"
        />
        <circle
          cx="170"
          cy="290"
          r="80"
          fill="#F2B66E"
          fillOpacity="0.25"
        />

        {/* Concentric Guide Arcs */}
        <circle
          cx="230"
          cy="240"
          r="160"
          stroke="#984B36"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.25"
        />

        {/* Letter 'J' Parabolic Spike Trajectory Arc */}
        <path
          d="M 120 110 C 270 95, 330 180, 330 280 C 330 350, 275 385, 215 385 C 160 385, 130 350, 138 305"
          stroke="#984B36"
          strokeWidth="6"
          strokeLinecap="round"
          className="transition-colors duration-500"
          style={{ stroke: hovered ? '#7D3B29' : '#984B36' }}
        />

        {/* Secondary Rhythm Echo Trail */}
        <path
          d="M 135 120 C 275 110, 318 190, 318 280 C 318 340, 270 375, 218 375"
          stroke="#F2B66E"
          strokeWidth="2.5"
          strokeDasharray="4 6"
          opacity="0.8"
        />

        {/* Letter 'R' Architectural Spine & Upper Loop */}
        <line
          x1="195"
          y1="140"
          x2="195"
          y2="360"
          stroke="#27231F"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M 195 140 C 285 140, 290 235, 195 235"
          stroke="#27231F"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Dynamic Stride Leg of 'R' */}
        <line
          x1="205"
          y1="235"
          x2="295"
          y2="360"
          stroke="#984B36"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Kinetic Volleyball at Jump Apex */}
        <g
          className="transition-transform duration-700 ease-out"
          style={{
            transform: hovered ? 'translate(4px, -8px)' : 'translate(0px, 0px)',
          }}
        >
          {/* Sphere Base in Apricot with Terracotta Border */}
          <circle cx="340" cy="140" r="38" fill="#F2B66E" stroke="#984B36" strokeWidth="2" />

          {/* Volleyball Flowing Seam Curves */}
          <path
            d="M 314 125 C 330 140, 355 140, 370 125"
            stroke="#FFF5EB"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 314 155 C 330 140, 355 140, 370 155"
            stroke="#FFF5EB"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 340 102 L 340 178"
            stroke="#984B36"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Baseline Court Datum Line */}
        <line x1="80" y1="385" x2="380" y2="385" stroke="#984B36" strokeWidth="1" opacity="0.3" />
        <line x1="120" y1="398" x2="340" y2="398" stroke="#F2B66E" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />

        {/* Studio Color Dot Accents */}
        <circle cx="120" cy="110" r="6" fill="#F2B66E" />
        <circle cx="195" cy="140" r="6" fill="#984B36" />
        <circle cx="295" cy="360" r="6" fill="#F5C4C9" stroke="#984B36" strokeWidth="1.5" />
      </svg>

      {/* Editorial Caption Footnote */}
      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-ink/70 border-t border-terracotta/15 pt-2.5 z-10">
        <span className="text-terracotta font-medium">Kinetic Volleyball Trajectory</span>
        <span className="font-serif italic text-ink text-xs">Athletic Discipline & Code</span>
      </div>
    </div>
  );
};
