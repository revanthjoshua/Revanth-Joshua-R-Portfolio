import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  ZoomIn,
  ZoomOut,
  ExternalLink,
  Download,
  FileText,
  RotateCcw,
  Eye,
  FileCheck,
} from 'lucide-react';

export interface ResumeModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  pdfUrl?: string;
  previewImageUrl?: string;
}

/**
 * Global helper to trigger the Resume Modal from any component or action link
 */
export const openResumeModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-resume-modal'));
  }
};

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  pdfUrl = '/resume.pdf',
  previewImageUrl = '/credentials/My_Resume_(July_2026).png',
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1.0);
  const [viewMode, setViewMode] = useState<'pdf' | 'preview'>('pdf');
  const [mounted, setMounted] = useState(false);

  const isControlled = controlledIsOpen !== undefined;
  const activeIsOpen = isControlled ? controlledIsOpen : internalIsOpen;

  useEffect(() => {
    setMounted(true);
    const handleGlobalOpen = () => {
      setInternalIsOpen(true);
      if (isControlled && controlledOnClose) {
        // Parent component can also control state if needed
      }
    };
    window.addEventListener('open-resume-modal', handleGlobalOpen);
    return () => window.removeEventListener('open-resume-modal', handleGlobalOpen);
  }, [isControlled, controlledOnClose]);

  const handleClose = () => {
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  // Keyboard navigation: Escape key closes modal
  useEffect(() => {
    if (!activeIsOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    // Lock body scrolling while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIsOpen]);

  // Reset zoom on close or open
  useEffect(() => {
    if (activeIsOpen) {
      setZoom(1.0);
    }
  }, [activeIsOpen]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(2.0, +(prev + 0.15).toFixed(2)));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(0.6, +(prev - 0.15).toFixed(2)));
  };

  const handleResetZoom = () => {
    setZoom(1.0);
  };

  if (!mounted || !activeIsOpen) return null;

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-[9999] bg-[#28221D]/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 lg:p-6 animate-fade-in"
      onClick={handleClose}
    >
      {/* Floating Warm Brown Card Container */}
      <div
        className="w-full max-w-5xl h-[92vh] max-h-[920px] bg-[#60472F] text-[#ECE2D7] rounded-2xl sm:rounded-3xl border border-[#72553B] shadow-2xl flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Ambient Decorative Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#A78B71]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#4B3622]/40 blur-2xl pointer-events-none" />

        {/* Modal Header / Toolbar */}
        <header className="relative z-10 px-4 sm:px-6 py-3.5 sm:py-4 bg-[#4B3622]/85 border-b border-[#72553B] flex flex-wrap items-center justify-between gap-3 shadow-sm">
          
          {/* Document Title & Badge */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#ECE2D7] text-[#60472F] flex items-center justify-center shrink-0 shadow-xs">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C9B6A2] font-semibold">
                  Curriculum Vitae
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase bg-[#28221D] text-[#ECE2D7] border border-[#72553B]">
                  PDF
                </span>
              </div>
              <h2
                id="resume-modal-title"
                className="font-serif text-base sm:text-lg font-normal text-[#ECE2D7] truncate"
              >
                Revanth Joshua R — Resume
              </h2>
            </div>
          </div>

          {/* Controls Strip */}
          <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
            
            {/* View Mode Toggle: Interactive PDF vs Clean High-Res Image */}
            <div className="flex items-center bg-[#28221D]/70 p-0.5 rounded-xl border border-[#72553B]/70 mr-1 sm:mr-2">
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 text-[11px] font-sans font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === 'pdf'
                    ? 'bg-[#ECE2D7] text-[#60472F] shadow-xs'
                    : 'text-[#C9B6A2] hover:text-[#ECE2D7]'
                }`}
                title="View interactive PDF document"
              >
                <FileCheck className="w-3 h-3" />
                <span className="hidden xs:inline">PDF</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('preview')}
                className={`px-2.5 py-1 text-[11px] font-sans font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === 'preview'
                    ? 'bg-[#ECE2D7] text-[#60472F] shadow-xs'
                    : 'text-[#C9B6A2] hover:text-[#ECE2D7]'
                }`}
                title="View high-resolution scan"
              >
                <Eye className="w-3 h-3" />
                <span className="hidden xs:inline">Preview</span>
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center bg-[#28221D]/70 rounded-xl border border-[#72553B]/70 p-0.5">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoom <= 0.6}
                aria-label="Zoom Out"
                title="Zoom Out (-15%)"
                className="p-1.5 text-[#ECE2D7] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed rounded-lg hover:bg-[#4B3622] transition-colors"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleResetZoom}
                title="Click to reset zoom to 100%"
                className="px-2 py-0.5 text-[11px] font-mono text-[#ECE2D7] hover:text-white font-medium hover:bg-[#4B3622] rounded transition-colors"
              >
                {Math.round(zoom * 100)}%
              </button>

              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoom >= 2.0}
                aria-label="Zoom In"
                title="Zoom In (+15%)"
                className="p-1.5 text-[#ECE2D7] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed rounded-lg hover:bg-[#4B3622] transition-colors"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Open in New Tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open PDF in new tab"
              title="Open PDF in new tab"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#28221D]/70 hover:bg-[#ECE2D7] text-[#ECE2D7] hover:text-[#60472F] border border-[#72553B]/70 hover:border-[#ECE2D7] text-xs font-sans font-medium transition-all duration-200 shadow-2xs group"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#C9B6A2] group-hover:text-[#60472F] transition-colors" />
              <span className="hidden md:inline">New Tab</span>
            </a>

            {/* Direct Download */}
            <a
              href={pdfUrl}
              download="Revanth_Joshua_Resume.pdf"
              aria-label="Download Resume PDF"
              title="Download Resume PDF"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#28221D] hover:bg-[#1A1613] text-[#ECE2D7] border border-[#72553B] text-xs font-sans font-semibold transition-all duration-200 shadow-2xs hover:shadow-xs group"
            >
              <Download className="w-3.5 h-3.5 text-[#C9B6A2] group-hover:translate-y-0.5 transition-transform" />
              <span className="hidden md:inline">Download</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close Resume Viewer"
              title="Close (Esc)"
              className="p-1.5 sm:p-2 rounded-xl bg-[#28221D]/70 hover:bg-[#ECE2D7] text-[#ECE2D7] hover:text-[#60472F] border border-[#72553B]/70 hover:border-[#ECE2D7] transition-all duration-200 ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </header>

        {/* Modal Body / Viewer Canvas */}
        <div className="relative z-10 flex-1 overflow-auto bg-[#3D2C1B]/80 p-3 sm:p-6 lg:p-8 flex items-start justify-center">
          
          {viewMode === 'pdf' ? (
            <div
              className="transition-all duration-200 ease-out origin-top flex justify-center w-full"
              style={{
                width: `${Math.round(100 * zoom)}%`,
                maxWidth: `${Math.round(880 * zoom)}px`,
                height: `${Math.round(1160 * zoom)}px`,
                minHeight: `${Math.round(1160 * zoom)}px`,
              }}
            >
              <object
                data={`${pdfUrl}#toolbar=0&navpanes=0`}
                type="application/pdf"
                className="w-full h-full rounded-xl shadow-2xl bg-white border border-[#72553B]"
              >
                {/* Fallback to high-res preview if browser blocks embedded PDF */}
                <div className="w-full h-full bg-[#28221D] text-[#ECE2D7] rounded-xl p-6 flex flex-col items-center justify-center text-center">
                  <img
                    src={previewImageUrl}
                    alt="Revanth Joshua Resume Preview"
                    className="max-h-[600px] w-auto rounded-lg shadow-xl mb-4 border border-[#72553B]"
                  />
                  <p className="text-sm text-[#C9B6A2] mb-3">
                    Your browser is rendering the preview image.
                  </p>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#60472F] hover:bg-[#7A6858] text-[#ECE2D7] text-xs font-semibold"
                  >
                    Open Native PDF in New Tab
                  </a>
                </div>
              </object>
            </div>
          ) : (
            <div
              className="transition-all duration-200 ease-out origin-top flex justify-center"
              style={{
                width: `${Math.round(850 * zoom)}px`,
                maxWidth: 'none',
              }}
            >
              <img
                src={previewImageUrl}
                alt="Revanth Joshua Resume High-Resolution View"
                className="w-full h-auto rounded-xl shadow-2xl border border-[#72553B] bg-white"
              />
            </div>
          )}

        </div>

        {/* Modal Footer / Status Bar */}
        <footer className="relative z-10 px-4 sm:px-6 py-2.5 bg-[#4B3622]/95 border-t border-[#72553B] flex flex-wrap items-center justify-between text-[11px] text-[#C9B6A2] gap-2">
          <div className="flex items-center gap-3">
            <span>Revanth_Joshua_Resume.pdf</span>
            <span className="w-1 h-1 rounded-full bg-[#72553B]" />
            <span>Updated July 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#72553B]" />
            <button
              type="button"
              onClick={handleResetZoom}
              className="hover:text-[#ECE2D7] inline-flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Scale</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#28221D] text-[#ECE2D7] font-mono text-[10px]">Esc</kbd> to close</span>
          </div>
        </footer>

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
