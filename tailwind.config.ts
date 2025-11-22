import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium Dark Mode Palette
        dark: {
          bg: '#050505', // Ultra dark, almost black
          'bg-secondary': '#0a0a0a', // Slightly lighter
          'bg-tertiary': '#121212', // Card background
          border: '#222222',
          text: '#EAEAEA',
          'text-muted': '#A0A0A0',
        },
        // Luxurious Accents
        accent: {
          gold: '#D4AF37', // Classic Gold
          'gold-light': '#F4E4B7',
          'gold-dark': '#B8941E',
          'neon-gold': '#FFD700', // Pop for interactions
          blue: '#2E5CFF', // Electric Blue for modern touch
          'blue-dark': '#1A3ABF',
        },
        // Semantic Colors (Refined)
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43', // Deep Navy
        },
        burgundy: {
          500: '#E03E3E',
          700: '#A61B1B',
          900: '#5C0D0D',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-sans)', 'sans-serif'], // Force sans-serif for titles
        mono: ['Consolas', 'monospace'],
      },
      spacing: {
        // Golden Ratio / Editorial Spacing
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #121212 0deg, #0a0a0a 180deg, #121212 360deg)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'reveal': 'reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
