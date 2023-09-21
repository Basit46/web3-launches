import React from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      id="nav"
      className="w-full z-[2] sticky top-0 px-[30px] sm:px-[100px] py-[12px] bg-[#1D1C25] flex justify-between items-center cursor-pointer"
    >
      <Link to="/" className="flex gap-[5px] items-center">
        <img
          src={logo}
          alt={logo}
          className="w-[40px] vsm:w-[60px] h-[40px] vsm:h-[60px]"
        />
        <p className="font-bold text-[20px] vsm:text-[35.31px] font-SpaceGrotesk">
          Web Launches
        </p>
      </Link>

      <NavLink to="/addevent">Submit Launch</NavLink>
    </nav>
  );
};

export default Navbar;
