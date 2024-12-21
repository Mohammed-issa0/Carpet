/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#f8f7ff',
          100: '#f0eeff',
          200: '#e0dcff',
          300: '#c5bdff',
          400: '#a391ff',
          500: '#8661ff',
          600: '#7a3ff7',
          700: '#6b2de6',
          800: '#5a25c4',
          900: '#4b209f',
        },
        gold: {
          50: '#fbf7eb',
          100: '#f7efd7',
          200: '#efddb0',
          300: '#e7cb89',
          400: '#dfb962',
          500: '#d7a73b',
          600: '#cf952e',
          700: '#c78327',
          800: '#bf7120',
          900: '#b75f19',
        },
      },
      fontFamily: {
        primary: ['Cairo', 'sans-serif'],
        body: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}