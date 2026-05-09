/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas:    ['Bebas Neue', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter:    ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          red:        '#E60000', // Bright red from "Guada"
          'red-light':'#FF3333',
          purple:     '#7A00FF', // Neon purple
          magenta:    '#FF00AA', // Neon pink/magenta accent
          // Dark theme surfaces
          dark:       '#0A0118', // Deep purple/black
          'dark-2':   '#130526', // Lighter purple-dark
          'dark-3':   '#1E0A3C', // Even lighter
        },
      },
      keyframes: {
        'laser-pulse': {
          '0%, 100%': { opacity: '0.4', width: '60%' },
          '50%':       { opacity: '0.8', width: '75%' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
      },
      animation: {
        'laser-pulse': 'laser-pulse 4s ease-in-out infinite',
        'fade-up':     'fade-up 0.7s ease forwards',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
