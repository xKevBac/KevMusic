/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        waveScale: {
          '0%, 100%': { transform: 'scale(1) rotate(-1deg)' },
          '50%': { transform: 'scale(1.1) rotate(1deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        wave: 'waveScale 3s ease-in-out infinite',
        slowSpin: 'spin 5s linear infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
