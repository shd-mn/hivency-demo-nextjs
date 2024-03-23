import Link from "next/link";
import Image from "next/image";

import Navbar from "./Navbar";
import SwipeBtnFill from "../UI/SwipeBtnFill";
import logo from "@/public/assets/images/logo.png";

function Header() {
  return (
    <header className="h-[106px]">
      <div className="container h-full">
        <div className="flex h-full items-center justify-between">
          <div>
            <Link href="/">
              <Image src={logo} alt="hivency logo" />
            </Link>
          </div>
          <Navbar />
          <SwipeBtnFill text="Get in touch" theme="dark" />
        </div>
      </div>
    </header>
  );
}

export default Header;
