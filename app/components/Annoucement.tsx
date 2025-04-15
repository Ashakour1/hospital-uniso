import { FacebookIcon, InstagramIcon } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Annoucement = () => {
  return (
    <div className=" bg-green-700 w-full">
      <div className="container mx-auto p-1 flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-white text-center items-center text-[10px]">
            FOLLOW US
          </p>
          <div className="flex gap-2 pl-2">
            <FaFacebookF className="text-white" />
            <FaWhatsapp className="text-white" />
            <FaInstagram className="text-white" />
          </div>
        </div>
        {/* <nav className="flex justify-center items-center">
        <ul className="flex space-x-4 text-xs text-white py-2 px-4">
          <li>
            <a href="/career">Career</a>
          </li>
          <li>
            <a href="/services">Find Doctors</a>
          </li>
          <li>
            <a href="/contact">Call Center</a>
          </li>
        </ul>
      </nav> */}
        <div className="flex ">
          <p className="bg-blue-700 text-semibold text-sm px-4 p-1 rounded-lg text-white">
            Get in Touch: +123 456 7890
          </p>
        </div>
      </div>
    </div>
  );
};

export default Annoucement;
