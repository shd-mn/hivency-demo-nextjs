import Image from "next/image";
import Link from "next/link";
import SwipeBtn from "@/components/UI/SwipeBtn";
import SwipeBtnFill from "@/components/UI/SwipeBtnFill";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import bgImg from "@/public/assets/images/bg.jpg";
import heroImg from "@/public/assets/images/hero-img.png";
import workImg from "@/public/assets/images/work-activity.png";
import starImg from "@/public/assets/images/star.png";
import singleStarImg from "@/public/assets/images/single-star.png";

function Hero() {
  return (
    <section className="relative w-full ">
      <div className="absolute -z-10 h-full w-full overflow-hidden rounded-[40px] px-16">
        <Image
          src={bgImg}
          alt=""
          className="h-full w-full  rounded-[40px] object-cover"
          priority
        />
        <Image
          src={starImg}
          alt=""
          className="absolute left-32 top-24 z-10 h-36 animate-scale object-contain"
        />
        <Image
          src={singleStarImg}
          alt=""
          className="absolute right-32 top-10 z-10 h-36 animate-scale object-contain"
        />
      </div>
      <div className="container pt-20">
        <div className="grid grid-cols-[5fr_6fr] gap-[100px] pt-20">
          <div className="mb-40 pt-20">
            <SubTitle title="Creative agency" className="mb-5" />
            <Title
              el="h1"
              part1="Branding for your growth "
              underLine="goals"
              part2=" and creative ideas"
              className="mb-10 font-outfit text-[67px] font-medium leading-[74px] tracking-tight"
            />
            <p className="mb-8 text-lg">
              Nemo enim ipsam voluptatem quia voluptas sit asper natur aut
              oditut fugit seduia conse
            </p>
            <div className="flex gap-4">
              <SwipeBtnFill text="Learn more" theme="light" />
              <Link
                href="#"
                className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-secondary font-icomoon after:absolute after:-z-10 after:h-full after:w-full after:animate-ping-s after:rounded-full after:bg-secondary after:content-[''] hover:after:animate-none"
              >
                <span className="text-xl">{"\ue905"}</span>
              </Link>
              <SwipeBtn text="Watch video" />
            </div>
          </div>

          <div className="relative w-[120%]">
            <div className=" h-full w-full">
              <span className="absolute bottom-0 animate-move-x">
                <Image
                  src={heroImg}
                  alt=""
                  className="h-full w-full object-contain"
                  quality={100}
                  priority
                />
              </span>
              <span className="absolute bottom-10 left-0 animate-move-y">
                <Image
                  src={workImg}
                  alt=""
                  className="object-contain"
                  quality={100}
                  priority
                />
              </span>
              <div className="absolute right-20 top-6 flex animate-move-y rounded-2xl bg-white px-5 py-6">
                <span
                  className={`mr-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#BDEFFB] font-icomoon text-3xl font-medium duration-700`}
                >
                  {"\ue917"}
                </span>
                <span>
                  <span className="text-sm">Profits Earned</span>
                  <h5 className="font-outfit text-2xl font-medium ">850K</h5>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
