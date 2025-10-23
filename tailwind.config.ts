import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'g2b-yellow': 'rgb(231, 170, 39)',
        'g2b-red': 'rgb(144, 3, 2)',
        'g2b-purple': 'rgb(50, 2, 113)',
      },
    },
  },
  plugins: [],
};
export default config;
