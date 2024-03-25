import Link from "next/link";
import type { AboutDataType } from "@/container/Home/data/aboutData";

function InfoCard2({ data }: { data: AboutDataType[] }) {
  return (
    <div className="grid grid-cols-2 gap-12">
      {data.map((item, idx) => (
        <div key={idx} className="">
          <Link href={item.link} className="group flex flex-col">
            <span
              className={`${item.color} mb-8 flex h-16 w-16 items-center justify-center rounded-full font-icomoon text-3xl duration-700 group-hover:animate-rotate-y`}
            >
              {item.icon}
            </span>

            <h1 className="mb-4 font-outfit text-2xl font-medium">
              {item.title}
            </h1>
            <p className="text-lg">{item.desc}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default InfoCard2;
