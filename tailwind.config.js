/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      maxWidth: {
        'content': '1200px',
        'content-xl': '1400px',
        'content-2xl': '1600px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Montserrat', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        /* Brand colors from Mentor Junior School Busula logo */
        maroon: '#8B0000',      /* Shield border, pillars – primary brand */
        royal: '#1E3A8A',       /* Shield & banners – secondary brand */
        gold: '#FFD700',        /* Sun icon – accent/highlights */
        'gold-dark': '#D4AF37', /* Softer gold for backgrounds */
        light: '#FFFFFF',
        'soft-gray': '#F9F9F9',
        'dark-bg': '#000000',
        'dark-accent': '#0a0a0a',
      },
    },
  },
  plugins: [],
};
