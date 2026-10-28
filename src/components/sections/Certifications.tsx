import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Calendar, BookOpen } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { CertificationItem } from '../../types/portfolio';
import { useTilt3D } from '../../hooks/useTilt3D';
import {
  createHeaderVariants,
  createContainerVariants,
  createCardVariants,
  cardHoverMotion,
  defaultSectionViewport,
} from '../../utils/motion';

interface CertificationCardProps {
  cert: CertificationItem;
  className?: string;
  shouldReduceMotion?: boolean;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  cert,
  className = '',
  shouldReduceMotion = false,
}) => {
  const { tiltProps } = useTilt3D<HTMLDivElement>({
    maxTilt: 3.5,
    perspective: 1100,
    scale: 1.015,
  });

  const hasValidUntil = Boolean(cert.validUntil);

  return (
    <motion.div
      variants={createCardVariants(shouldReduceMotion)}
      whileHover={cardHoverMotion(shouldReduceMotion)}
      className={`h-full ${className}`}
    >
      <div
        {...tiltProps}
        className="p-7 rounded-2xl bg-[#D8C9B9]/35 hover:bg-[#D8C9B9]/55 border border-[#C9B6A2] hover:border-[#907258] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group card-depth-hover cursor-default h-full"
      >
        <div>
          {/* Top Bar: Badge & Date */}
          <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#C9B6A2]/50 text-xs">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-[#60472F] text-[#ECE2D7] border border-[#4B3622]">
              {cert.badge}
            </span>
            <span className="text-[11px] font-sans font-semibold text-[#60472F] flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#907258]" />
              <span>{cert.date}</span>
            </span>
          </div>

          {/* Header: Icon & Title */}
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#ECE2D7] border border-[#C9B6A2] flex items-center justify-center text-[#60472F] shrink-0 mt-0.5 group-hover:scale-110 group-hover:border-[#907258] transition-all duration-200">
              {cert.id === 'cert-oracle-ai' ? (
                <ShieldCheck className="w-5 h-5 text-[#907258]" />
              ) : cert.id === 'cert-anthropic-mcp' ? (
                <BookOpen className="w-5 h-5 text-[#907258]" />
              ) : (
                <Award className="w-5 h-5 text-[#907258]" />
              )}
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-normal text-[#28221D] leading-snug group-hover:text-[#60472F] transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-[#7D6149] font-medium font-sans mt-0.5">
                {cert.issuer}
              </p>
            </div>
          </div>

          {/* Valid Until Callout (e.g. for Oracle AI) */}
          {hasValidUntil && (
            <div className="p-2.5 rounded-xl bg-[#ECE2D7]/80 border border-[#C9B6A2]/70 text-xs text-[#60472F] font-sans flex items-center justify-between mb-3 shadow-2xs">
              <span className="font-semibold text-[#28221D]">Validity Period:</span>
              <span className="text-[11px] text-[#7D6149] font-medium">Valid until {cert.validUntil}</span>
            </div>
          )}

          {/* Description / Syllabus Summary */}
          <p className="text-xs sm:text-sm text-[#544940] leading-relaxed font-sans mb-4 pt-1">
            {cert.description}
          </p>
        </div>

        {/* Card Footer: Verified Badge & Text-Only Indicator */}
        <div className="pt-4 border-t border-[#C9B6A2]/50 flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-sans text-[#60472F] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#907258]" />
            <span>Verified Credential</span>
          </span>

          <span className="text-[11px] font-sans text-[#7D6149]">
            Official Record (Text-Only)
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const Certifications: React.FC = () => {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const headerVariants = createHeaderVariants(shouldReduceMotion);
  const containerVariants = createContainerVariants(0.12, 0.05, shouldReduceMotion);

  return (
    <section
      id="certifications"
      className="py-20 sm:py-28 bg-[#ECE2D7] text-[#28221D] relative border-t border-[#C9B6A2]/50 section-divider-warm"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultSectionViewport}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 sm:px-10"
      >
        {/* Section Header */}
        <motion.div variants={headerVariants} className="pb-6 mb-12 border-b border-[#C9B6A2]/60">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#28221D] tracking-tight">
            Verified Technical Credentials
          </h2>
        </motion.div>

        {/* 3-Card Responsive Grid with 3D Tilt & Tablet Symmetry (3rd card spans 2 on md) */}
        <motion.div
          variants={createContainerVariants(0.1, 0.05, shouldReduceMotion)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {CERTIFICATIONS.map((cert, idx) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              className={idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
