import React from "react";
import Image from "next/image";
import { navLinks, navbarData } from "@/staticData/data";
const Navbar = () => {
  return (
    <nav className="p-8 relative bg-lyllw/40 navbar z-50">
      
      <div className="flex justify-between items-center  max-w-screen-xl mx-auto">
        <p className="text-primary text-4xl text-white  text-stroke-sm pointer-events-none">
        WILLY
        </p>
        <div className="gap-x-12 items-center hidden lg:flex">
          {navLinks?.map((link, index) => (
            <a key={index} href={link.href}>
              <p className="font-semibold hover:text-lyllw transition-all ease-in-out duration-300 text-[1rem]">
                {link.text}
              </p>
            </a>
          ))}
        </div>
        <div className="gap-x-4 items-center hidden lg:flex">
          <a href="https://kyberswap.com/swap/base/eth-to-brett">
            <button className="px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-lg bg-gradient-to-tr from-yllw/10 to-lyllw/10 font-semibold hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/20 transition-all ease-in-out duration-300 text-[1rem]">
              Buy on Kyberswap
            </button>
          </a>
        </div>
        <div className="w-full h-full rounded-full blur-[128px] bg-lyllw/50 absolute -top-80 -right-80"></div>
      </div>
    </nav>
  );
};
export default Navbar;
