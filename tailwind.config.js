/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#050510',
          800: '#0a0a1f',
        },
        gold: {
          400: '#FFD700',
          500: '#FFA500',
        },
        cyan: {
          400: '#00CED1',
        },
      },
    },
  },
  plugins: [],
}