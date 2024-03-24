import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/footer-logo.png";
import footerImg from "@/public/assets/images/footer-gridient.png";

function Footer() {
    return (
        <footer
            className="bg-center bg-no-repeat bg-black-100 h-[400px]"
            style={{ backgroundImage: `url('/assets/images/footer-gridient.png')` }}
        >
            <section className="pt-[120px]">
                <div className="container">
                    <div className="grid w-1/2 grid-cols-[2fr_1f1_1fr] gap-2">
                        <Link href="/" className="text-white z-10">
                            <Image src={logo} alt="hivency logo" />
                        </Link>
                    </div>
                    <div className="w-1/2"></div>
                </div>
            </section>
            <section className="">
                <div className="container"></div>
            </section>
        </footer>
    );
}

export default Footer;
