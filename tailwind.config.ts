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
        "2xl": "1392px",
      },
    },
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        questrial: ["var(--font-questrial)"],
        icomoon: ["var(--font-icomoon)"],
        faSolid: ["var(--font-fa-solid)"],
        faBrand: ["var(--font-fa-brand)"],
      },
      colors: {
        primary: "#FFCC7E",
        secondary: "#BDEFFB",
        "black-100": "#161616",
        "g-accent": "#0066D9",
        "g-gray": "#474747",
        "g-light1": "#ECF2FF",
        "g-light2": "#FBF8EE",
        "g-light3": "#FFE3EE",
        "g-shadow": "#c7ceda40",
      },
      animation: {
        "rotate-y": "rotate-y 0.7s ease-in-out",
        "move-x": "move-x 3.5s ease-in-out infinite",
        "move-y": "move-y 3.5s ease-in-out infinite",
        "ping-s": "ping-s 2s ease-in-out infinite",
        scale: "scale 3.5s ease-in-out infinite",
      },
      keyframes: {
        "rotate-y": {
          "0%": { transform: "rotateY(360deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        "move-x": {
          "0%, 100%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
        },
        "move-y": {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.7)" },
        },
        "ping-s": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(2)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
