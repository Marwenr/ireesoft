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
        primary: {
          dark: "#2A2A2A", // Dark gray for sidebar
          DEFAULT: "#3A3A3A",
          light: "#4A4A4A",
        },
        accent: {
          red: "#EF4444", // Red for asterisk
          orange: "#F97316", // Orange for circular element
        },
        text: {
          primary: "#1F1F1F", // Dark gray for main text
          secondary: "#6B6B6B", // Light gray for secondary text
          light: "#9B9B9B", // Lighter gray
        },
        background: {
          white: "#FFFFFF",
          light: "#F5F5F5",
          gray: "#E5E5E5",
        },
      },
    },
  },
  plugins: [],
};

export default config;

