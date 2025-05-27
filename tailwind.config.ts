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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgba(34, 228, 246, 0.4)",
        secondary: "rgba(255, 255, 255, 1)",
      },
      spacing: {
        "12xl": "125rem",
        "18": "4.375rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
