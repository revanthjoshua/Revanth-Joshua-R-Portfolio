import React from 'react';
import {
  Flag,
  Globe2,
  Award,
  MapPin,
  CheckCircle2,
  Code2,
  Trophy,
  Compass,
  FileCheck2,
  ExternalLink,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { ACCOMPLISHMENTS, CONTACT_DETAILS } from '../../data/portfolioData';
import { AccomplishmentItem } from '../../types/portfolio';
import { useTilt3D } from '../../hooks/useTilt3D';
import {
  createHeaderVariants,
  createContainerVariants,
  createCardVariants,
  cardHoverMotion,
  defaultSectionViewport,
} from '../../utils/motion';

interface AchievementCardProps {
  item: AccomplishmentItem;
  className?: string;
  shouldReduceMotion?: boolean;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  item,
  className = '',
  shouldReduceMotion = false,
}) => {
  const { tiltProps } = useTilt3D<HTMLDivElement>({
    maxTilt: 3.5,
    perspective: 1100,
    scale: 1.015,
  });

  const getIcon = () => {
    switch (item.category) {
      case 'Paper Presentation':
        return <Award className="w-5 h-5 text-[#907258]" />;
      case 'Career Milestone':
        return <Compass className="w-5 h-5 text-[#907258]" />;
      case 'Collegiate Athletics':
        return <Trophy className="w-5 h-5 text-[#907258]" />;
      case 'Coding':
        return <Code2 className="w-5 h-5 text-[#907258]" />;
      default:
        return <Award className="w-5 h-5 text-[#907258]" />;
    }
  };

  const isLeetCode = item.id === 'ach-leetcode-199';

  return (
    <motion.div
      variants={createCardVariants(shouldReduceMotion)}
      whileHover={cardHoverMotion(shouldReduceMotion)}
      className={`h-full ${className}`}
    >
      <div
        {...tiltProps}
        className="p-6 sm:p-7 rounded-2xl bg-[#ECE2D7] border border-[#C9B6A2] hover:border-[#907258] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group card-depth-hover cursor-default h-full"
      >
        <div>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#C9B6A2]/50 text-xs">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold border ${
                item.category === 'Paper Presentation' || item.category === 'Coding'
                  ? 'bg-[#60472F] text-[#ECE2D7] border-[#4B3622]'
                  : 'bg-[#D8C9B9] text-[#28221D] border-[#C9B6A2]'
              }`}
            >
              {item.badge}
            </span>
            <span className="text-[11px] font-sans font-semibold text-[#60472F]">
              {item.date}
            </span>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#D8C9B9] border border-[#C9B6A2] flex items-center justify-center text-[#60472F] shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-[#C9B6A2] transition-all duration-200">
              {getIcon()}
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-normal text-[#28221D] leading-snug group-hover:text-[#60472F] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-[#7D6149] font-medium font-sans mt-0.5">
                {item.organization}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#544940] leading-relaxed mb-4 font-sans">
            {item.description}
          </p>

          {item.isPersonalDocument && (
            <div className="p-2.5 rounded-xl bg-[#D8C9B9]/40 border border-[#C9B6A2]/60 text-[11px] text-[#60472F] font-sans flex items-center gap-2 mb-3">
              <FileCheck2 className="w-3.5 h-3.5 text-[#907258] shrink-0" />
              <span>Personal career &amp; hackathon timeline document (Not an external certification).</span>
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-[#C9B6A2]/50 flex items-center justify-between text-xs text-[#60472F]">
          <span className="inline-flex items-center gap-1.5 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#907258]" />
            <span>{item.placement || item.badge || 'Verified Record'}</span>
          </span>

          {isLeetCode ? (
            <a
              href={CONTACT_DETAILS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-sans font-semibold text-[#60472F] hover:text-[#907258] hover:underline"
            >
              <span>View LeetCode</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : item.id === 'ach-innovhack-icet' ? (
            <a
              href={CONTACT_DETAILS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-sans font-semibold text-[#60472F] hover:text-[#907258] hover:underline"
            >
              <span>Inspect Repositories</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="text-[11px] font-sans text-[#7D6149]">Official Record</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Achievements: React.FC = () => {
  const isfAward = ACCOMPLISHMENTS.find((a) => a.id === 'ach-volleyball-isf');
  const secondaryAccomplishments = ACCOMPLISHMENTS.filter((a) => a.id !== 'ach-volleyball-isf');

  const shouldReduceMotion = Boolean(useReducedMotion());
  const headerVariants = createHeaderVariants(shouldReduceMotion);
  const containerVariants = createContainerVariants(0.12, 0.05, shouldReduceMotion);

  const { tiltProps: featuredTiltProps } = useTilt3D<HTMLDivElement>({
    maxTilt: 2.5,
    perspective: 1400,
    scale: 1.01,
  });

  return (
    <section
      id="achievements"
      className="py-20 sm:py-28 bg-[#D8C9B9] text-[#28221D] relative border-t border-[#C9B6A2]/50 section-divider-warm"
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
            Honors, Athletics &amp; Milestones
          </h2>
        </motion.div>

        {/* Featured International Athletic Representation (Hero Card with 3D Depth & Spring Lift) */}
        {isfAward && (
          <motion.div
            variants={createCardVariants(shouldReduceMotion)}
            whileHover={cardHoverMotion(shouldReduceMotion)}
            className="mb-8"
          >
            <div
              {...featuredTiltProps}
              className="p-7 sm:p-8 rounded-2xl bg-[#ECE2D7] border border-[#C9B6A2] hover:border-[#907258] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between card-depth-hover cursor-default"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#C9B6A2]/50">
                  <span className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#60472F] font-bold">
                    <Flag className="w-4 h-4 text-[#907258]" />
                    Team India Representative
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#D8C9B9] border border-[#C9B6A2] text-xs font-semibold text-[#60472F]">
                    {isfAward.badge}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#907258] font-semibold block">
                    {isfAward.organization} · {isfAward.date}
                  </span>
                  <span className="text-xs text-[#7D6149] font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#907258]" />
                    San Vito Lo Capo (TP), Italy
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#28221D] tracking-tight mb-3">
                  {isfAward.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#544940] leading-relaxed font-sans mb-3">
                  {isfAward.description} Fostered high-pressure composure, endurance, and elite athletic discipline that directly anchor my software engineering mindset and teamwork under demanding project cycles.
                </p>
              </div>

              <div className="pt-4 border-t border-[#C9B6A2]/50 flex flex-wrap items-center justify-between gap-2 text-xs text-[#60472F]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Globe2 className="w-4 h-4 text-[#907258]" />
                  Sanctioned by International School Sport Federation (ISF) &amp; SGFI
                </span>
                <span className="font-semibold text-[#60472F]">International Athlete Record (Text-Only)</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary Grid: 5 Distinct Accomplishments with 3D Tilt */}
        <motion.div
          variants={createContainerVariants(0.08, 0.03, shouldReduceMotion)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
        >
          {secondaryAccomplishments.map((item, idx) => (
            <AchievementCard
              key={item.id}
              item={item}
              className={idx === 0 ? 'md:col-span-2' : ''}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
