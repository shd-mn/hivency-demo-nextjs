import { StaticImageData } from "next/image";

import img1 from "@/public/assets/images/image-1-large-1.jpg";
import img2 from "@/public/assets/images/image-2-large.jpg";
import img3 from "@/public/assets/images/image-1-large.jpg";
import img4 from "@/public/assets/images/image-6-3.jpg";
import img5 from "@/public/assets/images/image-4-1.jpg";
import img6 from "@/public/assets/images/image-5-1.jpg";

export interface PortfolioDataType {
  title: string;
  image: StaticImageData;
}

export const portfolioData: PortfolioDataType[] = [
  {
    title: "Mobile app design",
    image: img1,
  },
  {
    title: "App developments",
    image: img2,
  },
  {
    title: "Blockchain development",
    image: img3,
  },
  {
    title: "Artificial intelligence",
    image: img4,
  },
  {
    title: "Web design",
    image: img5,
  },
  {
    title: "Mobile app design",
    image: img6,
  },
];
