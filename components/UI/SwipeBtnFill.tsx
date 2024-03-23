import Link from "next/link";

type PropTypes = {
    text: string;
    theme: "light" | "dark";
};

function SwipeBtnFill({ text, theme }: PropTypes) {
    return (
        <div>
            <Link
                href="#"
                className={`group block h-[60px] w-44 overflow-hidden rounded-full  py-4 font-outfit text-lg font-medium duration-500 ${theme === "dark" ? "bg-black-100 text-white hover:bg-primary hover:text-black-100" : "bg-primary text-black-100 hover:bg-black-100 hover:text-white"}`}
            >
                <div className="relative h-full w-full overflow-hidden ">
                    <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap duration-300 group-hover:-translate-y-10">
                        {text}
                    </span>
                    <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 translate-y-10 whitespace-nowrap duration-300 group-hover:-translate-y-1/2">
                        {text}
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default SwipeBtnFill;
