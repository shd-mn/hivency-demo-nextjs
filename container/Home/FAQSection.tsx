"use client";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import "swiper/css";
import "swiper/css/navigation";

import Accordion from "@/components/UI/Accordion";
import { faqData } from "./data/faqData";

function FAQSection() {
  return (
    <section
      className="relative h-full w-full bg-g-light2 bg-scroll py-[106px] after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-black-100/5 after:content-['']"
      style={{
        backgroundImage: `url('/assets/images/testimonial.jpg')`,
      }}
    >
      <div className="container relative z-20">
        <header className="mb-12 flex w-full flex-col items-center justify-center px-80">
          <SubTitle title="Our FAQ" className="mb-5" />
          <Title
            part1="Frequently asked "
            underLine="goals"
            className="mb-10 text-center font-outfit text-[50px] font-medium leading-[60px] tracking-tight"
          />
          <p className="text-center text-lg">
            Nemo enim ipsam voluptatem quia voluptas sit asper natur aut oditut
            fugit Nemo enim ipsam voluptatem .
          </p>
        </header>

        <div className="grid grid-cols-2 items-start gap-x-8 gap-y-5">
          {faqData.map((item, idx) => (
            <Accordion key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
