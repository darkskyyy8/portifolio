import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [ismenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!ismenuOpen);
  };

  return (
    <header
      className={`bg-[#303030] sticky top-0 z-50 ${
        ismenuOpen ? "bg-white" : ""
      }`}
    >
      <div className="bg-[#303030] py-2 px-6 sm:px-16">
        <div className="mx-auto flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/Ds.png"
              width={30}
              height={30}
              alt="logo-header"
            />
          </Link>
          <div className="hidden md:flex space-x-6 text-white font-poppins font-medium text-base ">
            <Link
              href="/"
              className=" transition duration-500 hover:text-[#00B586]"
            >
              Beranda
            </Link>
            <Link
              href="#tentang"
              className=" transition duration-500 hover:text-[#00B586]"
            >
              Tentang saya
            </Link>
            <Link
              href="#portofolio"
              className=" transition duration-500 hover:text-[#00B586]"
            >
              Portofolio
            </Link>
            <Link
              href="#kontak"
              className=" transition duration-500 hover:text-[#00B586]"
            >
              Kontak
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {ismenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>
        {ismenuOpen && (
          <div className="md:hidden absolute top-[50px] right-1 bg-[#303030] w-48 p-2 space-y-2 text-end flex flex-col ">
            <Link
              href="#beranda"
              className="text-white hover:text-[#00B586] transition duration-500"
            >
              Beranda
            </Link>
            <Link
              href="#tentang"
              className="text-white hover:text-[#00B586] transition duration-500"
            >
              Tentang saya
            </Link>
            <Link
              href="#portofolio"
              className="text-white hover:text-[#00B586] transition duration-500"
            >
              Portofolio
            </Link>
            <Link
              href="#kontak"
              className="text-white hover:text-[#00B586] transition duration-500"
            >
              Kontak
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
