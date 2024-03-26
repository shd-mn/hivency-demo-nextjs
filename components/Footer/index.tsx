import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/footer-logo.png";
import blogImg1 from "@/public/assets/images/blog-image-1-150x150.jpg";
import blogImg2 from "@/public/assets/images/blog-image-2-150x150.jpg";

function Footer() {
  return (
    <footer
      className="relative bg-black-100 bg-center bg-no-repeat text-gray-300"
      style={{ backgroundImage: `url('/assets/images/footer-gridient.png')` }}
    >
      <section className="pt-[120px]">
        <div className="container ">
          <div className="flex border-b border-b-gray-500 pb-[120px]">
            <div className="grid w-1/2 grid-cols-[2fr_1fr_1fr] gap-2">
              <div>
                <Link href="/" className="z-10 mb-4 block text-white">
                  <Image src={logo} alt="hivency logo" />
                </Link>
                <p className="mb-3">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, laborem con sectec tur
                </p>

                <div className="flex gap-4">
                  <Link href="#">
                    <span className="font-faBrand flex h-10 w-10 items-center justify-center rounded-full border border-primary text-lg text-white duration-300 hover:bg-primary hover:text-black-100">
                      {"\uf39e"}
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="font-faBrand flex h-10 w-10 items-center justify-center rounded-full border border-primary text-lg text-white duration-300 hover:bg-primary hover:text-black-100">
                      {"\uf099"}
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="font-faBrand flex h-10 w-10 items-center justify-center rounded-full border border-primary text-lg text-white duration-300 hover:bg-primary hover:text-black-100">
                      {"\uf0e1"}
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="font-faBrand flex h-10 w-10 items-center justify-center rounded-full border border-primary text-lg text-white duration-300 hover:bg-primary hover:text-black-100">
                      {"\uf16d"}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="">
                <h2 className="mb-4 font-outfit text-xl font-medium text-white">
                  Pages
                </h2>
                <ul className="flex flex-col gap-3">
                  <li className="hover:text-primary">
                    <a href="#about">About</a>
                  </li>
                  <li className="hover:text-primary">
                    <a href="#services">Services</a>
                  </li>
                  <li className="hover:text-primary">
                    <a href="#services">UX Strategy</a>
                  </li>
                  <li className="hover:text-primary">
                    <a href="#services">Marketing Tips</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="mb-4 font-outfit text-xl font-medium text-white">
                  Pages
                </h2>
                <ul className="flex flex-col gap-3">
                  <li className="hover:text-primary">
                    <a href="#contact">Contact</a>
                  </li>
                  <li className="hover:text-primary">
                    <a href="#services">Services</a>
                  </li>
                  <li className="hover:text-primary">
                    <a href="#about">About</a>
                  </li>
                  <li className="hover:text-primary">
                    <a href="#services">Projects</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid w-1/2 grid-cols-2">
              <div>
                <h2 className="mb-4 font-outfit text-xl font-medium text-white">
                  Recent Posts
                </h2>

                <ul>
                  <li className="mb-3 grid grid-cols-[80px_1fr] items-center gap-2">
                    <Image
                      src={blogImg1}
                      alt=""
                      className="rounded-md object-cover"
                    />

                    <Link href="#" className="hover:text-primary">
                      <span className="text-sm">October 29, 2023</span>
                      <h4 className="font-medium">
                        How Did You Get Started In Creating
                      </h4>
                    </Link>
                  </li>
                  <li className="grid grid-cols-[80px_1fr] items-center gap-2">
                    <Image
                      src={blogImg2}
                      alt=""
                      className="rounded-md object-cover"
                    />

                    <Link href="#" className="hover:text-primary">
                      <span className="text-sm">October 29, 2023</span>
                      <h4 className="font-medium">
                        What Is Cloud Infrastructure Entitlements Management?
                      </h4>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 font-outfit text-xl font-medium text-white">
                  Contact Info
                </h2>

                <ul>
                  <li className="mb-3 grid grid-cols-[40px_1fr] items-center gap-2">
                    <span className="font-faSolid flex items-center justify-center text-lg text-white">
                      {"\uf3c5"}
                    </span>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet
                    </p>
                  </li>
                  <li className="mb-3 grid grid-cols-[40px_1fr] items-center gap-2">
                    <span className="font-faSolid flex items-center justify-center text-lg text-white">
                      {"\uf0e0"}
                    </span>
                    <p>info.hivency@gmail.com</p>
                  </li>
                  <li className="mb-3 grid grid-cols-[40px_1fr] items-center gap-2">
                    <span className="font-faSolid flex items-center justify-center text-lg text-white">
                      {"\uf095"}
                    </span>
                    <p>
                      01961926400 <br />
                      016932154654
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Visiuals */}

        <div>
          <span className="absolute left-44 top-16 h-5 w-5 animate-scale rounded-full bg-primary"></span>
          <span className="absolute left-1/3 top-2/3 h-5 w-5 animate-scale rounded-full bg-purple-500"></span>
          <span className="absolute right-44 top-16 h-5 w-5 animate-scale rounded-full bg-orange-500"></span>
          <span className="absolute right-44 top-44 h-5 w-5 animate-scale rounded-full bg-blue-500"></span>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex items-center justify-between py-6">
            <p>Copyright ©2023 Hivency. All Rights Reserved</p>

            <ul className="flex gap-10">
              <li className="hover:text-primary">
                <a href="#">Contact</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Services</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">About</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
