import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <ul className="flex items-center text-lg">
        <li>
          <Link href="/" className="px-5">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="px-5">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="px-5">
            Services
          </Link>
        </li>
        <li>
          <Link href="/projects" className="px-5">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blog" className="px-5">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="px-5">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
