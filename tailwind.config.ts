import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        g2b: {
          purple: '#4a2772',        // Roxo principal (header)
          darkpurple: '#562E84',    // Roxo escuro (fundo body)
          lightpurple: '#4D2977',   // Roxo claro (títulos)
          brown: '#8F654D',         // Marrom (navegação)
          gray: '#535355',          // Cinza (textos)
          darkgray: '#333333',      // Cinza escuro
          yellow: '#EEC218',        // Amarelo (destaques)
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'body-pattern': "url('/images/bkg_body.png')",
        'header-pattern': "url('/images/bkg_header.png')",
        'home-txt': "url('/images/bkg_home_txt.jpg')",
        'home-sidebar': "url('/images/bkg_home_sidebar.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
