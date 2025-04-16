const { join } = require("path");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", join(__dirname, "./src/**/*.{js,ts,jsx,tsx}")],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',      // тёмно-серый (примерно gray-800)
        accent: '#374151',       // чуть светлее (gray-700)
        muted: '#6b7280',        // текст второго уровня
        light: '#f3f4f6',        // светлый фон (gray-100)
        background: '#ffffff',   // основной фон
      },
    },
  },
  plugins: [],
};
