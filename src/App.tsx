import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Hackathons } from './components/sections/Hackathons';
import { Certifications } from './components/sections/Certifications';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#ECE2D7] text-[#28221D] selection:bg-[#C9B6A2] selection:text-[#28221D] font-sans">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Main Flow: Full-Width Luxury Sections with Dedicated Harmonized Tones */}
      <main id="main-content" className="relative flex flex-col w-full">
        {/* HERO — Champagne (#ECE2D7) */}
        <Hero />

        {/* 01. ABOUT — Light Caramel (#C9B6A2) */}
        <About />

        {/* 02. SKILLS — Pearl Stone (#D8C9B9) */}
        <Skills />

        {/* 03. PROJECTS — Mocha Latte (#A78B71) */}
        <Projects />

        {/* 04. EXPERIENCE — Champagne (#ECE2D7) */}
        <Experience />

        {/* 05. EDUCATION — Light Caramel (#C9B6A2) */}
        <Education />

        {/* 06. HACKATHONS — Pearl Stone (#D8C9B9) */}
        <Hackathons />

        {/* 07. CERTIFICATIONS — Champagne (#ECE2D7) */}
        <Certifications />

        {/* 08. ACHIEVEMENTS — Pearl Stone (#D8C9B9) */}
        <Achievements />

        {/* 09. CONTACT — Caramel Brown (#907258) */}
        <Contact />
      </main>

      {/* FOOTER — Deep Mocha (#60472F) */}
      <Footer />
    </div>
  );
};

export default App;
