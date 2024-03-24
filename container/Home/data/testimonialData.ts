import { StaticImageData } from "next/image";
import client1 from "@/public/assets/images/client-1.jpg";
import client2 from "@/public/assets/images/client-2.jpg";
import client3 from "@/public/assets/images/client-2.jpg";

import dropbox from "@/public/assets/images/dropbox-1.png";
import databricks from "@/public/assets/images/databricks-1.png";
import google from "@/public/assets/images/google-1.png";
import trustpilot from "@/public/assets/images/trustpilot-1.png";
import notion from "@/public/assets/images/notion-1.png";

export interface TestimonialDataType {
  name: string;
  text: string;
  image: StaticImageData;
  prof: string;
}

export const testimonialData: TestimonialDataType[] = [
  {
    name: "Jane Cooper",
    text: "“Ut enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation ullamco laboris aliquip ad minim veniam, quis nostrud exer”",
    image: client1,
    prof: "CEO",
  },
  {
    name: "John Allendane",
    text: "“Ut enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation ullamco laboris aliquip ad minim veniam, quis nostrud exer”",
    image: client2,
    prof: "Creative manager",
  },
  {
    name: "Esther Howard",
    text: "“Ut enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation ullamco laboris aliquip ad minim veniam, quis nostrud exer”",
    image: client3,
    prof: "Ui designer",
  },
];

export const testimonialBrands = [
  dropbox,
  databricks,
  google,
  trustpilot,
  notion,
];
