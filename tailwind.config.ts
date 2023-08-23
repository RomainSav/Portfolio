import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: {
        DEFAULT: "#FFFFFF",
        100: "#C6C6C6",
        200: "#A9A9A9"
      },
      gray: {
        100: "#161616",
        200: "#212121",
        300: "#2c2c2c",
        400: "#373737"
      },
      green: "#28C780"
    },

    fontFamily: {
      "sans": ["Poppins", "sans-serif"]
    },

    container: {
      center: true,
      padding: "2rem"
    }
  },
  plugins: []
};
export default config;