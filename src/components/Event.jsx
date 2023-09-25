import React from "react";
import { formatDate } from "../utils/formatDate";

const Event = ({ event }) => {
  return (
    <div className="event w-[90%] vsm:w-[300px] sm:w-[308px] h-fit vsm:h-[414px] relative flex flex-col justify-between gap-[20px] vsm:gap-0 rounded-[18.28px] border border-zinc-300 overflow-hidden px-[12px] pt-[14.85px] pb-[9.12px]">
      <div className="h-fit vsm:max-h-[16%]">
        {event.name.length > 20 ? (
          <h1 className="text-center text-white text-[14px] font-bold">
            {event.name}
          </h1>
        ) : (
          <h1 className="text-center text-white text-[22px] font-bold">
            {event.name}
          </h1>
        )}
      </div>

      <div className="relative w-full h-[118px] bg-opacity-40 bg-zinc-300 rounded-lg overflow-hidden flex justify-center">
        <img src={event?.imgurl} alt="event img" className="object-cover" />
      </div>
      <div className="bg-black bg-opacity-30 min-h-[105px] h-fit vsm:h-[105px] vsm:max-h-[105px] rounded-[7px] px-[9px] py-[5px]">
        {event.desc.length > 200 ? (
          <p className="text-white text-[0.7rem] leading-[1.2] font-bold">
            {event.desc}
          </p>
        ) : (
          <p className="text-white text-[0.9rem] leading-[1.2] font-bold">
            {event.desc}
          </p>
        )}
      </div>
      <div className="p-[5px] w-full flex justify-between bg-opacity-30 bg-zinc-300 rounded">
        <p className="opacity-80 text-white text-lg">
          {formatDate(event.date)}
        </p>
        <p className="opacity-80 text-white text-lg">{event.time}</p>
      </div>
      <div className="flex justify-between">
        <a
          href={event.website}
          target="blank"
          className="bg-indigo-800 rounded-[5px] px-[16px] py-[5px] text-white text-[13px]"
        >
          Website
        </a>
        <a
          href={event.telegram}
          target="blank"
          className="bg-indigo-800 rounded-[5px] px-[16px] py-[5px] text-white text-[13px]"
        >
          Telegram
        </a>
        <a
          href={event.twitter}
          target="blank"
          className="bg-indigo-800 rounded-[5px] px-[16px] py-[5px] text-white text-[13px]"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Event;
