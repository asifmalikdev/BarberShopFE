import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#003366',
        'brand-red': '#CC0000',
        'brand-white': '#FFFFFF',
        'brand-off-white': '#F8F9FA',
        'brand-dark-text': '#2D3748',
        'brand-light-gray': '#CBD5E0',
        'brand-gold': '#D4AF37',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
export default config