import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#010101",
        foreground: "#ffffff",
        primary: "rgba(34, 228, 246, 0.4)",
        secondary: "rgba(255, 255, 255, 0.7)",
        "black-300": "rgba(255, 255, 255, 0.11)",
      },
      spacing: {
        "12xl": "125rem",
        "15": "3.75rem",
        "18": "4.375rem",
        "25": "6.25rem",
        "100": "25rem",
      },
      letterSpacing: {
        1.5: "0.156em",
      },
      lineHeight: {
        "7.5": "1.9688rem",
      },
      fontSize: {
        "2.1xl": "1.5625rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
