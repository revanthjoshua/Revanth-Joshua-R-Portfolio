import React, { useState } from 'react';
import { Calendar, Building2, CheckCircle2, MapPin, FileCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { EXPERIENCES } from '../../data/portfolioData';
import { ExperienceItem } from '../../types/portfolio';
import { useTilt3D } from '../../hooks/useTilt3D';
import {
  createHeaderVariants,
  createContainerVariants,
  createCardVariants,
  cardHoverMotion,
  springTransition,
  defaultSectionViewport,
} from '../../utils/motion';

interface ExperienceCardProps {
  exp: ExperienceItem;
  shouldReduceMotion?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, shouldReduceMotion = false }) => {
  const { tiltProps } = useTilt3D<HTMLDivElement>({
    maxTilt: 3.5,
    perspective: 1100,
    scale: 1.015,
  });

  const isCurrent = exp.period.includes('Present');

  return (
    <motion.div
      variants={createCardVariants(shouldReduceMotion)}
      whileHover={cardHoverMotion(shouldReduceMotion)}
      className="h-full"
    >
      <div
        {...tiltProps}
        className={`p-6 sm:p-7 rounded-2xl h-full ${
          isCurrent
            ? 'bg-[#D8C9B9]/55 hover:bg-[#D8C9B9]/75 border-2 border-[#907258] shadow-md hover:shadow-2xl'
            : 'bg-[#D8C9B9]/35 hover:bg-[#D8C9B9]/55 border border-[#C9B6A2] hover:border-[#907258] shadow-xs hover:shadow-xl'
        } transition-all duration-300 flex flex-col justify-between group card-depth-hover cursor-default`}
      >
        <div>
          {/* Meta Top: Period & Type Pill */}
          <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#C9B6A2]/50 text-xs">
            <span className="flex items-center gap-1.5 text-[#907258] font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>{exp.period}</span>
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-sans font-semibold border ${
                isCurrent
                  ? 'bg-[#60472F] text-[#ECE2D7] border-[#4B3622] ring-1 ring-[#907258]/60 shadow-xs'
                  : exp.type === 'Internship'
                  ? 'bg-[#60472F] text-[#ECE2D7] border-[#4B3622]'
                  : exp.type === 'Virtual Internship'
                  ? 'bg-[#ECE2D7] text-[#60472F] border-[#BBA48E]'
                  : exp.type === 'Practical Training'
                  ? 'bg-[#D8C9B9] text-[#28221D] border-[#C9B6A2]'
                  : 'bg-[#C9B6A2]/60 text-[#28221D] border-[#BBA48E]'
              }`}
            >
              {isCurrent ? 'Current Role' : exp.type}
            </span>
          </div>

          {/* Role Title */}
          <h3 className="font-sans font-bold text-lg text-[#28221D] mb-1 group-hover:text-[#60472F] transition-colors">
            {exp.role}
          </h3>

          {/* Company Name & Location */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#60472F] font-medium mb-3">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#907258]" />
              <span>{exp.company}</span>
            </span>
            <span className="flex items-center gap-1 text-[#8D8176]">
              <MapPin className="w-3 h-3" />
              <span>{exp.location}</span>
            </span>
          </div>

          {/* Document / Certificate Credential Label */}
          {exp.certificate && (
            <div className="p-2 rounded-xl bg-[#ECE2D7]/80 border border-[#C9B6A2]/70 text-[11px] text-[#60472F] font-sans flex items-center gap-1.5 mb-3 shadow-2xs">
              <FileCheck className="w-3.5 h-3.5 text-[#907258] shrink-0" />
              <span className="font-semibold text-[#28221D]">
                {isCurrent ? 'Engagement:' : 'Document:'}
              </span>
              <span>{exp.certificate}</span>
            </div>
          )}

          {/* Narrative */}
          <p className="text-xs sm:text-sm text-[#62584F] leading-relaxed mb-5 font-sans">
            {exp.description}
          </p>

          {/* Key Responsibilities */}
          <div className="space-y-2 pt-3 border-t border-[#C9B6A2]/40">
            {exp.responsibilities.map((r, rIdx) => (
              <div key={rIdx} className="flex items-start gap-2 text-xs text-[#544940]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#907258] shrink-0 mt-0.5" />
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Card Footer */}
        <div className="pt-4 mt-6 border-t border-[#C9B6A2]/40 flex items-center justify-between text-[11px] font-sans text-[#60472F]">
          <span className="flex items-center gap-1.5 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#907258]" />
            <span>{isCurrent ? 'Active Internship' : 'Verified Experience'}</span>
          </span>
          <span className="text-[#8D8176]">{isCurrent ? 'Current Position' : 'Text-Only Record'}</span>
        </div>
      </div>
    </motion.div>
  );
};

export const Experience: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const initialExperiences = EXPERIENCES.slice(0, 3);
  const remainingExperiences = EXPERIENCES.slice(3);
  const remainingCount = remainingExperiences.length;

  const shouldReduceMotion = Boolean(useReducedMotion());
  const headerVariants = createHeaderVariants(shouldReduceMotion);
  const containerVariants = createContainerVariants(0.12, 0.05, shouldReduceMotion);

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#ECE2D7] text-[#28221D] relative border-t border-[#C9B6A2]/40 section-divider-warm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 sm:px-10"
      >
        
        {/* Section Header */}
        <motion.div variants={headerVariants} className="pb-6 mb-12 border-b border-[#C9B6A2]/50">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#28221D] tracking-tight">
            Work History &amp; Technical Exposure
          </h2>
        </motion.div>

        {/* Experience Grid: Initial 3 Cards by Default */}
        <motion.div
          variants={createContainerVariants(0.1, 0.05, shouldReduceMotion)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {initialExperiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} shouldReduceMotion={shouldReduceMotion} />
          ))}
        </motion.div>

        {/* Expandable Additional Experiences Toggle */}
        {remainingCount > 0 && (
          <motion.div variants={headerVariants} className="mt-12 text-center">
            <motion.button
              type="button"
              onClick={() => setShowAll(!showAll)}
              whileHover={shouldReduceMotion ? undefined : { y: -2, transition: springTransition }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              className="btn-editorial-primary inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D8C9B9] hover:bg-[#60472F] hover:text-[#ECE2D7] text-[#28221D] border border-[#C9B6A2] hover:border-[#60472F] font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#60472F] group"
              aria-expanded={showAll}
            >
              <span>{showAll ? 'Show Less' : `View More Experiences (${remainingCount})`}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-[#60472F] group-hover:text-[#ECE2D7] transition-colors duration-200" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#60472F] group-hover:text-[#ECE2D7] transition-colors duration-200" />
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Expanded Remaining Experience Cards */}
        {showAll && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={createContainerVariants(0.08, 0.02, shouldReduceMotion)}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            {remainingExperiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </motion.div>
        )}


      </motion.div>
    </section>
  );
};
