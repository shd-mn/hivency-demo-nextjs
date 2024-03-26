"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import Image from "next/image";
import { portfolioData } from "./data/portfolioData";
import Link from "next/link";

function Portfolio() {
  return (
    <section className="bg-g-light2 pb-28 pt-[106px]">
      <div className="container">
        <header className="">
          <SubTitle title="Portfolio" className="mb-5" />

          <div className="grid grid-cols-2 items-center">
            <Title
              part1="Immerse yourself in our latest and most finest "
              underLine="work"
              part2=" ."
              className="mb-10 text-start font-outfit text-[50px] font-medium leading-[60px] tracking-tight"
            />
            <div className="ms-auto flex gap-4">
              <button
                type="button"
                className={`group block h-[60px] w-[60px] overflow-hidden rounded-full bg-white py-4 font-icomoon text-2xl font-medium shadow-[0px_8px_16px_#0000000d] duration-500`}
              >
                <div className="relative h-full w-full overflow-hidden ">
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -scale-100 whitespace-nowrap duration-300 group-hover:-translate-y-10">
                    {"\ue902"}
                  </span>
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 translate-y-10 -scale-100 whitespace-nowrap duration-300 group-hover:-translate-y-1/2">
                    {"\ue902"}
                  </span>
                </div>
              </button>
              <button
                type="button"
                className={`group block h-[60px] w-[60px] overflow-hidden rounded-full bg-white py-4 font-icomoon text-2xl font-medium shadow-[0px_8px_16px_#0000000d] duration-500`}
              >
                <div className="relative h-full w-full overflow-hidden ">
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap duration-300 group-hover:-translate-y-10">
                    {"\ue902"}
                  </span>
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 translate-y-10 whitespace-nowrap duration-300 group-hover:-translate-y-1/2">
                    {"\ue902"}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </header>
      </div>

      <div className="overflow-hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="portfolioSwiper !ms-[calc((100%-1350px)/2)] h-full w-full"
          loop
        >
          {portfolioData.map((item, idx) => (
            <SwiperSlide key={idx} className="">
              <div className="group relative flex select-none flex-col items-center gap-14">
                <Link
                  href="#"
                  className="overflow-hidden rounded-2xl after:absolute after:left-0 after:top-0 after:z-10 after:block after:h-full after:w-full after:rounded-2xl after:opacity-30 after:duration-500 after:ease-in-out after:content-[''] group-hover:after:bg-black-100"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="z-20 rounded-2xl object-cover duration-500 ease-in-out group-hover:scale-105"
                  />
                  <h4 className="absolute -bottom-10 left-10 z-20 font-outfit text-4xl font-medium text-white duration-500 ease-in-out group-hover:bottom-10">
                    {item.title}
                  </h4>
                  <span className="invisible absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-white font-icomoon text-4xl opacity-0 duration-500 ease-in-out group-hover:visible group-hover:scale-100 group-hover:opacity-100 ">
                    {"\ue902"}
                  </span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Portfolio;
