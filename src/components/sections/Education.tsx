import React from 'react';
import { GraduationCap, BookOpen, CheckCircle2, Award } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { EDUCATION } from '../../data/portfolioData';
import { EducationItem } from '../../types/portfolio';
import { useTilt3D } from '../../hooks/useTilt3D';
import {
  createHeaderVariants,
  createContainerVariants,
  createCardVariants,
  cardHoverMotion,
} from '../../utils/motion';

interface EducationCardProps {
  edu: EducationItem;
  className?: string;
  shouldReduceMotion?: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({
  edu,
  className = '',
  shouldReduceMotion = false,
}) => {
  const { tiltProps } = useTilt3D<HTMLDivElement>({
    maxTilt: 3,
    perspective: 1200,
    scale: 1.015,
  });

  const isDegree = edu.id === 'sns-college';

  const renderScoreBadge = () => {
    if (isDegree) {
      return (
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#60472F] text-[#ECE2D7] border border-[#4B3622] shadow-xs">
          <Award className="w-4 h-4 text-[#D8C9B9] shrink-0" />
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-lg sm:text-xl font-bold tracking-tight text-white">8.00</span>
            <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-[#D8C9B9]">CGPA</span>
          </div>
        </div>
      );
    }

    const isHsc = edu.id === 'kumutha-hsc';
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#D8C9B9] text-[#28221D] border border-[#BBA48E] shadow-2xs">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#907258] shrink-0" />
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-lg sm:text-xl font-bold tracking-tight text-[#28221D]">{edu.score}</span>
          <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-[#60472F]">
            {isHsc ? 'HSC' : 'SSLC'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      variants={createCardVariants(shouldReduceMotion)}
      whileHover={cardHoverMotion(shouldReduceMotion)}
      className={`h-full ${className}`}
    >
      <div
        {...tiltProps}
        className={`p-6 sm:p-7 rounded-2xl bg-[#ECE2D7] h-full ${
          isDegree
            ? 'border-2 border-[#907258] shadow-md hover:shadow-2xl'
            : 'border border-[#BBA48E] hover:border-[#907258] shadow-sm hover:shadow-xl'
        } transition-all duration-300 text-[#28221D] flex flex-col justify-between card-depth-hover cursor-default group`}
      >
        <div>
          {/* Meta Top: Period & High-Visibility Score Badge */}
          <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#C9B6A2]/50 text-xs font-sans">
            <div className="flex items-center gap-1.5 text-[#60472F] font-medium">
              <BookOpen className="w-3.5 h-3.5 text-[#907258] shrink-0" />
              <span className="text-[11px] font-medium text-[#7D6149]">{edu.period}</span>
            </div>
            {renderScoreBadge()}
          </div>

          {/* Institution & Degree Title */}
          <div className="flex items-start gap-3.5 mb-4">
            <div className="w-11 h-11 rounded-xl bg-[#D8C9B9] border border-[#C9B6A2] flex items-center justify-center text-[#60472F] shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-[#28221D] leading-snug mb-1 group-hover:text-[#60472F] transition-colors">
                {edu.institution}
              </h3>
              <p className="font-sans text-xs font-semibold text-[#7D6149]">
                {edu.qualification}
              </p>
            </div>
          </div>

          {/* Coursework & Achievements Highlights */}
          {edu.highlights && (
            <div className="space-y-2 pt-3 border-t border-[#C9B6A2]/40">
              {edu.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#544940] leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#907258] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer Verification */}
        <div className="pt-4 mt-6 border-t border-[#C9B6A2]/40 flex items-center justify-between text-[11px] font-sans text-[#60472F]">
          <span className="font-semibold text-[#28221D] flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#907258]" />
            <span>{isDegree ? 'Undergraduate Degree' : 'Secondary Education'}</span>
          </span>
          <span className="text-[#7D6149] font-mono text-[10px]">Verified Record</span>
        </div>
      </div>
    </motion.div>
  );
};

export const Education: React.FC = () => {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const headerVariants = createHeaderVariants(shouldReduceMotion);
  const containerVariants = createContainerVariants(0.12, 0.05, shouldReduceMotion);

  return (
    <section id="education" className="py-20 sm:py-28 bg-[#C9B6A2] text-[#28221D] relative border-t border-[#BBA48E]/60 section-divider-warm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.06 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 sm:px-10"
      >
        
        {/* Section Header */}
        <motion.div variants={headerVariants} className="pb-6 mb-12 border-b border-[#BBA48E]/60">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#28221D] tracking-tight">
            Academic Background
          </h2>
        </motion.div>

        {/* Balanced 3-Column Educational Grid */}
        <motion.div
          variants={createContainerVariants(0.1, 0.05, shouldReduceMotion)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {EDUCATION.map((edu, idx) => (
            <EducationCard
              key={edu.id}
              edu={edu}
              className={idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
