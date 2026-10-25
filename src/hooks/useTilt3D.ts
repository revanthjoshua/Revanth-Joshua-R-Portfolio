import React, { useState, useRef, useCallback, useEffect } from 'react';

export interface TiltOptions {
  maxTilt?: number;      // Maximum tilt angle in degrees (restrained default: 4deg)
  perspective?: number;  // Perspective distance in px (default: 1000px)
  scale?: number;        // Gentle scale factor on hover (default: 1.015)
  speed?: number;        // Reset transition duration in ms (default: 350ms)
  disabled?: boolean;    // Manually disable tilt
}

export function useTilt3D<T extends HTMLElement = HTMLDivElement>(options: TiltOptions = {}) {
  const {
    maxTilt = 4,
    perspective = 1000,
    scale = 1.015,
    speed = 350,
    disabled = false,
  } = options;

  const ref = useRef<T | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: `transform ${speed}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
  });
  const [glare, setGlare] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });
  const isSupportedRef = useRef(true);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check pointer capabilities and user motion preferences
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    isSupportedRef.current = hasHover && !prefersReducedMotion && !disabled;

    const handleMediaChange = () => {
      const currentHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      const currentMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      isSupportedRef.current = currentHover && !currentMotion && !disabled;
      if (!isSupportedRef.current) {
        setStyle({
          transform: 'none',
          transition: 'none',
        });
      }
    };

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionQuery.addEventListener('change', handleMediaChange);

    return () => {
      motionQuery.removeEventListener('change', handleMediaChange);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [disabled]);

  const onMouseMove = useCallback((e: React.MouseEvent<T>) => {
    if (!isSupportedRef.current || !ref.current) return;

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    const clientX = e.clientX;
    const clientY = e.clientY;
    const element = ref.current;

    rafId.current = requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Restrained normalized offsets [-1, 1]
      const normX = Math.max(-1, Math.min(1, (x - centerX) / centerX));
      const normY = Math.max(-1, Math.min(1, (y - centerY) / centerY));

      const rotateX = -normY * maxTilt;
      const rotateY = normX * maxTilt;

      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 80ms ease-out',
        willChange: 'transform',
      });

      setGlare({
        x: Math.round((x / rect.width) * 100),
        y: Math.round((y / rect.height) * 100),
        opacity: 0.12,
      });
    });
  }, [maxTilt, perspective, scale]);

  const onMouseLeave = useCallback(() => {
    if (!isSupportedRef.current) return;

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: `transform ${speed}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
    });
    setGlare({ x: 50, y: 50, opacity: 0 });
  }, [perspective, speed]);

  return {
    ref,
    style,
    glare,
    tiltProps: {
      ref,
      style,
      onMouseMove,
      onMouseLeave,
    },
  };
}
