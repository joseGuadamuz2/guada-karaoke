/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ── Fuentes ──────────────────────────────────────────────────────────────
      fontFamily: {
        bebas:    ['Bebas Neue', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter:    ['Inter', 'sans-serif'],
      },

      // ── Colores de marca ──────────────────────────────────────────────────────
      colors: {
        brand: {
          red:        '#C0392B',
          'red-light':'#E74C3C',
          purple:     '#8B5CF6',
          blue:       '#3B82F6',
          dark:       '#050505',
          'dark-2':   '#0A0A0A',
          'dark-3':   '#111111',
        },
      },

      // ── Animaciones personalizadas ────────────────────────────────────────────
      keyframes: {
        'laser-pulse': {
          '0%, 100%': { opacity: '0.3', width: '60%' },
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

      // ── Transiciones extra ────────────────────────────────────────────────────
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
