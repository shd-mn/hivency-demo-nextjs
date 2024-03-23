import Image from "next/image";
import bgImg from "@/public/assets/images/bg.jpg";

function Submit() {
  return (
    <section className="py-[120px]">
      <div className="container relative">
        <div className="absolute -z-10 h-full w-full">
          <Image
            src={bgImg}
            alt=""
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
        <div className="mx-auto flex flex-col items-center px-80 py-20">
          <h2 className="mb-10 text-center font-outfit text-[50px] font-medium leading-[60px] tracking-tight">
            Ready to get started with your new project today?
          </h2>
          <p className="mb-8 text-center text-lg">
            Nemo enim ipsam voluptatem quia voluptas sit asper natur aut oditut
            fugit Nemo enim ipsam voluptatem .
          </p>

          <form className="flex gap-2 rounded-full bg-white p-2 shadow-[0px_12px_40px_0px_#c7cedaaa]">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-96 border-none px-10 rounded-full py-4 outline-none"
            />
            <div>
              <button
                type="submit"
                className={`"bg-black-100 group block h-[60px] w-44 overflow-hidden  rounded-full bg-black-100 py-4 font-outfit text-lg font-medium text-white duration-500 hover:bg-primary hover:text-black-100`}
              >
                <div className="relative h-full w-full overflow-hidden ">
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap duration-300 group-hover:-translate-y-10">
                    Submit now
                  </span>
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 translate-y-10 whitespace-nowrap duration-300 group-hover:-translate-y-1/2">
                    Submit now
                  </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Submit;
