import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-dosis)"],
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
