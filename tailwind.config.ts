import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        black: '#0a0a0a',
        white: '#fafafa',
        gray: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#171717',
        },
      },
      letterSpacing: {
        tightest: '-0.05em',
        tight: '-0.025em',
        wide: '0.1em',
        wider: '0.2em',
        widest: '0.3em',
      },
    },
  },
  plugins: [],
}
export default config
