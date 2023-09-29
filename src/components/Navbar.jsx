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
        className="px-[29px] py-[17px] bg-indigo-600 rounded-[10px] text-base font-semibold text-white"
      >
        <span>Submit</span>
        <span className="hidden vsm:inline"> </span>
        <span className="hidden vsm:inline">Launch</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
