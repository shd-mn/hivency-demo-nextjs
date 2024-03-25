import Image from "next/image";
import Link from "next/link";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import { ourBlogs } from "./data/ourBlogsData";

function OurBlogs() {
  return (
    <section className="py-[106px]">
      <div className="container">
        <header className="mb-12 flex w-full flex-col items-center justify-center px-80">
          <SubTitle title="Our blogs" className="mb-5" />
          <Title
            part1="Read latest "
            underLine="articles"
            part2=" from us"
            className="mb-5 text-center font-outfit text-[50px] font-medium leading-[40px] tracking-tight"
          />
          <p className="text-center text-lg">
            Nemo enim ipsam voluptatem quia voluptas sit asper natur aut oditut
            fugit Nemo enim ipsam voluptatem .
          </p>
        </header>
        <div className="mb-[93px] grid grid-cols-3 gap-6">
          {ourBlogs.map((item, idx) => (
            <div key={idx} className="">
              <Link
                href={item.link}
                className="group relative flex flex-col overflow-hidden"
              >
                <div className="mb-6 overflow-hidden rounded-2xl ease-in-out">
                  <Image
                    src={item.image}
                    alt={item.link}
                    className="h-full w-full rounded-2xl object-cover duration-500 group-hover:scale-105"
                  />
                </div>

                <h2 className="mb-4 me-auto rounded-lg bg-[#FFF0D8] px-3 py-[6px] font-outfit text-xl font-medium duration-500 hover:bg-black-100 hover:text-white">
                  {item.title}
                </h2>

                <h4 className="font-outfit text-[28px] font-medium tracking-tight duration-500 hover:text-primary">
                  {item.desc}
                </h4>
                <span className="my-4 flex h-[0.5px] w-full bg-gray-200"></span>

                <div className="group flex items-center gap-2 hover:text-g-accent">
                  <span className="font-icomoon">{"\ue903"}</span>
                  <span>October 29, 2023</span>
                  <span className="inline-block h-2 w-2 rounded-full bg-black-100 group-hover:bg-g-accent"></span>
                  <span>5 min read</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurBlogs;
