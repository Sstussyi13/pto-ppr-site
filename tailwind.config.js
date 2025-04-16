import { join } from "path";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", join(__dirname, "./src/**/*.{js,ts,jsx,tsx}")],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',      // Тёмно-серый (gray-800)
        accent: '#374151',       // Акцентный серый (gray-700)
        muted: '#6b7280',        // Слабый текст (gray-500)
        light: '#f3f4f6',        // Светлый фон (gray-100)
        background: '#ffffff',   // Белый фон
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
