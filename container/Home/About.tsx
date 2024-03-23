import Image from "next/image";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import InfoCard2 from "@/components/UI/InfoCard2";
import { aboutData } from "./data/aboutData";
import aboutBgImg from "@/public/assets/images/about-bg.png";
import horn from "@/public/assets/images/horn.png";
import aboutImg from "@/public/assets/images/about-image.png";
import member1 from "@/public/assets/images/member1.jpg";
import member2 from "@/public/assets/images/member2.jpg";
import member3 from "@/public/assets/images/member3.jpg";
import member4 from "@/public/assets/images/member4.jpg";
function About() {
  return (
    <section className="pb-[106px] pt-[93px]">
      <div className="container">
        <div className="grid grid-cols-[5fr_6fr] items-center gap-[100px]">
          <div className="relative">
            <Image
              src={aboutBgImg}
              alt="about bg"
              className="h-full w-full object-contain"
              priority
            />
            <Image
              src={horn}
              alt="about bg"
              className="absolute -left-14 top-5 z-20 h-20 w-20   object-contain"
            />
            <div className="absolute bottom-0 z-10 animate-move-x">
              <Image
                src={aboutImg}
                alt="about img"
                className=" h-full w-full object-contain"
                priority
              />
            </div>

            <div className="absolute bottom-12 z-10 ms-[-10%] flex animate-move-y flex-col gap-8 rounded-2xl bg-white p-6 shadow-[0px_24px_64px_0px_#c7ceda40]">
              <h5 className="font-outfit text-2xl font-medium ">
                Expert Team <br /> Members
              </h5>

              <div className="flex">
                <span className="h-[50px] w-[50px] overflow-hidden rounded-full border-2 border-white">
                  <Image src={member1} alt="" className="h-full w-full " />
                </span>
                <span className="-ms-3 h-[50px] w-[50px] overflow-hidden rounded-full border-2 border-white">
                  <Image src={member2} alt="" className="h-full w-full " />
                </span>
                <span className="-ms-3 h-[50px] w-[50px] overflow-hidden rounded-full border-2 border-white">
                  <Image src={member3} alt="" className="h-full w-full " />
                </span>
                <span className="-ms-3 h-[50px] w-[50px] overflow-hidden rounded-full border-2 border-white">
                  <Image src={member4} alt="" className="h-full w-full" />
                </span>

                <span className="-ms-3 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-white bg-primary">
                  +7
                </span>
              </div>
            </div>
          </div>
          <div>
            <SubTitle title="About us" className="mb-5" />
            <Title
              part1="A dedicated "
              underLine="solution"
              part2=" for new startups and enterprises"
              className="mb-10 font-outfit text-[50px] font-medium leading-[60px] tracking-tight"
            />
            <p className="mb-8 text-lg">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              laborem consectectur, adipisci velit, sed quia non numquam eius
              modi temporadew incisdunt ut labore et dolore magnam aliquam
            </p>

            <InfoCard2 data={aboutData} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
