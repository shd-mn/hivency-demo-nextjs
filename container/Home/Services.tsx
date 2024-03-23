import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import InfoCard from "@/components/UI/InfoCard";
import { servicesData } from "./data/servicesData";

function Services() {
  return (
    <section className="pt-[106px]">
      <div className="container">
        <header className="mb-12 flex w-full flex-col items-center justify-center px-80">
          <SubTitle title="Our services" className="mb-5" />
          <Title
            part1="Unleashing the best "
            underLine="website"
            part2=" tailored for you"
            className="text-center font-outfit text-[50px] font-medium leading-[60px] tracking-tight"
          />
        </header>

        <InfoCard data={servicesData} />

        <div className="flex items-center py-8">
          <span className="block h-[1px] w-full bg-gray-200"></span>
          <p className="text-g-gray whitespace-nowrap rounded-full border border-gray-200 px-[150px] py-[10px] text-lg">
            Approx <span className="text-g-accent ">875+</span> team members
            ready to online support for you
          </p>
          <span className="block h-[1px] w-full bg-gray-200"></span>
        </div>
      </div>
    </section>
  );
}

export default Services;
