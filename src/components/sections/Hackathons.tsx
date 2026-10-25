import React from 'react';
import { Trophy, Sparkles, Timer, CheckCircle2, Users, FileX } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { HACKATHONS } from '../../data/portfolioData';
import { HackathonItem } from '../../types/portfolio';
import { useTilt3D } from '../../hooks/useTilt3D';
import {
  createHeaderVariants,
  createContainerVariants,
  createCardVariants,
  cardHoverMotion,
} from '../../utils/motion';

interface HackathonCardProps {
  hack: HackathonItem;
  className?: string;
  shouldReduceMotion?: boolean;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  hack,
  className = '',
  shouldReduceMotion = false,
}) => {
  const { tiltProps } = useTilt3D<HTMLDivElement>({
    maxTilt: 3.5,
    perspective: 1100,
    scale: 1.015,
  });

  const isWinner = hack.id === 'hack-innovhack';
  const isLostCert = Boolean(hack.certificateLost);

  return (
    <motion.div
      variants={createCardVariants(shouldReduceMotion)}
      whileHover={cardHoverMotion(shouldReduceMotion)}
      className={`h-full ${className}`}
    >
      <div
        {...tiltProps}
        className="p-7 rounded-2xl bg-[#ECE2D7] border border-[#C9B6A2] hover:border-[#907258] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group card-depth-hover cursor-default h-full"
      >
        <div>
          {/* Top Bar: Badge & Date */}
          <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#C9B6A2]/50 text-xs">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold border ${
                isWinner
                  ? 'bg-[#60472F] text-[#ECE2D7] border-[#4B3622]'
                  : isLostCert
                  ? 'bg-[#D8C9B9] text-[#60472F] border-[#C9B6A2]'
                  : 'bg-[#D8C9B9] text-[#28221D] border-[#C9B6A2]'
              }`}
            >
              {hack.badge}
            </span>
            <span className="text-[11px] font-sans font-semibold text-[#60472F]">
              {hack.date}
            </span>
          </div>

          {/* Header: Icon & Title */}
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#D8C9B9] border border-[#C9B6A2] flex items-center justify-center text-[#60472F] shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-[#C9B6A2] transition-all duration-200">
              {isWinner ? (
                <Trophy className="w-5 h-5 text-[#907258]" />
              ) : isLostCert ? (
                <Timer className="w-5 h-5 text-[#907258]" />
              ) : (
                <Sparkles className="w-5 h-5 text-[#907258]" />
              )}
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-normal text-[#28221D] leading-snug group-hover:text-[#60472F] transition-colors">
                {hack.title}
              </h3>
              <p className="text-xs text-[#7D6149] font-medium font-sans mt-0.5">
                {hack.issuer}
              </p>
            </div>
          </div>

          {/* Teammates Box for INNOVHACK */}
          {isWinner && (
            <div className="p-3 rounded-xl bg-[#D8C9B9]/45 border border-[#C9B6A2]/70 text-xs text-[#60472F] font-sans space-y-1 mb-3">
              <div className="flex items-center gap-1.5 font-semibold text-[#28221D]">
                <Users className="w-3.5 h-3.5 text-[#907258]" />
                <span>Recognition: Winner, Team Quaprix</span>
              </div>
              <div className="text-[11px] text-[#544940] leading-relaxed">
                Revanth Joshua R · Mugesh Raj · Selva Kumar N · Praneesh Viswanath
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#544940] leading-relaxed font-sans mb-4">
            {hack.description}
          </p>

          {/* Lost Certificate Notice for CAMCEE */}
          {isLostCert && (
            <div className="p-2.5 rounded-xl bg-[#D8C9B9]/40 border border-[#C9B6A2]/60 text-[11px] text-[#60472F] font-sans flex items-center gap-2 mb-4">
              <FileX className="w-3.5 h-3.5 text-[#907258] shrink-0" />
              <span>Text-only hackathon participation record (Certificate not available).</span>
            </div>
          )}
        </div>

        {/* Card Footer: Verified Record Label */}
        <div className="pt-4 border-t border-[#C9B6A2]/50 flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-sans text-[#60472F] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#907258]" />
            <span>{isWinner ? 'Podium Victory' : 'Hackathon Participation'}</span>
          </span>
          <span className="text-[11px] font-sans text-[#7D6149]">
            Text-Only Record
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const Hackathons: React.FC = () => {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const headerVariants = createHeaderVariants(shouldReduceMotion);
  const containerVariants = createContainerVariants(0.12, 0.05, shouldReduceMotion);

  return (
    <section
      id="hackathons"
      className="py-20 sm:py-28 bg-[#D8C9B9] text-[#28221D] relative border-t border-[#C9B6A2]/50 section-divider-warm"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.06 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 sm:px-10"
      >
        {/* Section Header */}
        <motion.div variants={headerVariants} className="pb-6 mb-12 border-b border-[#C9B6A2]/60">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#28221D] tracking-tight">
            Competitive Hackathons &amp; Sprints
          </h2>
        </motion.div>

        {/* 3-Card Responsive Grid with 3D Tilt & Tablet Symmetry (3rd card spans 2 on md) */}
        <motion.div
          variants={createContainerVariants(0.1, 0.05, shouldReduceMotion)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {HACKATHONS.map((hack, idx) => (
            <HackathonCard
              key={hack.id}
              hack={hack}
              className={idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
