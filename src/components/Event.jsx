import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import eventImg from "../assets/eventImg.png";
import bsc from "../assets/bsc.png";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  const [isLiked, setIsLiked] = useState(true);

  return (
    <Link to={`/events/${event.id}`}>
      <div className="w-[90%] vsm:w-[300px] sm:w-[249px] h-[282.12px] relative bg-zinc-900 flex flex-col justify-between rounded-[18.28px] border border-zinc-300 overflow-hidden px-[12px] pt-[14.85px] pb-[9.12px]">
        <div className="w-full flex justify-between">
          <p className="font-bold text-[15.991px]">{event.name}</p>
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
            src={event.imgurl ? event.imgurl : eventImg}
            alt="event"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full pl-[7px] pr-2 py-1.5 rounded-[18.28px] border border-indigo-600 flex justify-between items-center">
          <img src={bsc} alt="bsc" />
          <p>{event.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Event;
