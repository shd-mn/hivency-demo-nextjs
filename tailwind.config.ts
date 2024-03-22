import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1364px",
      },
    },
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        questrial: ["var(--font-questrial)"],
      },
      colors: {},
    },
  },
  plugins: [],
};
export default config;
