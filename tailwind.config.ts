import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          purple: '#7C3AED',
          'purple-light': '#8B5CF6',
          cyan: '#38B2AC',
          'cyan-light': '#4FD1C7',
        },
        text: {
          main: '#333333',
        },
        bg: {
          main: '#FFFFFF',
        },
        divider: '#E5E7EB',
        skills: {
          bg: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
export default config

