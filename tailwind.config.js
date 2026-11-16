/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#d5d9df',
          300: '#b1b8c2',
          400: '#878f9d',
          500: '#6b7280',
          600: '#525964',
          700: '#374151',
          800: '#1f2937',
          900: '#16181d',
          950: '#0c0d11',
        },
        brand: {
          50: '#fef7ee',
          100: '#fdedd7',
          200: '#fbd7aa',
          300: '#f6a55e',
          400: '#f38e3f',
          500: '#f06e1c',
          600: '#d95413',
          700: '#b23c12',
          800: '#8f3114',
          900: '#541c09',
          950: '#3f1105',
        },
        accent: {
          50: '#edfcf6',
          100: '#d3f8e9',
          200: '#acf0d5',
          300: '#52f4b8',
          400: '#1de2a0',
          500: '#04c288',
          600: '#03a675',
          700: '#057a58',
          800: '#076046',
          900: '#063f2d',
          950: '#022c20',
        },
        gold: {
          400: '#f0c75e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0)' },
          '100%': { transform: 'scale(1.15) translate(-2%, -2%)' },
        },
        marquee: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-50%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
        marquee: 'marquee 40s linear infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
