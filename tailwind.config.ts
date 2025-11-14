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
        accent: {
          blue: '#2563eb',
          'blue-light': '#3b82f6',
        },
        text: {
          main: '#1e293b',
        },
        bg: {
          main: '#fff',
        },
        divider: '#e2e8f0',
        skills: {
          bg: '#f1f5f9',
        },
      },
      fontFamily: {
        liter: ['Liter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

