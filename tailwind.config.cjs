/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D12",
        accent: "#C9A84C",
        background: "#FAF8F5",
        "dark-text": "#2A2A35",
      },
      fontFamily: {
        heading: ['"Inter"', 'sans-serif'],
        drama: ['"Playfair Display"', 'serif'],
        data: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      }
    },
  },
  plugins: [],
}
