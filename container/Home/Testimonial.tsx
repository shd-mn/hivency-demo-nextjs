"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import "swiper/css";
import "swiper/css/navigation";

import quote from "@/public/assets/images/quote.png";
import bgImg from "@/public/assets/images/testimonial.jpg";
import { testimonialBrands, testimonialData } from "./data/testimonialData";

function Testimonial() {
  return (
    <section className="relative w-full pb-[60px] pt-[106px]">
      <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-g-light2">
        <Image
          src={bgImg}
          alt=""
          quality={100}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container relative">
        <header className="mb-12 flex w-full flex-col items-center justify-center px-80">
          <SubTitle title="Testimonial" className="mb-5" />
          <Title
            part1="People "
            underLine="talk"
            part2=" about us"
            className="mb-10 text-center font-outfit text-[50px] font-medium leading-[60px] tracking-tight"
          />
          <p className="text-lg text-center">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officiade
          </p>
        </header>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mb-24 h-full w-full"
          loop
        >
          {testimonialData.map((item, idx) => (
            <SwiperSlide key={idx} className="">
              <div className="flex flex-col items-center gap-14">
                <Image src={quote} alt={item.text} />
                <p className="px-44 text-center font-outfit text-2xl text-g-gray">
                  {item.text}
                </p>

                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.text}
                    className="rounded-full"
                  />
                  <span>
                    <h5 className="font-outfit text-2xl font-medium">
                      {item.name}
                    </h5>
                    <p className="text-lg">{item.prof}</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          className="mySwiper h-full w-full"
          loop
        >
          {testimonialBrands.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`group block h-[100px] py-4 font-outfit text-lg font-medium duration-500`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap duration-700 group-hover:-translate-y-20">
                    <Image
                      src={item}
                      alt=""
                      className="h-auto w-full object-contain"
                    />
                  </span>
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 translate-y-20 whitespace-nowrap duration-700 group-hover:-translate-y-1/2">
                    <Image
                      src={item}
                      alt=""
                      className="h-auto w-full object-contain"
                    />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
