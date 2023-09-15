import React from "react";
import { Link as ScrollLink } from "react-scroll";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`${
        !isOpen && "hidden"
      } md:hidden z-[3] fixed top-[83px] left-0 w-full h-[250px] bg-white text-black font-[600] flex flex-col items-center justify-center gap-[20px] text-[1.2rem]`}
    >
      <button>Login</button>
      <button className="w-[140px] h-[38px] bg-black rounded-[10px] text-white">
        Sign Up
      </button>

      <ScrollLink
        onClick={() => setIsOpen(false)}
        to="events"
        duration={500}
        smooth={true}
      >
        Events
      </ScrollLink>
      <a href="#">Profiles</a>
    </div>
  );
};

export default MobileMenu;
