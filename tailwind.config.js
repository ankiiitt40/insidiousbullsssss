/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ff99',
        accent: '#22d3ee',
        dark: {
          bg: '#0a0e27',
          card: '#11172e',
          border: '#1e2749',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(0, 255, 153, 0.3)',
        'glow-sm': '0 0 15px rgba(0, 255, 153, 0.2)',
        'glow-accent': '0 0 30px rgba(34, 211, 238, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 255, 153, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(0, 255, 153, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
