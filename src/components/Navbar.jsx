import React, { useState } from "react";
import logo from "../assets/logo.svg";
import MobileMenu from "./MobileMenu";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full z-[2] sticky top-0 px-[30px] sm:px-[100px] py-[12px] bg-[#1D1C25] flex justify-between items-center cursor-pointer">
      <div className="hidden md:flex gap-[40px] items-center font-[600]">
        <button>Login</button>
        <button className="w-[140px] h-[58px] bg-white rounded-[10px] text-black">
          Sign Up
        </button>
      </div>
      <div className="flex gap-[5px] items-center">
        <img src={logo} alt={logo} className="w-[60px] h-[60px]" />
        <p className="font-bold text-[39.31px] font-SpaceGrotesk">Logo</p>
      </div>
      <div className="hidden md:flex gap-[30px] items-center font-[500]">
        <ScrollLink to="events" duration={500} smooth={true}>
          Events
        </ScrollLink>
        <a href="#">Profile</a>
      </div>

      {/* sections that will show on mobile screens */}
      {isOpen ? (
        <FaTimes
          onClick={() => setIsOpen(false)}
          className="text-[25px] md:hidden text-[red]"
        />
      ) : (
        <FaBars
          onClick={() => setIsOpen(true)}
          className="text-[25px] md:hidden"
        />
      )}

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
