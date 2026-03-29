/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
        },
      },
      fontFamily: {
        signature: ['"Momo Signature"', 'cursive'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) rotate(-2deg)' },
          '75%': { transform: 'translateY(-5px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(14, 165, 233, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(14, 165, 233, 0.6), 0 0 60px rgba(6, 182, 212, 0.4)' 
          },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        breath: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(40px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-40px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        flipScale: {
          '0%': { opacity: '0', transform: 'perspective(400px) rotateY(90deg) scale(0.5)' },
          '100%': { opacity: '1', transform: 'perspective(400px) rotateY(0deg) scale(1)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatingBlur: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(5px)', transform: 'translateY(0)' },
          '50%': { opacity: '0.8', filter: 'blur(2px)', transform: 'translateY(-15px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in',
        slideUp: 'slideUp 0.6s ease-out',
        bounceCustom: 'bounce 2s infinite',
        shimmer: 'shimmer 3s infinite',
        wave: 'wave 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'spin-slow': 'spinSlow 8s linear infinite',
        breath: 'breath 3s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'flip-scale': 'flipScale 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'floating-blur': 'floatingBlur 4s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '20px',
        xl: '30px',
      },
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1.1' }],
        '11xl': ['10rem', { lineHeight: '1.1' }],
        '12xl': ['12rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}
