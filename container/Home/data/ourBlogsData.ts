import { StaticImageData } from "next/image";
import img1 from "@/public/assets/images/blog-image-1.jpg";
import img2 from "@/public/assets/images/blog-image-2.jpg";
import img3 from "@/public/assets/images/blog-image-3.jpg";

export interface ourBlogsType {
  title: string;
  desc: string;
  link: string;
  image: StaticImageData;
  color: string;
}

export const ourBlogs: ourBlogsType[] = [
  {
    title: "UI/UX Trends",
    desc: "Branding personality: What makes you stand out",
    link: "#",
    image: img1,
    color: "bg-secondary",
  },
  {
    title: "Digital Marketing",
    desc: "Is the generic visual brand logo guide outdated?",
    link: "#",
    image: img2,
    color: "bg-primary",
  },
  {
    title: "Content Creation",
    desc: "Ten business idea make grow up easily use our",
    link: "#",
    image: img3,
    color: "bg-g-light3",
  },
];
