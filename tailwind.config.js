/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f1f4f9',
          100: '#dde4f0',
          200: '#b6c3dc',
          500: '#2f4a7d',
          700: '#17294d',
          800: '#0f1d3a',
          900: '#0a1428',
        },
        gold: {
          300: '#e6cf9a',
          400: '#d4b56a',
          500: '#c29b43',
          600: '#a88231',
        },
        paper: '#faf8f4',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,20,40,0.04), 0 8px 24px rgba(10,20,40,0.06)',
      },
    },
  },
  plugins: [],
}
