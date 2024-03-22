import { Outfit, Questrial } from "next/font/google";

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
