/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#1A1A1A',
        'forest-charcoal': '#2E2F2C',
        'moss-olive': '#3C3F2D',
        'soft-ivory': '#F9F7F2'
      },
      fontFamily: {
        'mortuary': ['var(--font-mortuary)', 'serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}