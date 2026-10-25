import React, { useState } from 'react';
import { ExternalLink, FolderGit2, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';
import { ProjectItem } from '../../types/portfolio';
import { useTilt3D } from '../../hooks/useTilt3D';
import {
  createHeaderVariants,
  createContainerVariants,
  createCardVariants,
  cardHoverMotion,
  springTransition,
} from '../../utils/motion';

interface ProjectCardProps {
  project: ProjectItem;
  isFeatured: boolean;
  isExpanded: boolean;
  onToggleTakeaways: () => void;
  className?: string;
  shouldReduceMotion?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isFeatured,
  isExpanded,
  onToggleTakeaways,
  className = '',
  shouldReduceMotion = false,
}) => {
  const { tiltProps } = useTilt3D<HTMLDivElement>({
    maxTilt: 3.5,
    perspective: 1200,
    scale: 1.012,
  });

  return (
    <motion.div
      variants={createCardVariants(shouldReduceMotion)}
      whileHover={cardHoverMotion(shouldReduceMotion)}
      className={`h-full ${className}`}
    >
      <div
        {...tiltProps}
        className={`rounded-2xl bg-[#ECE2D7] border border-[#C9B6A2] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group text-[#28221D] card-depth-hover h-full ${
          isFeatured ? 'ring-0' : ''
        }`}
      >
      {/* Browser Window Header Chrome */}
      <div className="px-4 py-3 bg-[#D8C9B9]/70 border-b border-[#C9B6A2]/70 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#907258] transition-transform group-hover:scale-110" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#A78B71] transition-transform group-hover:scale-110" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#C9B6A2] transition-transform group-hover:scale-110" />
        </div>
        <span className="font-mono text-[10px] text-[#60472F] font-medium truncate max-w-[150px]">
          {project.id === 'noir-nectar' || project.id === 'noirandnectar' ? 'noirandnectar.app' : `${project.id}.app`}
        </span>
        <span
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold border ${
            project.status === 'Award Winner'
              ? 'bg-[#E2D4C5] text-[#4B3622] border-[#907258]'
              : project.status === 'Production Tested'
              ? 'bg-[#D8C9B9] text-[#60472F] border-[#BBA48E]'
              : 'bg-[#ECE2D7] text-[#7D6149] border-[#C9B6A2]'
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Project Visual / Header Frame */}
      {project.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-[#D8C9B9] border-b border-[#C9B6A2]/50">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#28221D]/20 via-transparent to-transparent pointer-events-none" />
        </div>
      ) : (
        <div className="p-4 bg-[#D8C9B9]/40 border-b border-[#C9B6A2]/40 flex items-center justify-between text-xs font-mono text-[#60472F]">
          <span className="flex items-center gap-1.5 font-semibold">
            <FolderGit2 className="w-3.5 h-3.5 text-[#907258]" />
            {project.category}
          </span>
          <span className="text-[11px] font-sans font-medium text-[#7D6149]">
            {project.period}
          </span>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-2">
            <span className="text-[10px] font-sans uppercase tracking-wider text-[#907258] font-bold block mb-1">
              {project.category}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#28221D] group-hover:text-[#60472F] transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-xs font-sans text-[#7D6149] font-medium mt-0.5 mb-3">
              {project.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#544940] leading-relaxed mb-4 font-sans">
            {project.description}
          </p>

          {/* Implemented Takeaways Accordion Toggle */}
          <div className="mb-4">
            <button
              type="button"
              onClick={onToggleTakeaways}
              aria-expanded={isExpanded}
              className="w-full flex items-center justify-between py-2 px-3 rounded-lg bg-[#D8C9B9]/40 hover:bg-[#D8C9B9]/70 border border-[#C9B6A2]/70 text-xs font-sans font-semibold text-[#60472F] transition-all duration-200 cursor-pointer active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#907258]"
            >
              <span>Key Implemented Features ({project.takeaways.length})</span>
              {isExpanded ? (
                <ChevronUp className="w-3.5 h-3.5 transition-transform duration-200" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
              )}
            </button>

            {isExpanded && (
              <div className="mt-2.5 p-3.5 rounded-lg bg-[#D8C9B9]/30 border border-[#C9B6A2]/60 space-y-2.5 animate-fade-in text-xs text-[#544940]">
                {project.takeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#907258] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </div>
                ))}

                {/* Render Complete 18-Step Analyst Workflow if available */}
                {project.workflowStages && project.workflowStages.length > 0 && (
                  <div className="mt-4 pt-3.5 border-t border-[#C9B6A2]/60">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-sans font-bold text-[#60472F] uppercase tracking-wider block">
                        Complete 18-Step Analyst Workflow
                      </span>
                      <span className="text-[10px] font-mono text-[#907258] font-semibold bg-[#ECE2D7] px-2 py-0.5 rounded border border-[#C9B6A2]/70">
                        18 Stages
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-[#544940] font-sans">
                      {project.workflowStages.map((stage, sIdx) => {
                        const stepNum = String(sIdx + 1).padStart(2, '0');
                        return (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[#ECE2D7] border border-[#C9B6A2]/70 hover:border-[#907258] hover:bg-white transition-all duration-150 cursor-default shadow-2xs group/step"
                          >
                            <span className="font-mono text-[9px] font-bold text-[#907258] shrink-0 bg-[#D8C9B9]/50 px-1 py-0.2 rounded group-hover/step:bg-[#60472F] group-hover/step:text-[#ECE2D7] transition-colors">
                              {stepNum}
                            </span>
                            <span className="truncate group-hover/step:text-[#28221D] font-medium transition-colors">
                              {stage}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {project.evidenceNotes && (
                  <div className="pt-2.5 mt-2.5 border-t border-[#C9B6A2]/40 text-[11px] text-[#7D6149] italic">
                    Verification: {project.evidenceNotes}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Tech Tags & External Link */}
        <div className="flex items-center justify-between pt-4 border-t border-[#C9B6A2]/50 gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[10px] font-sans font-medium bg-[#D8C9B9]/60 text-[#60472F] border border-[#C9B6A2]/70 hover:border-[#907258] transition-colors"
              >
                {tag}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-sans font-medium bg-[#D8C9B9]/30 text-[#7D6149]">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          <a
            href={project.url || 'https://github.com/revanthjoshua'}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-[#60472F] hover:bg-[#4B3622] text-[#ECE2D7] transition-all duration-200 shrink-0 shadow-xs hover:shadow-md hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#907258]"
            aria-label={`View ${project.title}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedTakeaways, setExpandedTakeaways] = useState<Record<string, boolean>>({});

  const toggleTakeaways = (id: string) => {
    setExpandedTakeaways((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const additionalProjects = PROJECTS.filter((p) => !p.featured);

  const shouldReduceMotion = Boolean(useReducedMotion());
  const headerVariants = createHeaderVariants(shouldReduceMotion);
  const containerVariants = createContainerVariants(0.12, 0.05, shouldReduceMotion);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#A78B71] text-[#ECE2D7] relative border-t border-[#96785F] section-divider-warm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 sm:px-10"
      >
        
        {/* Section Header */}
        <motion.div variants={headerVariants} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 mb-12 border-b border-[#ECE2D7]/20">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#ECE2D7] tracking-tight">
              Featured &amp; Engineering Builds
            </h2>
          </div>

          <a
            href="https://github.com/revanthjoshua"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#ECE2D7] hover:text-white transition-colors shrink-0 border-b border-[#ECE2D7]/40 pb-0.5 hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECE2D7] group"
          >
            <span>GitHub Repositories</span>
            <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        {/* Primary Grid: 3 Real Featured Projects with Responsive Tablet Layout */}
        <motion.div
          variants={createContainerVariants(0.1, 0.05, shouldReduceMotion)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {featuredProjects.map((p, idx) => (
            <ProjectCard
              key={p.id}
              project={p}
              isFeatured={true}
              isExpanded={!!expandedTakeaways[p.id]}
              onToggleTakeaways={() => toggleTakeaways(p.id)}
              className={idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>

        {/* Expandable Additional Projects Collection */}
        <motion.div variants={headerVariants} className="mt-12 text-center">
          <motion.button
            type="button"
            onClick={() => setShowAllProjects(!showAllProjects)}
            whileHover={shouldReduceMotion ? undefined : { y: -2, transition: springTransition }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            className="btn-editorial-primary inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ECE2D7] hover:bg-white text-[#28221D] font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#28221D]"
          >
            <span>
              {showAllProjects
                ? 'Collapse Additional Projects'
                : `Explore Additional Verified Projects (${additionalProjects.length})`}
            </span>
            {showAllProjects ? (
              <ChevronUp className="w-4 h-4 text-[#60472F] transition-transform duration-200" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#60472F] transition-transform duration-200" />
            )}
          </motion.button>
        </motion.div>

        {showAllProjects && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={createContainerVariants(0.08, 0.02, shouldReduceMotion)}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            {additionalProjects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                isFeatured={false}
                isExpanded={!!expandedTakeaways[p.id]}
                onToggleTakeaways={() => toggleTakeaways(p.id)}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
