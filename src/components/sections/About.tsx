import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { useTilt3D } from '../../hooks/useTilt3D';
import {
  createContainerVariants,
  createCardVariants,
  springTransition,
  defaultSectionViewport,
} from '../../utils/motion';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { tiltProps: photoTiltProps } = useTilt3D<HTMLDivElement>({
    maxTilt: 3,
    perspective: 1200,
    scale: 1.015,
  });

  const containerVariants = createContainerVariants(0.12, 0.05, shouldReduceMotion);
  const cardVariants = createCardVariants(shouldReduceMotion);

  // Scroll tracking synchronized to About section scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'center center'],
  });

  // Unified smooth spring physics for natural, cohesive peek-a-boo emergence
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // Clean scroll-driven peek-a-boo transforms for spiderman-new-peek:
  // At rest (scroll start / 0%): tucked completely behind photo card (x: "-100%" / hidden)
  // On scroll (0.15 -> 0.85): translates outward to right (x: "0px") with solid opacity (no fading)
  const spiderHeadX = useTransform(smoothProgress, [0.15, 0.85], [
    shouldReduceMotion ? '0px' : '-100%',
    '0px',
  ]);
  const spiderHeadRotate = useTransform(smoothProgress, [0.15, 0.85], [
    shouldReduceMotion ? 0 : -1.5,
    0,
  ]);
  const spiderHeadScale = useTransform(smoothProgress, [0.15, 0.85], [0.97, 1.0]);

  // Layout Coordination transforms:
  // As user scrolls, photo card gently shifts left (-32px desktop, 0 mobile)
  // and editorial text container gently shifts right (+32px desktop, 0 mobile)
  // opening up a clean central stage for Spider-Man to emerge between them.
  const photoShiftX = useTransform(smoothProgress, (val) => {
    if (shouldReduceMotion || !isDesktop) return 0;
    if (val <= 0.15) return 0;
    if (val >= 0.85) return -32;
    const progress = (val - 0.15) / (0.85 - 0.15);
    return progress * -32;
  });

  const textShiftX = useTransform(smoothProgress, (val) => {
    if (shouldReduceMotion || !isDesktop) return 0;
    if (val <= 0.15) return 0;
    if (val >= 0.85) return 32;
    const progress = (val - 0.15) / (0.85 - 0.15);
    return progress * 32;
  });

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
    <section
      id="about"
      ref={sectionRef}
      className="py-14 sm:py-20 lg:py-24 bg-[#C9B6A2] text-[#28221D] relative overflow-hidden section-divider-warm"
    >
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
          
          {/* Column 1: Photo on Left (Tablet: 5 cols, Desktop: 4 cols) with synchronized layout shift to the left */}
          <motion.div
            variants={cardVariants}
            style={{ x: photoShiftX }}
            className="md:col-span-5 lg:col-span-4 flex flex-col items-center justify-center relative"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[380px] flex flex-col items-center">
              
              {/* Photo Frame Container with 3D tilt */}
              <div
                {...photoTiltProps}
                className="relative z-10 w-full transition-all duration-300 card-depth-hover cursor-default"
              >
                {/* Spider-Man Peek-a-boo: positioned directly behind the right border of portrait photo card (z-0 vs photo z-10) with solid opacity */}
                <motion.div
                  style={{
                    x: spiderHeadX,
                    scale: spiderHeadScale,
                    rotate: spiderHeadRotate,
                    transformOrigin: 'bottom left',
                  }}
                  className="absolute left-[calc(100%-4px)] top-[12%] z-0 pointer-events-none select-none"
                >
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: [-3, 3, -3],
                            transition: {
                              duration: 3.8,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            },
                          }
                    }
                    className="relative w-20 sm:w-22 lg:w-24 h-auto flex flex-col items-center"
                  >
                    <img
                      src="/images/spiderman-new-peek.png"
                      alt="Spider-Man side profile peeking from behind portrait frame"
                      className="w-full h-auto object-contain filter drop-shadow-[0_8px_16px_rgba(40,34,29,0.32)] [image-rendering:-webkit-optimize-contrast]"
                      loading="eager"
                      decoding="async"
                    />
                  </motion.div>
                </motion.div>

                {/* Main Photo Card Container: sits in front of Spider-Man at z-10, with rounded corners & overflow-hidden wrapping photo */}
                <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border-4 border-[#ECE2D7] bg-[#D8C9B9] aspect-[4/5]">
                  <img
                    src="/myimage.jpeg"
                    alt="Revanth Joshua R — Genuine Photograph"
                    className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating Role Badge Card (z-20 in front of photo) */}
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -2, transition: springTransition }}
                className="relative -mt-8 z-20 w-[85%] max-w-[300px] p-4 rounded-xl bg-[#ECE2D7] border border-[#BBA48E] shadow-lg hover:shadow-xl text-center transition-shadow duration-200"
              >
                <p className="font-serif italic text-sm text-[#28221D] font-medium leading-snug">
                  Full Stack Web Developer and Data Analyst
                </p>
                <div className="w-8 h-[2px] bg-[#60472F] mx-auto mt-2" />
              </motion.div>

            </div>
          </motion.div>

          {/* Column 2: Expanded Clean Editorial Text Container with synchronized layout shift to the right */}
          <motion.div
            variants={cardVariants}
            style={{ x: textShiftX }}
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
