import React from "react";
import { useNavigate } from "react-router-dom";

const Event = ({ event }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="event w-[90%] vsm:w-[300px] sm:w-[308px] h-[414px] relative flex flex-col justify-between rounded-[18.28px] border border-zinc-300 overflow-hidden px-[12px] pt-[14.85px] pb-[9.12px]"
    >
      <h1 className="text-center text-white text-[22px] font-bold">
        Project Name
      </h1>
      <div className="w-full h-[118px] bg-opacity-40 bg-zinc-300 rounded-lg"></div>
      <div className="bg-black bg-opacity-30 h-[105px] rounded-[7px] px-[9px] py-[5px]">
        <p className=" text-white text-lg font-bold">
          discription lorium ipsum text upto 280 words
        </p>
      </div>
      <div className="p-[5px] w-full flex justify-between bg-opacity-30 bg-zinc-300 rounded">
        <p className="opacity-80 text-white text-lg">27-Oct-2069</p>
        <p className="opacity-80 text-white text-lg">68:89:53</p>
      </div>
      <div className="flex justify-between">
        <a
          href="#"
          className="bg-indigo-800 rounded-[5px] px-[16px] py-[5px] text-white text-[13px]"
        >
          Website
        </a>
        <a
          href="#"
          className="bg-indigo-800 rounded-[5px] px-[16px] py-[5px] text-white text-[13px]"
        >
          Telegram
        </a>
        <a
          href="#"
          className="bg-indigo-800 rounded-[5px] px-[16px] py-[5px] text-white text-[13px]"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Event;
