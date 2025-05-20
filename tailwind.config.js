
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Add your brand colors here
        'primary': '#FF6B6B', // Example cake-themed color
        'secondary': '#F9F1F0', // Light pink/cream color
        'accent': '#4ECDC4', // Complementary accent
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}