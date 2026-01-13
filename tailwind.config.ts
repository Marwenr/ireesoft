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
        // Primary brand color
        primary: {
          DEFAULT: "#311081",
          50: "#f6f1fc",
          100: "#ebeaf6",
          200: "#e0e8ff",
          500: "#311081",
          600: "#1c1629",
          withOpacity: "#3110814d",
        },
        // Secondary/Accent color
        secondary: {
          DEFAULT: "#bd45e6",
          500: "#bd45e6",
        },
        accent: {
          DEFAULT: "#bd45e6",
          500: "#bd45e6",
          light: "#96b1ff",
        },
        // Background colors
        background: {
          DEFAULT: "#ffffff",
          secondary: "#f6f1fc",
          muted: "#ebeaf6",
          light: "#e0e8ff",
          pink: "#fadcec",
        },
        // Text colors
        foreground: {
          DEFAULT: "#1c1629",
          muted: "#00000080",
          light: "#ffffffb3",
        },
        // Border colors
        border: {
          DEFAULT: "#ebeaf6",
          light: "#e0e8ff",
          muted: "#f6f1fc80",
        },
        // Semantic colors
        muted: {
          DEFAULT: "#ebeaf6",
          light: "#e0e8ff",
          pink: "#fadcec",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: "14px",
      },
      borderRadius: {
        DEFAULT: "8px",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;

