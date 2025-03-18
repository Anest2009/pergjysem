/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      colors: {
        primary: '#FA4A4E',
        secondary: '#FF7E39',
        dark: '#0F1014',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 15s ease-in-out infinite',
        'float-slow': 'float-slow 15s ease-in-out infinite',
        'float-slower': 'float-slower 20s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'pulse-slower': 'pulse-slower 12s ease-in-out infinite',
        'glow': 'glow 10s ease-in-out infinite',
        'glow-slow': 'glow-slow 15s ease-in-out infinite',
        'glow-slow-reverse': 'glow-slow-reverse 15s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 8s ease-in-out infinite',
        'gradient-slow': 'gradient-slow 10s ease-in-out infinite',
        'ray-rotate': 'ray-rotate 20s linear infinite',
        'mesh-rotate': 'mesh-rotate 30s linear infinite',
        'mesh-rotate-reverse': 'mesh-rotate-reverse 20s linear infinite',
        'spotlight': 'spotlight 10s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
        'grid-flow': 'grid-flow 20s linear infinite',
        'orb-float': 'orb-float 15s ease-in-out infinite',
        'orb-float-reverse': 'orb-float-reverse 15s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 4s ease-in-out infinite',
        'neon-pulse-delayed': 'neon-pulse-delayed 4s ease-in-out infinite',
        'particle': 'particle 2s ease-in-out infinite',
        'scanline': 'scanline 1s steps(30) infinite',
        'mesh-drift': 'mesh-drift 30s linear infinite',
        'float-elegant': 'float-elegant 20s ease-in-out infinite',
        'float-elegant-reverse': 'float-elegant-reverse 20s ease-in-out infinite',
        'aurora-shift': 'aurora-shift 15s ease-in-out infinite',
        'subtle-rotate': 'subtle-rotate 180s linear infinite',
        'subtle-drift': 'subtle-drift 50s linear infinite',
        'luxury-float': 'luxury-float 25s ease-in-out infinite',
        'luxury-float-reverse': 'luxury-float-reverse 25s ease-in-out infinite',
        'super-slow-spin': 'super-slow-spin 120s linear infinite',
        'subtle-grain': 'subtle-grain 12s steps(12) infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-30px) translateX(15px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(2%, 2%) rotate(2deg)' },
          '50%': { transform: 'translate(-1%, 3%) rotate(-1deg)' },
          '75%': { transform: 'translate(-2%, -1%) rotate(1deg)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(-2%, 1%) rotate(-2deg)' },
          '50%': { transform: 'translate(1%, -2%) rotate(1deg)' },
          '75%': { transform: 'translate(2%, 2%) rotate(-1deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.5 },
        },
        'pulse-slower': {
          '0%, 100%': { opacity: 0.15 },
          '50%': { opacity: 0.4 },
        },
        'glow': {
          '0%, 100%': { opacity: 0.3, transform: 'translateY(0)' },
          '50%': { opacity: 0.5, transform: 'translateY(-5%)' },
        },
        'glow-slow': {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)', opacity: '0.2' },
          '50%': { transform: 'scale(1.1) translate(2%, 2%)', opacity: '0.3' }
        },
        'glow-slow-reverse': {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)', opacity: '0.15' },
          '50%': { transform: 'scale(1.1) translate(-2%, 2%)', opacity: '0.25' }
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.05' },
          '50%': { opacity: '0.1' }
        },
        'gradient-slow': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.9' }
        },
        'ray-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'mesh-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'mesh-rotate-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        'spotlight': {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.15' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.1)', opacity: '0.2' }
        },
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' }
        },
        'grid-flow': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' }
        },
        'orb-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(5%, 5%) scale(1.1)' }
        },
        'orb-float-reverse': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-5%, -5%) scale(1.1)' }
        },
        'neon-pulse': {
          '0%, 100%': { opacity: 0.5, blur: '2px' },
          '50%': { opacity: 0.8, blur: '3px' }
        },
        'neon-pulse-delayed': {
          '0%, 100%': { opacity: 0.3, blur: '2px' },
          '50%': { opacity: 0.6, blur: '3px' }
        },
        'particle': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: 0 },
          '50%': { transform: 'translateY(-20px) scale(2)', opacity: 1 },
          '100%': { transform: 'translateY(-40px) scale(1)', opacity: 0 }
        },
        'scanline': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(4px)' }
        },
        'mesh-drift': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-40px)' }
        },
        'float-elegant': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(3%, 3%) scale(1.05)' }
        },
        'float-elegant-reverse': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-3%, -3%) scale(1.05)' }
        },
        'aurora-shift': {
          '0%': { transform: 'rotate(35deg) translateX(0)' },
          '50%': { transform: 'rotate(35deg) translateX(5%)' },
          '100%': { transform: 'rotate(35deg) translateX(0)' }
        },
        'subtle-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'subtle-drift': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-60px)' }
        },
        'luxury-float': {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.07' },
          '50%': { transform: 'translate(2%, 2%) scale(1.02)', opacity: '0.09' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.07' }
        },
        'luxury-float-reverse': {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.07' },
          '50%': { transform: 'translate(-2%, -2%) scale(1.02)', opacity: '0.09' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.07' }
        },
        'super-slow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'subtle-grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -2%)' },
          '20%': { transform: 'translate(-3%, 1%)' },
          '30%': { transform: 'translate(1%, -3%)' },
          '40%': { transform: 'translate(-1%, 2%)' },
          '50%': { transform: 'translate(-3%, -1%)' },
          '60%': { transform: 'translate(2%, 2%)' },
          '70%': { transform: 'translate(-2%, 2%)' },
          '80%': { transform: 'translate(3%, -1%)' },
          '90%': { transform: 'translate(-1%, -1%)' }
        }
      },
    },
  },
  plugins: [],
}