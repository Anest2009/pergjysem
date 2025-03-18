/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3739a8',
        secondary: '#3f4bc1',
        accent: '#485eda',
        highlight: '#5171f3',
        background: '#fcfcfc',
      },
    },
  },
  plugins: [],
}