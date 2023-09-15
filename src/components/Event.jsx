import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import eventImg from "../assets/eventImg.png";
import bsc from "../assets/bsc.png";

const Event = () => {
  const [isLiked, setIsLiked] = useState(true);
  return (
    <div className="w-[90%] vsm:w-[70%] sm:w-[249px] h-[282.12px] relative bg-zinc-900 flex flex-col justify-between rounded-[18.28px] border border-zinc-300 overflow-hidden px-[12px] pt-[14.85px] pb-[9.12px]">
      <div className="w-full flex justify-between">
        <p className="font-bold text-[15.991px]">Thena Fi Alpha Beta</p>
        <div>
          {isLiked ? (
            <AiFillHeart
              onClick={() => setIsLiked(false)}
              className="text-[red] text-[27px]"
            />
          ) : (
            <AiOutlineHeart
              onClick={() => setIsLiked(true)}
              className="text-[red] text-[27px]"
            />
          )}
        </div>
      </div>
      <div className="w-full h-[159px]">
        <img
          src={eventImg}
          alt="event"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full pl-[7px] pr-2 py-1.5 rounded-[18.28px] border border-indigo-600 flex justify-between">
        <img src={bsc} alt="bsc" />
        <p>14/09/2023</p>
      </div>
    </div>
  );
};

export default Event;
