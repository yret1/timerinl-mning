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
        landing: "#000000",
        bg: "#EEEEEE",
        primary: "#222222",
      },

      fontFamily: {
        sans: ["PT Sans", "sans-serif"],
        right: ["Righteous", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
