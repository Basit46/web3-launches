import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      id="nav"
      className="w-full z-[2] sticky top-0 px-[30px] sm:px-[100px] py-[12px] bg-white text-black flex justify-between items-center cursor-pointer"
    >
      <Link to="/" className="flex gap-[5px] items-center">
        <p className="font-bold text-[20px] vsm:text-[35.31px] font-SpaceGrotesk">
          Web3 Launches
        </p>
      </Link>

      <NavLink
        to="/addevent"
        className="bg-black rounded-[51px] px-[33px] py-[15px] text-[20px] font-bold text-white"
      >
        Submit Launch
      </NavLink>
    </nav>
  );
};

export default Navbar;
