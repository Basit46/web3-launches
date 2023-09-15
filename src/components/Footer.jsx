import React from "react";
import loc from "../assets/loc.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import fb from "../assets/fb.svg";
import twt from "../assets/twt.svg";
import ig from "../assets/ig.svg";
import arrow from "../assets/arrow.svg";
import { Link as ScrollLink, scroller } from "react-scroll";

const Footer = () => {
  const scrollToElement = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <footer className="relative mt-[86px] w-full px-[20px] vsm:px-[50px] xl:px-[150px] pt-[100px] md:pt-[150px] bg-black min-h-[400px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="border-slate-500 border-t-2 flex flex-col py-[29px] gap-[22px]">
          <div className="flex items-center gap-[17px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#A4A3B7] grid place-items-center">
              <img src={loc} alt="icon" />
            </div>
            <p>New Delhi India</p>
          </div>
          <div className="flex items-center gap-[17px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#A4A3B7] grid place-items-center">
              <img src={phone} alt="icon" />
            </div>
            <p>222222222222</p>
          </div>
          <div className="flex items-center gap-[17px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#A4A3B7] grid place-items-center">
              <img src={email} alt="icon" />
            </div>
            <p>web3launches@gmail.com</p>
          </div>

          <div className="self-center mt-[25px] flex gap-[20px] items-center">
            <a href="#" target="blank">
              <img src={fb} alt="icon" />
            </a>
            <a href="#" target="blank">
              <img src={twt} alt="icon" />
            </a>
            <a href="#" target="blank">
              <img src={ig} alt="icon" />
            </a>
          </div>
        </div>

        <ul className="mt-[50px] md:mt-0">
          <li onClick={() => scrollToElement("events")}>Events</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Subscribe</li>
          <li>Testimonial</li>
        </ul>

        <ul className="mt-[50px] md:mt-0">
          <li>TERMS AND CONDITIONS</li>
          <li>PRIVACY POLICY</li>
          <li>COOKIE POLICY</li>
          <li>COMPLIANCE</li>
        </ul>
      </div>

      <ScrollLink to="hero" smooth={true} duration={500} offset={-100}>
        <div className="absolute right-[50px] top-[20px] md:top-[50px] bg-[#494949] w-[60px] h-[60px] cursor-pointer rounded-full grid place-items-center">
          <img src={arrow} alt="arrow img" />
        </div>
      </ScrollLink>

      <div className="mt-[61px] w-full opacity-60 text-[15.11px]leading-[25.19px] border-t-2 border-white text-center pt-[35px] pb-[24px]">
        © 2023 Web3 launches. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
