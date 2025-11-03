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
        // Core Brand Colors (Official Evermore Brand Package)
        'golden-ochre': '#AF8E5C',      // Primary accent - RGB(175, 142, 92)
        'midnight-moss': '#273229',      // Dark foundation - RGB(39, 50, 41)
        'charred-plum': '#362630',       // Rich dark accent - RGB(54, 38, 48)
        'deep-plum': '#2A1D26',          // Darker plum variant - RGB(42, 29, 38)
        'darkest-plum': '#1F151B',       // Darkest plum variant - RGB(31, 21, 27)

        // Supporting Palette
        'soft-parchment': '#D8C8B8',     // Light background - RGB(216, 200, 184)
        'stone-sage': '#5A685C',         // Muted green - RGB(90, 104, 92)
        'deep-slate': '#333E4E',         // Cool dark - RGB(51, 62, 78)
        'muted-rose': '#A4816D',         // Warm neutral - RGB(164, 129, 109)
        'lilac-mist': '#918A94',         // Subtle purple-gray - RGB(145, 138, 148)
        'pale-stone': '#C8C2B8',         // Neutral background - RGB(200, 194, 184)

        // Semantic aliases for easier use
        'primary': '#AF8E5C',            // golden-ochre
        'secondary': '#273229',          // midnight-moss
        'accent': '#362630',             // charred-plum
      },
      fontFamily: {
        'heading': ['NN Konrad', 'serif'],
        'sans': ['Untitled Sans', 'system-ui', 'sans-serif'],
        'body': ['Untitled Sans', 'system-ui', 'sans-serif'],
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