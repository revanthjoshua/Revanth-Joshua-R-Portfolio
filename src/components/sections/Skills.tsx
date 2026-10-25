import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SkillCategory } from '../../types/portfolio';
import {
  createHeaderVariants,
  createContainerVariants,
} from '../../utils/motion';

interface TechTool {
  name: string;
  category: SkillCategory;
  textColor: string;
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {

  const tools: TechTool[] = [
    // Frontend (7)
    {
      name: 'HTML5',
      category: 'frontend',
      textColor: '#B83812',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
          <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
          <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
          <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
        </svg>
      ),
    },
    {
      name: 'CSS3',
      category: 'frontend',
      textColor: '#0F5B94',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/>
          <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/>
          <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/>
          <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"/>
          <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"/>
          <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"/>
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      textColor: '#785E00',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
          <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      textColor: '#1B5899',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/>
          <path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"/>
        </svg>
      ),
    },
    {
      name: 'React',
      category: 'frontend',
      textColor: '#087EA4',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <g fill="#61DAFB">
            <circle cx="64" cy="64" r="11.4"/>
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/>
          </g>
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      textColor: '#0369A1',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"/>
        </svg>
      ),
    },
    {
      name: 'Responsive Design',
      category: 'frontend',
      textColor: '#4338CA',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          {/* iMac Desktop Monitor */}
          <rect x="8" y="14" width="86" height="58" rx="6" fill="#1E293B" />
          <rect x="13" y="19" width="76" height="48" rx="3" fill="#6366F1" />
          <path d="M51 72v16H36v6h46v-6H66V72H51z" fill="#475569" />
          {/* Overlapping iPad Tablet */}
          <rect x="70" y="40" width="48" height="70" rx="7" fill="#0F172A" stroke="#0284C7" strokeWidth="3" />
          <rect x="75" y="47" width="38" height="54" rx="3" fill="#0EA5E9" />
          <circle cx="94" cy="105" r="2.5" fill="#FFFFFF" />
          {/* Overlapping Smartphone */}
          <rect x="48" y="64" width="32" height="50" rx="6" fill="#090D16" stroke="#059669" strokeWidth="3" />
          <rect x="52" y="70" width="24" height="36" rx="2" fill="#10B981" />
          <circle cx="64" cy="110" r="2" fill="#FFFFFF" />
        </svg>
      ),
    },

    // Backend (4)
    {
      name: 'Python',
      category: 'backend',
      textColor: '#1D517E',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <linearGradient id="python-grad-a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5A9FD4"/>
            <stop offset="100%" stopColor="#306998"/>
          </linearGradient>
          <linearGradient id="python-grad-b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE873"/>
            <stop offset="100%" stopColor="#FFD43B"/>
          </linearGradient>
          <path fill="url(#python-grad-a)" d="M63.391 12.248c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V77.494c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V26.093c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 19.817c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
          <path fill="url(#python-grad-b)" d="M91.682 38.64v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 98.187c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
        </svg>
      ),
    },
    {
      name: 'FastAPI',
      category: 'backend',
      textColor: '#00695C',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <circle cx="64" cy="64" r="62" fill="#05998B"/>
          <path fill="#fff" d="M67 22l24 42H68v42L44 64h23V22z"/>
        </svg>
      ),
    },
    {
      name: 'REST APIs',
      category: 'backend',
      textColor: '#1D4ED8',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          {/* Microservices Central Gateway */}
          <circle cx="64" cy="64" r="26" fill="#2563EB" stroke="#1D4ED8" strokeWidth="4" />
          <text x="64" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="system-ui, sans-serif">REST</text>
          {/* Distributed Endpoints */}
          <circle cx="20" cy="28" r="16" fill="#10B981" />
          <circle cx="108" cy="28" r="16" fill="#F59E0B" />
          <circle cx="20" cy="100" r="16" fill="#8B5CF6" />
          <circle cx="108" cy="100" r="16" fill="#06B6D4" />
          {/* Inner data dots */}
          <circle cx="20" cy="28" r="5" fill="#FFFFFF" />
          <circle cx="108" cy="28" r="5" fill="#FFFFFF" />
          <circle cx="20" cy="100" r="5" fill="#FFFFFF" />
          <circle cx="108" cy="100" r="5" fill="#FFFFFF" />
          {/* High-Contrast Data Pipelines */}
          <path d="M32 38L48 52M96 38L80 52M32 90L48 76M96 90L80 76" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      category: 'backend',
      textColor: '#237323',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path fill="#539E43" d="M64 4.5l52 30v60l-52 30-52-30v-60L64 4.5z"/>
          <path fill="#339933" d="M64 12.5L18 39v50l46 26.5 46-26.5V39L64 12.5z" opacity="0.3"/>
          <path fill="#fff" d="M64 34.5l30 17.5v35L64 104.5 34 87V52L64 34.5z"/>
          <path fill="#539E43" d="M64 44.5l21 12v24.5L64 93 43 81V56.5L64 44.5z"/>
        </svg>
      ),
    },

    // Programming (2)
    {
      name: 'Java',
      category: 'programming',
      textColor: '#B54D00',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path d="M52 14c4 6-3 12-3 17 0 6 7 9 7 15M70 12c5 6-3 13-3 19 0 6 6 10 6 16" stroke="#5382A1" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M26 56h60a6 6 0 016 6v22a22 22 0 01-22 22H48a22 22 0 01-22-22V62a6 6 0 016-6z" fill="#E76F00" />
          <path d="M86 64h12a10 10 0 0110 10v4a10 10 0 01-10 10H86" stroke="#EA2D2E" strokeWidth="7" strokeLinecap="round" fill="none" />
          <path d="M16 114h96a6 6 0 016 6H10a6 6 0 016-6z" fill="#5382A1" />
        </svg>
      ),
    },
    {
      name: 'C Language',
      category: 'programming',
      textColor: '#003E6D',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path fill="#00599C" d="M117.846 95.84c-11.83 20.354-35.32 32.16-60.038 29.897C29.67 123.14 8.7 100.867 8.007 72.585 7.314 44.3 27.027 18.91 55.034 13.916c23.953-4.27 48.618 4.707 62.483 23.364l-19.8 11.53c-8.983-11.758-24.81-17.03-39.77-13.24-17.766 4.5-30.016 20.65-29.414 38.99.6 18.343 14.07 33.328 32.146 35.803 15.347 2.1 30.656-5.187 38.31-18.423l18.857 13.9z"/>
          <path d="M86 44l20-12M86 84l20 12" stroke="#659AD2" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      ),
    },

    // Data Analytics (6)
    {
      name: 'Pandas',
      category: 'data',
      textColor: '#150458',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path fill="#130754" d="M46.236 7.567h13.99v29.047h-13.99Zm0 59.668h13.99V96.28h-13.99Z"/>
          <path fill="#ffca00" d="M46.236 45.092h13.99v13.705h-13.99Z"/>
          <path fill="#130754" d="M23.763 31.446h13.989V128h-13.99ZM68.245 91.2h13.99v29.046h-13.99Zm0-59.72h13.99v29.047h-13.99Z"/>
          <path fill="#e70488" d="M68.245 69.011h13.99v13.705h-13.99Z"/>
          <path fill="#130754" d="M90.248 0h13.99v96.554h-13.99Z"/>
        </svg>
      ),
    },
    {
      name: 'NumPy',
      category: 'data',
      textColor: '#012B3A',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path fill="#4DABCF" d="M64 4.5l54 31v63l-54 31-54-31v-63L64 4.5z"/>
          <path fill="#013243" d="M64 4.5l54 31-54 31-54-31 54-31z"/>
          <path fill="#4584B6" d="M64 66.5l54-31v63l-54 31v-63z"/>
          <path fill="#013243" d="M10 35.5l54 31v63l-54-31v-63z"/>
          <path d="M64 66.5v63M10 35.5l54 31 54-31" stroke="#fff" strokeWidth="4" opacity="0.7"/>
          <text x="64" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="monospace">NUM</text>
        </svg>
      ),
    },
    {
      name: 'SQL',
      category: 'data',
      textColor: '#005063',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <ellipse cx="64" cy="28" rx="46" ry="16" fill="#F29111" />
          <path d="M18 28v22c0 8.8 20.6 16 46 16s46-7.2 46-16V28" fill="#E07E05" />
          <path d="M18 52v24c0 8.8 20.6 16 46 16s46-7.2 46-16V52" fill="#00758F" />
          <path d="M18 78v24c0 8.8 20.6 16 46 16s46-7.2 46-16V78" fill="#005B6F" />
          <ellipse cx="64" cy="28" rx="46" ry="16" stroke="#fff" strokeWidth="4" fill="none" opacity="0.6"/>
          <text x="64" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="system-ui, sans-serif">SQL</text>
        </svg>
      ),
    },
    {
      name: 'Microsoft Excel',
      category: 'data',
      textColor: '#0C5A30',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <rect x="36" y="16" width="76" height="96" rx="8" fill="#0E5C2F" />
          <rect x="44" y="26" width="60" height="76" rx="3" fill="#21A366" />
          <path d="M44 48h60M44 70h60M74 26v76" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
          <rect x="16" y="32" width="64" height="64" rx="10" fill="#107C41" />
          <path d="M32 46l14 18-14 18h11l8-12 8 12h11l-14-18 14-18H59l-8 12-8-12H32z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: 'KPI Analysis',
      category: 'data',
      textColor: '#047857',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <rect x="16" y="74" width="16" height="42" rx="4" fill="#3B82F6" />
          <rect x="42" y="52" width="16" height="64" rx="4" fill="#6366F1" />
          <rect x="68" y="36" width="16" height="80" rx="4" fill="#10B981" />
          <rect x="94" y="20" width="16" height="96" rx="4" fill="#059669" />
          <path d="M24 70l26-22 26 10 32-38" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="108" cy="20" r="10" fill="#F59E0B" />
          <circle cx="108" cy="20" r="5" fill="#FFFFFF" />
        </svg>
      ),
    },

    // Databases (2)
    {
      name: 'PostgreSQL',
      category: 'database',
      textColor: '#234969',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path d="M64 12C35.3 12 12 35.3 12 64c0 19.8 11.2 37.1 27.7 45.9v15.7l18.8-11.3 12.5 11.3v-22.3c22.3-5 39-24.8 39-49.3 0-28.7-22.7-52-52-52z" fill="#336791" />
          <path d="M40 50c9.5-6.3 25.3-6.3 31.6 6.3 3.2 6.3 3.2 18.9 0 25.2-9.5 18.9-28.4 22.1-31.6 22.1" fill="none" stroke="#4169E1" strokeWidth="6" />
          <circle cx="84" cy="52" r="7" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: 'SQLite',
      category: 'database',
      textColor: '#003853',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <ellipse cx="64" cy="98" rx="48" ry="18" fill="#003B57" />
          <path d="M30 98c12-36 48-84 78-90-12 30-36 66-78 90z" fill="#00758F" />
          <path d="M54 74c12-24 30-48 54-66-12 24-30 48-54 66z" fill="#23B0F0" />
          <path d="M26 98l84-90" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        </svg>
      ),
    },

    // AI / ML (5)
    {
      name: 'RAG Architecture',
      category: 'ai_ml',
      textColor: '#6B21A8',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <rect x="16" y="16" width="38" height="48" rx="8" fill="#8B5CF6" />
          <path d="M26 32h18M26 44h18" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="94" cy="40" r="22" fill="#10B981" />
          <path d="M84 40h20M94 30v20" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          <rect x="36" y="78" width="56" height="38" rx="10" fill="#F59E0B" />
          <path d="M50 97h28" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          <path d="M54 40h18M94 62v16" stroke="#475569" strokeWidth="5" strokeDasharray="6 5" />
        </svg>
      ),
    },
    {
      name: 'FAISS Vector Search',
      category: 'ai_ml',
      textColor: '#054FA6',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <circle cx="64" cy="64" r="50" fill="none" stroke="#0668E1" strokeWidth="7" strokeDasharray="14 10" />
          <circle cx="64" cy="64" r="18" fill="#7C3AED" />
          <circle cx="34" cy="40" r="12" fill="#10B981" />
          <circle cx="94" cy="40" r="12" fill="#EC4899" />
          <circle cx="40" cy="88" r="12" fill="#06B6D4" />
          <circle cx="88" cy="88" r="12" fill="#F59E0B" />
          <path d="M64 64L34 40M64 64l30-24M64 64L40 88M64 64l24 24" stroke="#94A3B8" strokeWidth="4" />
        </svg>
      ),
    },
    {
      name: 'Ollama',
      category: 'ai_ml',
      textColor: '#0F172A',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <rect x="22" y="20" width="84" height="90" rx="26" fill="#1E293B" />
          <path d="M38 20V42M90 20V42" stroke="#D97706" strokeWidth="12" strokeLinecap="round" />
          <circle cx="46" cy="62" r="8" fill="#FFFFFF" />
          <circle cx="82" cy="62" r="8" fill="#FFFFFF" />
          <rect x="50" y="76" width="28" height="20" rx="9" fill="#F1F5F9" />
          <circle cx="58" cy="84" r="3" fill="#0F172A" />
          <circle cx="70" cy="84" r="3" fill="#0F172A" />
        </svg>
      ),
    },
    {
      name: 'Model Integration',
      category: 'ai_ml',
      textColor: '#0E7490',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <circle cx="22" cy="38" r="12" fill="#06B6D4" />
          <circle cx="22" cy="90" r="12" fill="#06B6D4" />
          <circle cx="64" cy="22" r="12" fill="#8B5CF6" />
          <circle cx="64" cy="64" r="12" fill="#F43F5E" />
          <circle cx="64" cy="106" r="12" fill="#8B5CF6" />
          <circle cx="106" cy="44" r="12" fill="#10B981" />
          <circle cx="106" cy="84" r="12" fill="#10B981" />
          <path d="M22 38l42-16M22 38l42 26M22 90l42-26M22 90l42 16M64 22l42 22M64 64l42-20M64 64l42 20M64 106l42-22" stroke="#64748B" strokeWidth="4" opacity="0.75" />
        </svg>
      ),
    },

    // Tools & Platforms (6)
    {
      name: 'Git',
      category: 'tools',
      textColor: '#BD371E',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path fill="#F05032" d="M115.2 58.133L69.867 12.8a11.307 11.307 0 00-16 0l-10.667 10.667 13.547 13.546a13.333 13.333 0 0117.066 17.067L87.2 67.467a13.333 13.333 0 11-8 8l-12.8-12.8v27.093a13.333 13.333 0 11-10.667 0V61.867a13.333 13.333 0 01-7.146-17.6L35.2 30.827 12.8 53.227a11.307 11.307 0 000 16L58.133 114.56a11.307 11.307 0 0016 0l41.067-41.067a11.307 11.307 0 000-15.36z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      category: 'tools',
      textColor: '#181717',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <circle cx="64" cy="64" r="60" fill="#181717" />
          <path fill="#FFFFFF" d="M64 16a48 48 0 00-15.17 93.55c2.4.44 3.28-1.04 3.28-2.31v-8.15c-13.35 2.9-16.17-6.44-16.17-6.44-2.18-5.55-5.33-7.03-5.33-7.03-4.36-2.98.33-2.92.33-2.92 4.82.34 7.36 4.95 7.36 4.95 4.28 7.34 11.23 5.22 13.97 3.99.43-3.1 1.68-5.22 3.05-6.42-10.66-1.21-21.86-5.33-21.86-23.72 0-5.24 1.87-9.52 4.94-12.88-.5-1.21-2.14-6.1 0.47-12.7 0 0 4.03-1.29 13.2 4.92a45.9 45.9 0 0124 0c9.17-6.21 13.2-4.92 13.2-4.92 2.61 6.6 0.97 11.49 0.47 12.7 3.07 3.36 4.94 7.64 4.94 12.88 0 18.44-11.22 22.49-21.91 23.68 1.72 1.48 3.26 4.41 3.26 8.89v13.19c0 1.29.87 2.78 3.3 2.31A48 48 0 0064 16z"/>
        </svg>
      ),
    },
    {
      name: 'VS Code',
      category: 'tools',
      textColor: '#005A94',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path d="M94.5 10.6l23.5 11.5a5.5 5.5 0 012.7 4.9v74a5.5 5.5 0 01-2.7 4.9L94.5 117.4a5.5 5.5 0 01-6-.9L44.8 81.2l-26.2 20.1a4.4 4.4 0 01-7.1-3.3V32a4.4 4.4 0 017.1-3.3l26.2 20.1L88.5 11.5a5.5 5.5 0 016-.9z" fill="#0065A9" />
          <path d="M94.5 10.6L44.8 51.5l43.7 35.8 29.5-21.2a5.5 5.5 0 002.7-4.9V16.8l-26.2-6.2z" fill="#007ACC" />
          <path d="M18.6 32v66l26.2-20.1-26.2-45.9z" fill="#1F8AD2" />
          <path d="M94.5 117.4l-49.7-36.2 49.7-36.2v72.4z" fill="#004F8C" />
        </svg>
      ),
    },
    {
      name: 'Vercel',
      category: 'tools',
      textColor: '#000000',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <polygon points="64 14 10 114 118 114" fill="#000000" />
        </svg>
      ),
    },
    {
      name: 'Streamlit',
      category: 'tools',
      textColor: '#C72424',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path d="M64 21.333l18.667 34.667-29.334 16 58.667 40L16 112l48-90.667z" fill="#FF4B4B" />
          <path d="M64 21.333l-21.333 42.667 10.666 8 29.334-16L64 21.333z" fill="#FF6E6E" />
          <path d="M16 112l37.333-50.667-10.666-8L16 112z" fill="#B32B2B" />
        </svg>
      ),
    },
    {
      name: 'LeetCode',
      category: 'tools',
      textColor: '#B46500',
      icon: (
        <svg viewBox="0 0 128 128" className="w-full h-full" aria-hidden="true">
          <path d="M72 16a8 8 0 00-5.6 2.5L34 50a30 30 0 000 42.4l24 24a8 8 0 0011.3-11.3L45.3 81.1a14 14 0 010-19.8l32.4-31.5A8 8 0 0072 16z" fill="#FFA116" />
          <rect x="48" y="58" width="56" height="14" rx="7" fill="#262626" />
        </svg>
      ),
    },
  ];

  const shouldReduceMotion = Boolean(useReducedMotion());
  const headerVariants = createHeaderVariants(shouldReduceMotion);
  const containerVariants = createContainerVariants(0.08, 0.05, shouldReduceMotion);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const centersRef = useRef<{ x: number; y: number }[]>([]);

  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Measure center coordinates of all 30 emblems relative to the container
  const measureCenters = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    centersRef.current = itemRefs.current.map((el) => {
      if (!el) return { x: 0, y: 0 };
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top,
      };
    });
  }, []);

  useEffect(() => {
    measureCenters();
    const timer = setTimeout(measureCenters, 400);
    const handleResize = () => {
      centersRef.current = [];
      measureCenters();
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, [measureCenters]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (centersRef.current.length === 0 || centersRef.current.every((c) => c.x === 0)) {
      measureCenters();
    }
    const containerRect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
    });
  };

  const handlePointerLeave = () => {
    setMousePos(null);
    setHoveredIndex(null);
  };

  // Apple Watch Fish-Eye / Proximity calculation for each emblem
  const getFishEyeStyle = (index: number) => {
    if (shouldReduceMotion) {
      const isItemHovered = hoveredIndex === index;
      return {
        transform: isItemHovered ? 'scale(1.15) translateY(-4px)' : 'scale(1) translateY(0)',
        filter: isItemHovered ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.5) contrast(1.2)',
        opacity: isItemHovered ? 1 : 0.78,
        zIndex: isItemHovered ? 30 : 1,
        isFocused: isItemHovered,
      };
    }

    if (!mousePos) {
      const isItemHovered = hoveredIndex === index;
      return {
        transform: isItemHovered ? 'scale(1.32) translateY(-6px)' : 'scale(1) translateY(0)',
        filter: isItemHovered
          ? 'grayscale(0%) brightness(1) drop-shadow(0 16px 30px rgba(45, 32, 20, 0.25))'
          : 'grayscale(100%) brightness(0.5) contrast(1.2)',
        opacity: isItemHovered ? 1 : 0.78,
        zIndex: isItemHovered ? 40 : 1,
        isFocused: isItemHovered,
      };
    }

    const center = centersRef.current[index];
    if (!center) {
      return {
        transform: 'scale(1) translateY(0)',
        filter: 'grayscale(100%) brightness(0.5) contrast(1.2)',
        opacity: 0.78,
        zIndex: 1,
        isFocused: false,
      };
    }

    const dx = center.x - mousePos.x;
    const dy = center.y - mousePos.y;
    const dist = Math.hypot(dx, dy);

    // Calibrated lens parameters matching the balanced intermediate honeycomb dimensions
    const CORE_RADIUS = 70;   // Focal zone for balanced icons
    const LENS_RADIUS = 240;  // Surrounding bubble field

    // Focused core emblem (direct hit or closest to cursor)
    if (hoveredIndex === index || dist < CORE_RADIUS) {
      const focusT = hoveredIndex === index ? 1 : Math.max(0, 1 - dist / CORE_RADIUS);
      const scale = 1.0 + 0.30 * (0.65 + 0.35 * focusT); // scales to ~1.30x
      return {
        transform: `translate3d(0, -6px, 0) scale(${scale.toFixed(3)})`,
        filter: 'grayscale(0%) brightness(1) drop-shadow(0 18px 32px rgba(45, 32, 20, 0.25))',
        opacity: 1,
        zIndex: 40,
        isFocused: true,
      };
    }

    // Surrounding bubble lens: dynamically displace outward and compress slightly
    if (dist < LENS_RADIUS) {
      const t = (dist - CORE_RADIUS) / (LENS_RADIUS - CORE_RADIUS);
      const pulse = Math.sin(t * Math.PI);
      const pushDist = pulse * 19; // outward push up to 19px
      const angle = Math.atan2(dy, dx);
      const pushX = Math.cos(angle) * pushDist;
      const pushY = Math.sin(angle) * pushDist;
      const scale = 1.0 - 0.10 * pulse; // compress down to ~0.90x

      return {
        transform: `translate3d(${pushX.toFixed(1)}px, ${pushY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`,
        filter: 'grayscale(100%) brightness(0.46) contrast(1.25)',
        opacity: 0.68,
        zIndex: 10,
        isFocused: false,
      };
    }

    // Outside lens influence
    return {
      transform: 'translate3d(0, 0, 0) scale(1)',
      filter: 'grayscale(100%) brightness(0.52) contrast(1.2)',
      opacity: 0.78,
      zIndex: 1,
      isFocused: false,
    };
  };

  // Honeycomb Rows: 5 rows of 6 items = 30 skills
  const ROW_SIZE = 6;
  const rows = [
    tools.slice(0, 6),
    tools.slice(6, 12),
    tools.slice(12, 18),
    tools.slice(18, 24),
    tools.slice(24, 30),
  ];

  return (
    <section id="skills" className="pt-20 sm:pt-28 pb-16 sm:pb-20 bg-[#D8C9B9] text-[#28221D] relative border-t border-[#C9B6A2]/50 section-divider-warm overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.06 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 sm:px-10"
      >
        
        {/* Section Header */}
        <motion.div variants={headerVariants} className="pb-6 mb-10 sm:mb-16 border-b border-[#C9B6A2]/60">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#28221D] tracking-tight">
            Some Technologies I've Worked With...
          </h2>
        </motion.div>

        {/* Staggered Honeycomb Apple Watch-Style Fish-Eye Grid Container */}
        <div
          ref={containerRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="relative flex flex-col items-center justify-center pt-2 sm:pt-4 pb-2 sm:pb-4 select-none touch-pan-y overflow-visible"
        >
          {rows.map((row, rowIndex) => {
            const isOddRow = rowIndex % 2 === 1;
            // Exact mathematical half-pitch horizontal offset ensures odd rows nest directly into adjacent notches
            const rowOffsetClass = isOddRow
              ? 'translate-x-5 sm:translate-x-7 md:translate-x-9 lg:translate-x-10 xl:translate-x-11'
              : '-translate-x-5 sm:-translate-x-7 md:-translate-x-9 lg:-translate-x-10 xl:-translate-x-11';
            // Balanced honeycomb interlocking nesting
            const rowMarginClass = rowIndex === 0 ? '' : '-mt-1 sm:-mt-1.5 md:-mt-2 lg:-mt-2.5';

            return (
              <div
                key={`honeycomb-row-${rowIndex}`}
                className={`flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-11 ${rowOffsetClass} ${rowMarginClass}`}
              >
                {row.map((tool, colIndex) => {
                  const index = rowIndex * ROW_SIZE + colIndex;
                  const style = getFishEyeStyle(index);

                  return (
                    <div
                      key={tool.name}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      onPointerEnter={() => setHoveredIndex(index)}
                      onPointerLeave={() => {
                        if (hoveredIndex === index) setHoveredIndex(null);
                      }}
                      onFocus={() => setHoveredIndex(index)}
                      onBlur={() => setHoveredIndex(null)}
                      tabIndex={0}
                      role="img"
                      aria-label={tool.name}
                      title={tool.name}
                      style={{
                        transform: style.transform,
                        filter: style.filter,
                        opacity: style.opacity,
                        zIndex: style.zIndex,
                        transition: shouldReduceMotion
                          ? 'none'
                          : 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1), filter 300ms ease, opacity 300ms ease',
                        willChange: 'transform, filter, opacity',
                      }}
                      className="flex flex-col items-center justify-start relative cursor-pointer outline-none select-none w-18 sm:w-22 md:w-24 lg:w-28 xl:w-30"
                    >
                      {/* Standalone Symbol: Balanced prominent icon container */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-21 xl:h-21 flex items-center justify-center pointer-events-none p-1 sm:p-1.5">
                        {tool.icon}
                      </div>

                      {/* Skill Name: Reserved height prevents layout jump, revealed smoothly ONLY on hover/focus */}
                      <div className="h-6 sm:h-7 flex items-center justify-center mt-1 sm:mt-1.5 w-full overflow-visible pointer-events-none">
                        <span
                          style={{ color: tool.textColor }}
                          className={`text-[11px] sm:text-xs md:text-sm font-bold tracking-wide text-center whitespace-nowrap drop-shadow-sm transition-all duration-200 ${
                            style.isFocused ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-1'
                          }`}
                        >
                          {tool.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};
