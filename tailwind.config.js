/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./components/**/*.{astro,js,ts}",
    "./layouts/**/*.{astro,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#1E1E2E',
        textPrimary: '#E0E0E0',
        textSecondary: '#A0A0B0',
        accent: '#FF6F61'
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}
