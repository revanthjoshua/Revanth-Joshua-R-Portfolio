import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { CONTACT_DETAILS } from '../../data/portfolioData';
import { openResumeModal } from '../resume/ResumeModal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Precise scroll tracking synchronized to Contact section scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  // Organic physics spring for responsive and fluid motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 20,
    restDelta: 0.001,
  });

  // Card shifts rightwards as the user scrolls into the section
  const cardX = useTransform(
    smoothProgress,
    [0.1, 0.85],
    [0, shouldReduceMotion ? 0 : isDesktop ? 65 : 20]
  );

  // Iron Man emerges smoothly from BEHIND the card (starts at positive X) to the left side (negative X)
  const ironManX = useTransform(
    smoothProgress,
    [0.1, 0.85],
    [
      shouldReduceMotion ? 0 : isDesktop ? 180 : 60,
      shouldReduceMotion ? 0 : isDesktop ? -90 : -25,
    ]
  );

  // Progressive opacity, scale, and subtle stabilization tilt in sync with scroll
  const ironManOpacity = useTransform(smoothProgress, [0.08, 0.4], [0, 1]);
  const ironManScale = useTransform(smoothProgress, [0.1, 0.85], [0.72, 1]);
  const ironManRotate = useTransform(smoothProgress, [0.1, 0.85], [6, -3]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(data.error || 'Server error. Please reach out directly via email.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network connection error. Please email me directly.');
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#ECE2D7] text-[#28221D] relative border-t border-[#C9B6A2]/50 overflow-hidden section-divider-warm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Animated Companion & Card Flex Container */}
        <div className="relative flex items-center justify-center">
          
          {/* Realistic Iron Man Companion (Starts Tucked Behind Card, Slides Out to Left) */}
          <motion.div
            style={{
              x: ironManX,
              opacity: ironManOpacity,
              scale: ironManScale,
              rotate: ironManRotate,
            }}
            className="absolute left-1 sm:-left-3 lg:-left-12 xl:-left-20 top-[45%] -translate-y-1/2 z-0 pointer-events-none select-none hidden md:block"
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [-3, 4, -3],
                      transition: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }
              }
              className="relative w-44 sm:w-56 lg:w-64 xl:w-[19rem] h-auto flex flex-col items-center"
            >
              {/* Dynamic Cyan Energy Aura / Arc Reactor Bloom */}
              <div className="absolute top-[17%] left-[43%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-cyan-400/25 blur-2xl pointer-events-none animate-pulse" />

              {/* Realistic High-Resolution Full-Body Iron Man Render Asset */}
              <img
                src="/assets/ironman.png"
                alt="Iron Man Companion pointing to Get in Touch card"
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.55)] drop-shadow-[0_0_20px_rgba(0,240,255,0.22)] relative z-10 select-none [image-rendering:-webkit-optimize-contrast]"
                style={{ imageRendering: 'auto' }}
                loading="eager"
                decoding="async"
              />

              {/* Arc Reactor & Pointing Hand Repulsor Energy Accents */}
              <div className="absolute top-[16.6%] left-[43.2%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/95 blur-[2px] shadow-[0_0_12px_#00F0FF] pointer-events-none z-20" />
              <div className="absolute top-[43.4%] left-[87.2%] -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-300/90 blur-[1.5px] shadow-[0_0_10px_#00F0FF] pointer-events-none z-20" />
            </motion.div>
          </motion.div>

          {/* Short, Square Floating Card with Signature Warm Brown Theme (Scroll-Triggered Shift Right) */}
          <motion.div
            style={{
              x: cardX,
            }}
            className="w-full max-w-5xl p-7 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[2rem] bg-[#60472F] text-[#ECE2D7] border border-[#72553B] shadow-2xl relative z-10 overflow-hidden card-depth-hover"
          >
            {/* Subtle Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#A78B71]/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#4B3622]/40 blur-2xl pointer-events-none" />

            {/* Clean Split Layout: Left Info (5 cols) & Right Form (7 cols) */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column: Heading & Direct Channels */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#C9B6A2] font-semibold block mb-2">
                    Connect
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#ECE2D7] tracking-tight leading-[1.15] mb-3">
                    Get in Touch
                  </h2>
                  <div className="w-12 h-[2px] bg-[#C9B6A2]" />
                </div>

                {/* Contact Information & Channels */}
                <div className="space-y-3 pt-2">
                  {/* Email */}
                  <a
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#4B3622]/60 hover:bg-[#4B3622] border border-[#72553B]/70 hover:border-[#C9B6A2]/50 text-xs sm:text-sm text-[#ECE2D7] transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#ECE2D7] text-[#60472F] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#C9B6A2] block leading-none mb-0.5">
                        Email
                      </span>
                      <span className="truncate block font-medium group-hover:underline">
                        {CONTACT_DETAILS.email}
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  {CONTACT_DETAILS.phone && (
                    <a
                      href={`tel:${CONTACT_DETAILS.phone}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#4B3622]/60 hover:bg-[#4B3622] border border-[#72553B]/70 hover:border-[#C9B6A2]/50 text-xs sm:text-sm text-[#ECE2D7] transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#ECE2D7] text-[#60472F] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#C9B6A2] block leading-none mb-0.5">
                          Phone
                        </span>
                        <span className="truncate block font-medium group-hover:underline">
                          {CONTACT_DETAILS.phone}
                        </span>
                      </div>
                    </a>
                  )}

                  {/* Location */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#4B3622]/40 border border-[#72553B]/50 text-xs sm:text-sm text-[#ECE2D7]/85 cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-[#ECE2D7]/80 text-[#60472F] flex items-center justify-center shrink-0 shadow-xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#C9B6A2] block leading-none mb-0.5">
                        Location
                      </span>
                      <span className="truncate block font-medium">
                        {CONTACT_DETAILS.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Resume Action Strip - Centered */}
                <div className="flex items-center justify-center pt-3 border-t border-[#ECE2D7]/15 w-full">
                  <button
                    type="button"
                    onClick={openResumeModal}
                    aria-label="Open Resume Preview"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#ECE2D7] hover:bg-white text-[#60472F] font-sans font-semibold text-xs transition-all duration-200 group shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-[#60472F]" />
                    <span>Open Resume</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Sleek Contact Form */}
              <div className="lg:col-span-7 bg-[#4B3622]/50 p-6 sm:p-8 rounded-2xl border border-[#72553B] shadow-inner flex flex-col justify-between">
                
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#ECE2D7]/15">
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#ECE2D7]">
                    Send a Message
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C9B6A2]">
                    Direct Submission
                  </span>
                </div>

                {/* Feedback Alerts */}
                {status === 'success' && (
                  <div className="p-3.5 bg-[#D8C9B9] border border-[#BBA48E] text-[#28221D] text-xs sm:text-sm flex items-center gap-2.5 rounded-xl mb-4 shadow-xs animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 text-[#60472F] shrink-0" />
                    <span>Thank you! Your message has been received. I'll get back to you soon.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3.5 bg-red-100 border border-red-300 text-red-800 text-xs sm:text-sm flex items-center gap-2.5 rounded-xl mb-4 shadow-xs animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-[11px] font-sans font-bold text-[#ECE2D7] uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-[#C9B6A2]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Vance"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#ECE2D7] text-[#28221D] placeholder:text-[#8D8176] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9B6A2] border border-[#BBA48E] transition-all shadow-xs"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-[11px] font-sans font-bold text-[#ECE2D7] uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-[#C9B6A2]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#ECE2D7] text-[#28221D] placeholder:text-[#8D8176] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9B6A2] border border-[#BBA48E] transition-all shadow-xs"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-[11px] font-sans font-bold text-[#ECE2D7] uppercase tracking-wider mb-1.5">
                      Message <span className="text-[#C9B6A2]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we collaborate?"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#ECE2D7] text-[#28221D] placeholder:text-[#8D8176] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9B6A2] border border-[#BBA48E] transition-all shadow-xs resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-editorial-primary w-full py-3.5 px-6 bg-[#28221D] hover:bg-[#1A1613] text-[#ECE2D7] font-sans text-xs uppercase tracking-wider font-semibold rounded-xl shadow-md hover:shadow-xl border border-[#72553B] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B6A2] active:scale-95"
                    >
                      {status === 'loading' ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
