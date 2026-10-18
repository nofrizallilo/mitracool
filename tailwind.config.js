/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Industrial Eco Palette
        carbon: {
          50: '#f2f2f0',
          100: '#e4e4df',
          200: '#c9c9bf',
          300: '#aeaea0',
          400: '#939380',
          500: '#787860',
          600: '#5c5c48',
          700: '#404030',
          800: '#242418',
          900: '#0c0c06',
          950: '#060603',
        },
        slate: {
          50: '#f5f6f5',
          100: '#eaecea',
          200: '#d0d4d0',
          300: '#b5bbb5',
          400: '#8d958d',
          500: '#6b756b',
          600: '#4e574e',
          700: '#353d35',
          800: '#1e241e',
          900: '#0a0d0a',
        },
        eco: {
          50: '#edf7ff',
          100: '#dfeffc',
          200: '#c6e1fb',
          300: '#9fcff8',
          400: '#78b9f4',
          500: '#5aa1eb',
          600: '#3e8fe0',
          700: '#2f75b8',
          800: '#1d4d7f',
          900: '#102b4b',
        },
        copper: {
          50: '#fdf4ef',
          100: '#fbe8de',
          200: '#f5cebc',
          300: '#eeb49a',
          400: '#e49978',
          500: '#d67d56',
          600: '#b85e38',
          700: '#8f4225',
          800: '#672a13',
          900: '#3e1507',
        },
        blueprint: {
          50: '#eef4ff',
          100: '#dde9ff',
          200: '#b3cfff',
          300: '#85b1ff',
          400: '#5590ff',
          500: '#2d6fff',
          600: '#1a52e0',
          700: '#1039b0',
          800: '#082480',
          900: '#030e50',
          950: '#010828',
        },
        cream: '#f7f5f0',
        ash: '#e8e6e1',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Courier New"', 'Courier', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        blueprint: ['"Share Tech Mono"', '"Courier New"', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid': `
          linear-gradient(rgba(45,111,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(45,111,255,0.06) 1px, transparent 1px)
        `,
        'blueprint-grid-sm': `
          linear-gradient(rgba(45,111,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(45,111,255,0.04) 1px, transparent 1px)
        `,
        'eco-gradient': 'linear-gradient(135deg, #0c0c06 0%, #1e2418 50%, #122018 100%)',
        'carbon-gradient': 'linear-gradient(180deg, #0c0c06 0%, #1e241e 100%)',
      },
      backgroundSize: {
        'grid-40': '40px 40px',
        'grid-20': '20px 20px',
        'grid-80': '80px 80px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'counter': 'counter 2s ease-out forwards',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
