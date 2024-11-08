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
        'aitools' : '#8fc48d',
        'aigray' : '#d1d0d0'
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
