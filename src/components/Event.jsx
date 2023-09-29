import React from "react";
import { formatDate } from "../utils/formatDate";

const Event = ({ event, eventContainer }) => {
  return (
    <div
      ref={eventContainer}
      className="event relative w-[300px] vsm:w-72 min-h-[460px] h-fit flex flex-col justify-between rounded-[11.4px] border border-zinc-300 overflow-hidden px-[12px] pt-[14px] pb-[14.29px]"
    >
      <div className="relative w-full h-[228px] bg-opacity-40 bg-red-500 rounded-lg overflow-hidden flex justify-center">
        {/* Updates */}
        {event.isLive && (
          <div className="absolute top-0 left-0 w-[93px] h-6 bg-[#29A51499] rounded-lg grid place-items-center">
            <p className="text-white text-xs">
              Live-<span>{event.gain}</span>X
            </p>
          </div>
        )}
        {!event.isLive && (
          <div className="absolute top-0 right-0 w-[66px] h-6 bg-[#F43737] rounded-lg grid place-items-center">
            <p className="text-white text-xs">Rugged</p>
          </div>
        )}

        <img src={event?.imgurl} alt="event img" className="object-contain" />
      </div>

      <div className="mt-[21px] mb-[10.67px] h-fit vsm:max-h-[16%]">
        <h1 className="mix-blend-luminosity text-center text-gray-900 text-lg font-bold font-SpaceGrotesk leading-tight">
          {event.name}
        </h1>
      </div>

      <div className="bg-[#9190A5] rounded-md bg-opacity-30 min-h-[105px] h-fit px-[9px] py-[5px]">
        <p className="text-black text-[14px]">{event.desc}</p>
      </div>

      <div className="mt-[6.92px] mb-[3.05px] mx-auto w-[90%] h-[31.33px] px-[10px] bg-opacity-30 bg-[#9190A5] rounded-md flex justify-between items-center">
        <p className="mix-blend-luminosity text-zinc-800 text-[10.70px]">
          Launching Date
        </p>
        <p className="mix-blend-luminosity text-zinc-900 text-xs font-semibold">
          {formatDate(event.date)}
        </p>
      </div>

      <div className="mx-auto w-[90%] h-[31.33px] px-[10px] bg-opacity-30 bg-[#9190A5] rounded-md flex justify-between items-center">
        <p className="mix-blend-luminosity text-zinc-800 text-[10.70px]">
          Time
        </p>
        <p className="mix-blend-luminosity text-zinc-900 text-xs font-semibold">
          {event.time}
        </p>
      </div>

      {/* <div className="flex justify-between">
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
      </div> */}
    </div>
  );
};

export default Event;
