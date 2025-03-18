/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#B5CDA3',
          light: '#c7dbb8',
          dark: '#9ab889',
        },
        secondary: {
          DEFAULT: '#A9DFF7',
          light: '#bfe7f9',
          dark: '#8cd1f0',
        },
      },
    },
  },
  plugins: [],
}