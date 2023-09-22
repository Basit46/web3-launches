import React, { useState, useEffect } from "react";
import { formatDate } from "../utils/formatDate";

const Event = ({ event }) => {
  //Locsl state
  const [timeRemaining, setRemainingTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(calculateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateRemainingTime = () => {
    const now = new Date();
    const eventDateTime = new Date(`${event.date}T${event.time}:00`);
    const timeDifference = eventDateTime - now;

    if (timeDifference <= 0) {
      setRemainingTime("Event Over");
    } else {
      const hours = Math.floor(timeDifference / 3600000);
      const minutes = Math.floor((timeDifference % 3600000) / 60000);
      const seconds = Math.floor((timeDifference % 60000) / 1000);
      setRemainingTime(
        `${hours}:${String(minutes).padStart(2, "0")}:${String(
          seconds
        ).padStart(2, "0")}`
      );
    }
  };

  return (
    <div className="event w-[90%] vsm:w-[300px] sm:w-[308px] h-[414px] relative flex flex-col justify-between rounded-[18.28px] border border-zinc-300 overflow-hidden px-[12px] pt-[14.85px] pb-[9.12px]">
      <div className="max-h-[16%]">
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

      <div className="w-full h-[118px] bg-opacity-40 bg-zinc-300 rounded-lg">
        <img
          src={event.imgurl}
          alt="event img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-black bg-opacity-30 h-[105px] max-h-[105px] rounded-[7px] px-[9px] py-[5px]">
        {event.desc.length > 200 ? (
          <p className=" text-white text-[0.7rem] leading-[1.2] font-bold">
            {event.desc}
          </p>
        ) : (
          <p className=" text-white text-[1rem] leading-[1.2] font-bold">
            {event.desc}
          </p>
        )}
      </div>
      <div className="p-[5px] w-full flex justify-between bg-opacity-30 bg-zinc-300 rounded">
        <p className="opacity-80 text-white text-lg">
          {formatDate(event.date)}
        </p>
        <p className="opacity-80 text-white text-lg">{timeRemaining}</p>
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
