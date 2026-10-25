/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        champagne: {
          light: '#F7F2EC',
          DEFAULT: '#ECE2D7',
          dark: '#E2D4C5',
        },
        'pearl-stone': {
          light: '#E5DCD0',
          DEFAULT: '#D8C9B9',
          dark: '#C8B5A2',
        },
        'light-caramel': {
          light: '#D5C5B3',
          DEFAULT: '#C9B6A2',
          dark: '#BBA48E',
        },
        'mocha-latte': {
          light: '#B79D85',
          DEFAULT: '#A78B71',
          dark: '#96785F',
        },
        'caramel-brown': {
          light: '#A38469',
          DEFAULT: '#907258',
          dark: '#7D6149',
        },
        'deep-mocha': {
          light: '#72553B',
          DEFAULT: '#60472F',
          dark: '#4B3622',
        },
        'dark-text': {
          light: '#3D342D',
          DEFAULT: '#28221D',
          muted: '#62584F',
          faint: '#8D8176',
        },
        // Backwards compatibility mappings
        cream: {
          light: '#FDFBF7',
          DEFAULT: '#ECE2D7',
          dark: '#D8C9B9',
          deep: '#C9B6A2',
        },
        peach: {
          light: '#ECE2D7',
          DEFAULT: '#D8C9B9',
          dark: '#C9B6A2',
          deep: '#A78B71',
        },
        terracotta: {
          light: '#A78B71',
          DEFAULT: '#907258',
          dark: '#60472F',
          deep: '#4B3622',
        },
        ink: {
          light: '#3D342D',
          DEFAULT: '#28221D',
          muted: '#62584F',
          faint: '#8D8176',
          border: 'rgba(40, 34, 29, 0.12)',
        },
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', '"Alex Brush"', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.015em',
        editorial: '0.12em',
        kicker: '0.2em',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(96, 71, 47, 0.08)',
        'soft-lg': '0 10px 30px -4px rgba(96, 71, 47, 0.12)',
        'plate': '0 2px 10px rgba(96, 71, 47, 0.06)',
      },
    },
  },
  plugins: [],
};
