import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Navbar = () => {
  //Global State
  const { userDetails, handleSignIn, handleSignOut } = useAuthContext();

  //Local State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      id="nav"
      className="w-full z-[2] sticky top-0 px-[30px] sm:px-[100px] py-[12px] bg-[#1D1C25] flex justify-between items-center cursor-pointer"
    >
      <div className="hidden md:flex gap-[40px] items-center font-[600]">
        {userDetails.uid ? (
          <button
            onClick={handleSignOut}
            className="w-[140px] h-[58px] bg-white rounded-[10px] text-black"
          >
            Sign Out
          </button>
        ) : (
          <>
            <button onClick={handleSignIn}>Login</button>
            <button
              onClick={handleSignIn}
              className="w-[140px] h-[58px] bg-white rounded-[10px] text-black"
            >
              Sign Up
            </button>
          </>
        )}
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
      {isOpen ? (
        <button className="md:hidden">
          <FaTimes
            onClick={() => setIsOpen(false)}
            className="text-[25px] md:hidden text-[red]"
          />
        </button>
      ) : (
        <button className="md:hidden">
          <FaBars
            onClick={() => setIsOpen(true)}
            className="text-[25px] md:hidden"
          />
        </button>
      )}

      {/* Mobile Nav     */}
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          !isOpen && "hidden"
        } md:hidden z-[3] fixed top-[83px] left-0 w-full h-[300px] bg-white text-black font-[600] flex flex-col items-center justify-center gap-[20px] text-[1.2rem]`}
      >
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/addevent">Add Event</NavLink>
        <a onClick={() => alert("Coming soon")} href="#">
          Profile
        </a>

        {userDetails.uid ? (
          <button
            onClick={handleSignOut}
            className="w-[140px] h-[40px] bg-black rounded-[10px] text-white"
          >
            Sign Out
          </button>
        ) : (
          <>
            <button onClick={handleSignIn}>Login</button>
            <button
              onClick={handleSignIn}
              className="w-[140px] h-[40px] bg-black rounded-[10px] text-white"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
