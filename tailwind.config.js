/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#D4AF37',
        'primary': '#000000',
        'secondary': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      height: {
        'screen-90': '90vh',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}