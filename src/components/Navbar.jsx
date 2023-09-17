import React, { useState } from "react";
import logo from "../assets/logo.svg";
import MobileMenu from "./MobileMenu";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      id="nav"
      className="w-full z-[2] sticky top-0 px-[30px] sm:px-[100px] py-[12px] bg-[#1D1C25] flex justify-between items-center cursor-pointer"
    >
      <div className="hidden md:flex gap-[40px] items-center font-[600]">
        <button>Login</button>
        <button className="w-[140px] h-[58px] bg-white rounded-[10px] text-black">
          Sign Up
        </button>
      </div>
      <Link to="/" className="flex gap-[5px] items-center">
        <img src={logo} alt={logo} className="w-[60px] h-[60px]" />
        <p className="font-bold text-[39.31px] font-SpaceGrotesk">Logo</p>
      </Link>
      <div className="hidden md:flex gap-[30px] items-center font-[500]">
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/addevent">Add Event</NavLink>
        <a href="#">Profile</a>
      </div>

      {/* sections that will show on mobile screens */}
      <button className="md:hidden">
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
      </button>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
