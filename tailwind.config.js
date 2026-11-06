/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aksara-dark': '#1a1a1a',
        'aksara-brown': '#8c6b4a',
        'aksara-cream': '#f8f5f0',
      }
    },
  },
  plugins: [],
}