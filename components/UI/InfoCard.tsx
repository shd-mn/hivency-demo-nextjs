import Image from "next/image";
import Link from "next/link";
import wave from "@/public/assets/images/wave.png";
import type { ServicesDataType } from "@/container/Home/data/servicesData";

function InfoCard({ data }: { data: ServicesDataType[] }) {
  return (
    <div className="mb-[93px] grid grid-cols-3 gap-6">
      {data.map((item, idx) => (
        <div key={idx} className="rounded-2xl shadow-[0px_24px_64px_#c7ceda40]">
          <Link
            href={item.link}
            className="group relative flex flex-col items-center overflow-hidden  p-8 "
          >
            <span className="absolute bottom-full left-full h-[72px] w-[72px] duration-700 group-hover:-translate-x-full group-hover:translate-y-full">
              <Image src={wave} alt="" className="object-contain" />
            </span>
            <span
              className={`${item.color} mb-8 flex h-20 w-20 items-center justify-center rounded-full font-icomoon text-3xl group-hover:animate-rotate-y`}
            >
              {item.icon}
            </span>

            <h1 className="mb-4 font-outfit text-2xl font-medium">
              {item.title}
            </h1>
            <p className="text-center text-lg">{item.desc}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default InfoCard;
