import React from 'react';

interface ProjectPreviewProps {
  projectId: string;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ projectId }) => {
  if (projectId === 'career-pilot') {
    return (
      <div className="w-full h-full min-h-[300px] bg-cream-light p-6 flex flex-col justify-between border border-terracotta/20 select-none relative overflow-hidden group shadow-soft rounded-sm">
        {/* Subtle Warm Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-peach/40 blur-2xl pointer-events-none" />

        {/* Top Window Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-terracotta/15 text-[10px] font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta" />
            <span className="w-2.5 h-2.5 rounded-full bg-apricot" />
            <span className="w-2.5 h-2.5 rounded-full bg-blush" />
            <span className="ml-2 font-medium text-ink">CareerPilot_AI_Engine.py</span>
          </div>
          <span className="text-terracotta font-medium">Status: Evaluated</span>
        </div>

        {/* Interactive Schematic Body */}
        <div className="py-6 space-y-4 relative z-10">
          {/* Milestone Steps */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 bg-peach/30 border border-peach-dark/40 rounded-xs">
              <span className="block text-[10px] font-mono uppercase text-terracotta font-medium">Phase 01</span>
              <span className="font-serif text-xs text-ink">Diagnostic Test</span>
            </div>
            <div className="p-2.5 bg-apricot/20 border border-apricot/40 rounded-xs">
              <span className="block text-[10px] font-mono uppercase text-apricot-dark font-medium">Phase 02</span>
              <span className="font-serif text-xs text-ink">Roadmap Build</span>
            </div>
            <div className="p-2.5 bg-blush/30 border border-blush-dark/40 rounded-xs">
              <span className="block text-[10px] font-mono uppercase text-terracotta font-medium">Phase 03</span>
              <span className="font-serif text-xs text-ink">Daily Guidance</span>
            </div>
          </div>

          {/* Metric Assessment Sliders */}
          <div className="p-3.5 bg-cream border border-terracotta/15 rounded-xs space-y-2.5 text-xs font-mono shadow-xs">
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-ink-light">Concept Mastery Index</span>
                <span className="text-terracotta font-medium">88%</span>
              </div>
              <div className="h-1.5 w-full bg-peach/30 rounded-full overflow-hidden">
                <div className="h-full bg-terracotta w-[88%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-ink-light">Algorithmic Problem Velocity</span>
                <span className="text-apricot-dark font-medium">82%</span>
              </div>
              <div className="h-1.5 w-full bg-peach/30 rounded-full overflow-hidden">
                <div className="h-full bg-apricot-dark w-[82%] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Tag */}
        <div className="pt-3 border-t border-terracotta/15 flex items-center justify-between text-[10px] font-mono text-ink-muted">
          <span>AI Adaptive Guidance Model</span>
          <span className="text-terracotta font-medium">SNSCE Academic Archive</span>
        </div>
      </div>
    );
  }

  if (projectId === 'personal-portfolio') {
    return (
      <div className="w-full h-full min-h-[300px] bg-cream-light p-6 flex flex-col justify-between border border-terracotta/20 select-none relative overflow-hidden group shadow-soft rounded-sm text-ink">
        {/* Top Browser Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-terracotta/15 text-[10px] font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta" />
            <span className="w-2.5 h-2.5 rounded-full bg-apricot" />
            <span className="w-2.5 h-2.5 rounded-full bg-blush" />
            <span className="ml-2 font-medium text-ink">revanthjoshua.vercel.app</span>
          </div>
          <span className="text-terracotta font-medium">Live Deployment</span>
        </div>

        {/* Multi-Viewport Architecture Diagram */}
        <div className="py-6 flex items-center justify-center gap-4 relative z-10">
          {/* Desktop Frame */}
          <div className="w-3/5 p-3.5 bg-cream border border-terracotta/20 shadow-sm rounded-xs space-y-2">
            <div className="h-2 w-1/3 bg-terracotta rounded-xs" />
            <div className="h-1.5 w-full bg-ink/10 rounded-xs" />
            <div className="h-1.5 w-4/5 bg-ink/10 rounded-xs" />
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="h-10 bg-peach/25 border border-terracotta/15 rounded-xs" />
              <div className="h-10 bg-peach/25 border border-terracotta/15 rounded-xs" />
            </div>
          </div>

          {/* Mobile Frame */}
          <div className="w-1/4 p-2.5 bg-peach/40 border border-terracotta/30 shadow-md rounded-xs space-y-1.5">
            <div className="h-1.5 w-1/2 bg-terracotta rounded-xs" />
            <div className="h-1 w-full bg-ink/15 rounded-xs" />
            <div className="h-1 w-3/4 bg-ink/15 rounded-xs" />
            <div className="h-8 bg-blush/30 border border-blush/50 rounded-xs mt-1" />
          </div>
        </div>

        {/* Footer Technical Note */}
        <div className="pt-3 border-t border-terracotta/15 flex items-center justify-between text-[10px] font-mono text-ink-muted">
          <span>Responsive Layout Engine</span>
          <span className="text-terracotta font-medium">M8 IT Solutions Intern Work</span>
        </div>
      </div>
    );
  }

  // Vinted Marketplace Prototype
  return (
    <div className="w-full h-full min-h-[300px] bg-cream-light p-6 flex flex-col justify-between border border-terracotta/20 select-none relative overflow-hidden group shadow-soft rounded-sm">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-terracotta/15 text-[10px] font-mono text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-terracotta" />
          <span className="w-2.5 h-2.5 rounded-full bg-apricot" />
          <span className="w-2.5 h-2.5 rounded-full bg-blush" />
          <span className="ml-2 font-medium text-ink">Vinted_Prototype_FlutterFlow</span>
        </div>
        <span className="text-terracotta font-medium">Mobile Prototype</span>
      </div>

      {/* Mobile Feed Representation */}
      <div className="py-6 flex justify-center relative z-10">
        <div className="w-3/4 max-w-[260px] p-3.5 bg-cream text-ink border border-terracotta/20 shadow-md rounded-sm space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-ink/10">
            <span className="font-serif text-xs font-bold text-ink">Circular Fashion</span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 bg-peach/50 border border-terracotta/25 text-terracotta rounded-xs font-medium">
              Pre-Owned
            </span>
          </div>

          {/* Catalog Cards */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 bg-cream-light border border-terracotta/15 rounded-xs">
              <div className="h-12 bg-peach/40 rounded-xs mb-1.5 flex items-center justify-center font-mono text-[9px] text-terracotta font-medium">
                Item 01
              </div>
              <span className="block font-serif text-[11px] leading-tight text-ink font-medium">Vintage Linen</span>
              <span className="font-mono text-[10px] text-terracotta font-semibold">₹1,200</span>
            </div>
            <div className="p-2 bg-cream-light border border-terracotta/15 rounded-xs">
              <div className="h-12 bg-blush/35 rounded-xs mb-1.5 flex items-center justify-center font-mono text-[9px] text-terracotta font-medium">
                Item 02
              </div>
              <span className="block font-serif text-[11px] leading-tight text-ink font-medium">Canvas Jacket</span>
              <span className="font-mono text-[10px] text-terracotta font-semibold">₹2,400</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Tag */}
      <div className="pt-3 border-t border-terracotta/15 flex items-center justify-between text-[10px] font-mono text-ink-muted">
        <span>Sustainable E-Commerce Prototyping</span>
        <span className="text-terracotta font-medium">FlutterFlow Architecture</span>
      </div>
    </div>
  );
};

