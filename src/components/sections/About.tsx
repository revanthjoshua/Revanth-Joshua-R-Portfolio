import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTilt3D } from '../../hooks/useTilt3D';
import {
  createContainerVariants,
  createCardVariants,
  springTransition,
  defaultSectionViewport,
} from '../../utils/motion';

export const About: React.FC = () => {
  const { tiltProps: photoTiltProps } = useTilt3D<HTMLDivElement>({
    maxTilt: 3,
    perspective: 1200,
    scale: 1.015,
  });

  const shouldReduceMotion = Boolean(useReducedMotion());
  const containerVariants = createContainerVariants(0.12, 0.05, shouldReduceMotion);
  const cardVariants = createCardVariants(shouldReduceMotion);

  useEffect(() => {
    if (!document.getElementById('playfair-display-font')) {
      const link = document.createElement('link');
      link.id = 'playfair-display-font';
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600;1,700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-[#C9B6A2] text-[#28221D] relative overflow-hidden section-divider-warm">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600;1,700&display=swap');
      `}</style>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 sm:px-10"
      >

        {/* 2-Part Responsive Layout: Photo Left (4 cols), Expanded Clean Editorial Text Container (8 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1: Photo on Left (Tablet: 5 cols, Desktop: 4 cols) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-5 lg:col-span-4 flex flex-col items-center justify-center relative"
          >
            <div
              {...photoTiltProps}
              className="relative w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[380px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border-4 border-[#ECE2D7] bg-[#D8C9B9] transition-all duration-300 card-depth-hover cursor-default"
            >
              <img
                src="/myimage.jpeg"
                alt="Revanth Joshua R — Genuine Photograph"
                className="w-full aspect-[4/5] object-cover object-center filter contrast-[1.02] transition-transform duration-700 ease-out hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Floating Role Badge Card */}
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -2, transition: springTransition }}
              className="relative -mt-8 z-10 w-[85%] max-w-[300px] p-4 rounded-xl bg-[#ECE2D7] border border-[#BBA48E] shadow-lg hover:shadow-xl text-center transition-shadow duration-200"
            >
              <p className="font-serif italic text-sm text-[#28221D] font-medium leading-snug">
                Full Stack Web Developer and Data Analyst
              </p>
              <div className="w-8 h-[2px] bg-[#60472F] mx-auto mt-2" />
            </motion.div>
          </motion.div>

          {/* Column 2: Expanded Clean Editorial Text Container (Tablet: 7 cols, Desktop: 8 cols) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-7 lg:col-span-8 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-10 py-6"
          >
            {/* "About Me" Subheading directly above the main paragraph */}
            <div className="mb-5 sm:mb-6 text-center">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#28221D] font-normal tracking-tight">
                About Me
              </h3>
              <div className="w-14 h-[2px] bg-[#60472F] mx-auto mt-2.5" />
            </div>

            {/* Impactful Concise Paragraph in Playfair Display (Italic) */}
            <p
              className="italic text-lg sm:text-xl lg:text-2xl text-[#28221D] leading-relaxed text-center font-normal max-w-3xl"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
              }}
            >
              A Computer Science and Technology engineering student passionate about software development, data analytics, and innovation. Combines strong academic foundations with practical problem-solving, programming, and web development. Actively explores hackathons and collaborative projects to build real-world solutions, complemented by a background as an international volleyball athlete valuing resilience and teamwork.
            </p>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};
