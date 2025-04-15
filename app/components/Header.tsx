import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white w-full">
      <div className="container mx-auto p-1 flex justify-between items-center">
        <div>
          <Image
            src="/uniso-logo.png"
            width={50}
            height={50}
            alt="Header Image"
          />
        </div>
        <nav className="flex justify-center items-center">
          <ul className="flex space-x-4 text-xs text-gray-700 py-2 px-4">
            <Link href="/home">Home</Link>
            <Link href="/doctors">Our Doctors</Link>
            <Link href="/contact">Center Of Excellence</Link>
            <Link href="/services">Our Services</Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
