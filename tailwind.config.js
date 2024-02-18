/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    clipPath: {
      hero: "polygon(\n" +
          "    0 0, /* left top */\n" +
          "    100% 0, /* right top */\n" +
          "    100% 100%, /* right bottom */\n" +
          "    0 90% /* left bottom */\n" +
          "  )",
      section: "polygon(\n" +
          "    0 0, /* left top */\n" +
          "    100% 10%, /* right top */\n" +
          "    100% 100%, /* right bottom */\n" +
          "    0 90% /* left bottom */\n" +
          "  )",
    },
    extend: {
      fontFamily: {
        'pro-black': ['var(--font-proxima-nova-black)'],
        'pro-medium': ['var(--font-proxima-nova-medium)'],
        'pro-light': ['var(--font-proxima-nova-light)']
      },
      flexBasis: {
        "1/3-gap-6": "calc(33.3% - (2/3 * 1.5rem))",
        "1/2-gap-6": "calc(50% - (1/2 * 1.5rem))"
      },
      width: {
        "1/2-gap-6": "calc(50% - (1/2 * 1rem))",
      },
      colors: {
        'dark': '#1e1d2b',
        'brand-yellow': '#F19C1E',
        'brand-grey': '#3B3B3B',
        'brand-blue': '#4892E9',
        'brand-dark-blue': '#0A1D7E'
      },
      backgroundImage: ({ theme }) => ({
        'brand-half-border': `linear-gradient(to top right, ${theme('colors.brand-yellow')} 0%, ${theme('colors.dark')} 42%, ${theme('colors.dark')} 100%)`,
        'brand-border': `linear-gradient(to bottom right, ${theme('colors.brand-yellow')} 0%, ${theme('colors.dark')} 42%, ${theme('colors.dark')} 59%, ${theme('colors.brand-yellow')} 100%)`,
        'brand-hover-border': `linear-gradient(to bottom right, ${theme('colors.white')} 0%, ${theme('colors.dark')} 50%, ${theme('colors.white')} 100%)`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-clip-path'),
  ],
}
