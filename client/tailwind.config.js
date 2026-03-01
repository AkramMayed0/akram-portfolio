/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        bg: '#080808',
        surface: '#0f0f0f',
        border: '#1a1a1a',
        accent: '#00ff87',
        accent2: '#0aefff',
        muted: '#4a4a4a',
        text: '#e8e8e8',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #00ff87, 0 0 20px #00ff87' },
          '100%': { textShadow: '0 0 20px #00ff87, 0 0 40px #00ff87, 0 0 60px #00ff87' },
        }
      }
    },
  },
  plugins: [],
}
