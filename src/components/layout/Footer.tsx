import React from 'react';
import { Instagram, Linkedin, Facebook, Github, Mail, FileText } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_DETAILS } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-10 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center gap-4 text-center">
        
        {/* Social Icons Row */}
        <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4">
          {/* Instagram */}
          {CONTACT_DETAILS.instagram && (
            <a
              href={CONTACT_DETAILS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              title="Instagram"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-2xs"
            >
              <Instagram className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
          )}

          {/* LinkedIn */}
          {CONTACT_DETAILS.linkedin && (
            <a
              href={CONTACT_DETAILS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-2xs"
            >
              <Linkedin className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
          )}

          {/* Facebook */}
          {CONTACT_DETAILS.facebook && (
            <a
              href={CONTACT_DETAILS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              title="Facebook"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-2xs"
            >
              <Facebook className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
          )}

          {/* GitHub */}
          {CONTACT_DETAILS.github && (
            <a
              href={CONTACT_DETAILS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-2xs"
            >
              <Github className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
          )}

          {/* Email */}
          {CONTACT_DETAILS.email && (
            <a
              href={`mailto:${CONTACT_DETAILS.email}`}
              aria-label="Send Email"
              title="Email"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-2xs"
            >
              <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
          )}

          {/* Resume / Document Download */}
          {CONTACT_DETAILS.resumeUrl && (
            <a
              href={CONTACT_DETAILS.resumeUrl}
              download="Revanth_Joshua_Resume.pdf"
              aria-label="Download Resume"
              title="Download Resume"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-2xs"
            >
              <FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
          )}
        </div>

        {/* Muted Copyright Text */}
        <p className="text-xs sm:text-[13px] text-neutral-400 font-sans tracking-normal">
          © 2026 {PERSONAL_INFO.name}.
        </p>

      </div>
    </footer>
  );
};


