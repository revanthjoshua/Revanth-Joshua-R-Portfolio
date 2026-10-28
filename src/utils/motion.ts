import { Variants, Transition } from 'framer-motion';

/**
 * Editorial Motion Design System
 * 
 * Provides calibrated, spring-physics micro-interactions and staggered entry 
 * animations matching the luxury editorial portfolio aesthetic.
 * Full accessibility compliance: automatically respects prefers-reduced-motion.
 */

// Refined Spring Transitions
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 320,
  damping: 24,
  mass: 0.8,
};

export const gentleSpringTransition: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 26,
};

export const snappySpringTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 20,
};

// Editorial cubic-bezier easing for text and header reveals
export const editorialEase: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

/**
 * Calibrated Viewport Trigger Configuration for Section Entrances
 * 
 * Uses a negative margin of '-150px' and threshold amount of 0.2
 * to ensure sections wait until they are comfortably inside the active viewport
 * before smoothly fading and sliding into place, preventing premature triggering
 * during slow scrolling.
 */
export const defaultSectionViewport = {
  once: true,
  margin: '-150px',
  amount: 0.2,
};

// Full Section Entrance Variant (smooth fade and gentle slide upward)
export const createSectionVariants = (shouldReduceMotion = false): Variants => ({
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: shouldReduceMotion
      ? { duration: 0.01 }
      : {
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        },
  },
});

// Section Header Variant (Subtle upward fade)
export const createHeaderVariants = (shouldReduceMotion = false): Variants => ({
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: shouldReduceMotion
      ? { duration: 0.01 }
      : {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        },
  },
});

// Staggered Container Variant for Grids & Lists
export const createContainerVariants = (
  staggerDelay = 0.12,
  delayChildren = 0.06,
  shouldReduceMotion = false
): Variants => ({
  hidden: {
    opacity: shouldReduceMotion ? 1 : 0,
  },
  visible: {
    opacity: 1,
    transition: shouldReduceMotion
      ? { duration: 0.01 }
      : {
          staggerChildren: staggerDelay,
          delayChildren,
        },
  },
});

// Staggered Child Card Variant
export const createCardVariants = (shouldReduceMotion = false): Variants => ({
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: shouldReduceMotion
      ? { duration: 0.01 }
      : {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        },
  },
});

// Skill Emblem Variant (slightly snappier with subtle scale entrance)
export const createEmblemVariants = (shouldReduceMotion = false): Variants => ({
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 16,
    scale: shouldReduceMotion ? 1 : 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: shouldReduceMotion
      ? { duration: 0.01 }
      : {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        },
  },
});

// Hover Spring Micro-interactions
export const cardHoverMotion = (shouldReduceMotion = false) =>
  shouldReduceMotion
    ? undefined
    : {
        y: -5,
        transition: springTransition,
      };

export const emblemHoverMotion = (shouldReduceMotion = false) =>
  shouldReduceMotion
    ? undefined
    : {
        scale: 1.1,
        y: -4,
        transition: snappySpringTransition,
      };
