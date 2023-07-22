import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-950 to-blue-900 p-3 shadow-md">
      <nav className="max-w-screen-xl mx-auto my-3 flex items-center gap-8 flex-col justify-center sm:flex-row sm:justify-between">
        <Link href={'/'}>
          <Image
            className="invert"
            src="/logo.webp"
            alt="logo"
            width={250}
            height={74}
          />
        </Link>
        <ul className="flex gap-8 text-white">
          <li>
            <Link className="hover:underline duration-500" href={"/"}>Home</Link>
          </li>
          <li>
            <Link className="hover:underline duration-500" href={""}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
