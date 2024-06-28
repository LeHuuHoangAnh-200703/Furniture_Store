/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      },
      colors: {
        gray: {
          900: '#171838'
        },
        teal: {
          500: '#3AA39F'
        }
      }
    },
  },
  plugins: [],
}

