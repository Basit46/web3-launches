import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      id="nav"
      className="w-full z-[2] sticky top-0 px-[30px] md:px-[100px] py-[20px] vsm:py-[12px] bg-white text-black flex justify-between items-center cursor-pointer"
    >
      <Link to="/" className="flex gap-[5px] items-center">
        <p className="font-bold text-[20px] vsm:text-[25px] md:text-[35.31px] leading-[1.2] font-SpaceGrotesk">
          Web3 Launches
        </p>
      </Link>

      <NavLink
        to="/addevent"
        className="bg-black rounded-[20px] vsm:rounded-[51px] px-[15px] vsm:px-[20px] md:px-[33px] py-[8px] vsm:py-[15px] text-[18px] md:text-[20px] font-bold text-white"
      >
        Submit <span className="hidden vsm:block">Launch</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
