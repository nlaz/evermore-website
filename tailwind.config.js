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
        // Primary brand colors from style guide
        'ink-black': '#1A1A1A',
        'forest-charcoal': '#2E2F2C',
        'moss-olive': '#3C3F2D',
        'soft-ivory': '#F9F7F2',
        // Removed custom accent colors to align with style guide
        'warm-gray': '#E5E2DC'
      },
      fontFamily: {
        'mortuary': ['var(--font-mortuary)', 'serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'texture-pattern': "url('/images/subtle-texture.png')",
      },
      animation: {
        'slow-pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-up': 'fadeInUp 1.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
          },
          '100%': { 
            opacity: '1',
          },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
    },
  },
  plugins: [],
}