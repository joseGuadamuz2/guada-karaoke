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
          red:        '#C0392B',
          'red-light':'#E74C3C',
          purple:     '#7C3AED',
          blue:       '#2563EB',
          // Light theme surfaces
          dark:       '#F8F7F4',
          'dark-2':   '#F2F0EC',
          'dark-3':   '#E8E5DF',
        },
      },
      keyframes: {
        'laser-pulse': {
          '0%, 100%': { opacity: '0.2', width: '60%' },
          '50%':       { opacity: '0.5', width: '75%' },
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
