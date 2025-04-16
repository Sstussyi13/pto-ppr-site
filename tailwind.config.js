export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    'bg-white', 'text-gray-800', 'text-muted', 'bg-light',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',
        accent: '#374151',
        muted: '#6b7280',
        light: '#f3f4f6',
        background: '#ffffff',
      },
    },
  },
  plugins: [],
};
