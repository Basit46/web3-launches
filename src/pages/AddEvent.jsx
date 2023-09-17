import React from "react";
import { FiUpload } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const AddEvent = () => {
  return (
    <div className="w-full pt-[60px] pb-[40px] flex justify-center">
      <form className="w-[80%]">
        <div className="w-full h-[355px] border-white border-2 border-dashed">
          <div className="w-full h-full flex flex-col items-center gap-[16px] justify-center">
            <div className="bg-white h-[57px] w-[57px] rounded-full grid place-items-center">
              <FiUpload className="text-[#453DDB]" />
            </div>
            <p className="text-center text-white text-2xl">
              Drag and drop files here
              <br />
              OR
            </p>
            <button className="rounded-2xl border border-indigo-600 py-[14px] px-[70.5px] text-white text-base font-medium">
              Browse Files
            </button>
          </div>
        </div>

        <div className="mt-[64px] flex justify-between gap-[96px]">
          <div className="left w-[60%] flex flex-col gap-[16px]">
            <label htmlFor="name">Event Name</label>
            <input type="text" id="name" required />

            <label htmlFor="date">Event Date</label>
            <input type="date" id="date" required />

            <label htmlFor="time">Event Time</label>
            <input type="time" id="time" required />

            <label htmlFor="desc">Event Description</label>
            <input type="text" id="desc" />
          </div>

          <div className="right flex-1">
            <h1 className="text-white text-xl font-medium mb-[37px]">
              Socials
            </h1>

            <div>
              <label htmlFor="web">
                <TbWorld />
              </label>
              <input type="url" id="web" />
            </div>

            <div>
              <label htmlFor="fb">
                <BiLogoFacebookCircle />
              </label>
              <input type="url" id="fb" />
            </div>

            <div>
              <label htmlFor="ig">
                <FaInstagramSquare />
              </label>
              <input type="url" id="ig" />
            </div>

            <div>
              <label htmlFor="ds">
                <BsDiscord />
              </label>
              <input type="url" id="ds" />
            </div>

            <div>
              <label htmlFor="twt">
                <FaXTwitter />
              </label>
              <input type="url" id="twt" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
