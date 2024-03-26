import { Outfit, Questrial } from "next/font/google";
import localFont from "next/font/local";

export const questrial = Questrial({
  subsets: ["latin"],
  variable: "--font-questrial",
  display: "swap",
  weight: ["400"],
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const icomoon = localFont({
  src: [
    {
      path: "../public/fonts/icomoon.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-icomoon",
});
export const faSolid = localFont({
  src: [
    {
      path: "../public/fonts/fa-solid-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-fa-solid",
});
export const faBrand = localFont({
  src: [
    {
      path: "../public/fonts/fa-brands-400.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-fa-brand",
});
