import Image from "next/image";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import bgImg from "@/public/assets/images/bg.jpg";
import whyUsImg from "@/public/assets/images/why-us.png";
import whyUsImg1 from "@/public/assets/images/status.png";
import whyUsImg2 from "@/public/assets/images/visitors.png";
import curly from "@/public/assets/images/curly.png";
import SwipeBtnFill from "@/components/UI/SwipeBtnFill";
function WhyUs() {
    return (
        <section className="bg-g-light2 pb-[106px] pt-[93px]">
            <div className="container">
                <div className="grid grid-cols-[5.5fr_6fr] items-center gap-[100px]">
                    <div className="relative z-10 h-full w-full">
                        <Image
                            src={bgImg}
                            alt="about bg"
                            className="-z-20 h-full w-11/12 rounded-[32px] object-cover"
                            priority
                        />
                        <div className="absolute bottom-0 -left-6 z-10 w-[105%]  animate-move-x">
                            <Image
                                src={whyUsImg}
                                alt="about img"
                                className="w-full h-full object-contain"
                                quality={100}
                                priority
                            />
                        </div>

                        <div className="absolute right-0 top-12 ms-[-10%] animate-move-y  rounded-2xl shadow-[0px_24px_64px_0px_#c7ceda40]">
                            <Image
                                src={whyUsImg1}
                                alt="about img"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div className="absolute bottom-12 ms-[-20%] animate-move-y rounded-2xl shadow-[0px_24px_64px_0px_#c7ceda40]">
                            <Image
                                src={whyUsImg2}
                                alt="about img"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                    <div className="relative py-12">
                        <SubTitle title="Why choose us" className="mb-5" />
                        <Title
                            part1="Maximize your "
                            underLine="reach"
                            part2=" with seo-driven wordpress magic"
                            className="mb-10 font-outfit text-[50px] font-medium leading-[60px] tracking-tight"
                        />
                        <p className="mb-8 text-lg">
                            Ut enim ad minim veniam, quis nostrud exer citation ullamco labo
                            ris nisi ut aliq uip ex ea commodo con quis nostrud exercitation
                            ullamco labo ris nisi ut aliq uip ullamco laboris nisi ut
                        </p>

                        <div className="mb-12 grid grid-cols-2 gap-12">
                            <div className="">
                                <h2 className="mb-4 font-outfit text-2xl text-[50px] font-medium leading-[50px]">
                                    25K+
                                </h2>
                                <p className="text-lg">New users per week</p>
                            </div>
                            <div className="">
                                <h2 className="mb-4 font-outfit text-2xl text-[50px] font-medium leading-[50px]">
                                    100 M+
                                </h2>
                                <p className="text-lg">Monthly active user</p>
                            </div>
                        </div>

                        <SwipeBtnFill text="Learn more" theme="light" />

                        <div className="absolute right-0 bottom-12 animate-move-y  rounded-2xl shadow-[0px_24px_64px_0px_#c7ceda40]">
                            <Image
                                src={curly}
                                alt="about img"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
