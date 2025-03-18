/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'glitch1': 'glitch1 2.5s infinite',
        'glitch2': 'glitch2 2.5s infinite',
      },
    },
  },
  plugins: [],
};