import React, { useEffect, useState } from "react";
import { TbWorld } from "react-icons/tb";
import { BiLogoFacebookCircle, BiLogoTelegram } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { BsDiscord, BsAlarm } from "react-icons/bs";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { AiTwotoneCalendar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { PiWarningCircleFill } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { useEventsContext } from "../context/eventsContext";

const EventDetails = () => {
  const params = useParams();

  //Global State
  const { events } = useEventsContext();

  //Local State
  const [start, setStart] = useState(false);
  const [eventDetails, setEventDetails] = useState({});
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    setEventDetails(events.find((event) => event.id === params.id));

    setStart(true);
  }, [params.id]);

  useEffect(() => {
    if (start) {
      const intervalId = setInterval(calculateRemainingTime, 1000);

      return () => clearInterval(intervalId);
    }
  }, [start]);

  const calculateRemainingTime = () => {
    const now = new Date();
    const eventDateTime = new Date(
      `${eventDetails.date}T${eventDetails.time}:00`
    );
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
    <div className="event-details w-full py-[50px] px-[20px] xmd:px-[60px] flex flex-col xl:flex-row gap-[20px] xl:gap-[86px] justify-between">
      <div className="links flex xl:block gap-[10px]">
        <a href={eventDetails?.website} target="blank">
          <TbWorld />
        </a>
        <a href={eventDetails?.facebook} target="blank">
          <BiLogoFacebookCircle />
        </a>
        <a href={eventDetails?.instagram} target="blank">
          <FaInstagramSquare />
        </a>
        <a href={eventDetails?.discord} target="blank">
          <BsDiscord />
        </a>
        <a href={eventDetails?.twitter} target="blank">
          <FaXTwitter />
        </a>
      </div>

      <div className="flex-1">
        <div className="w-full h-[319px] bg-white">
          <img
            src={eventDetails?.imgurl}
            className="w-full h-full object-cover"
            alt="img"
          />
        </div>

        <div className="mt-[70px] flex flex-col xmd:flex-row gap-[30px] xmd:gap-0 justify-between items-center">
          <div className="w-full xmd:w-[551px]">
            <h1 className="mb-[16px] text-[32px] font-bold">
              {eventDetails?.name}
            </h1>
            <div className="flex gap-[18px] items-center">
              <AiTwotoneCalendar className="text-white" />
              <p className="text-xl font-medium">
                {eventDetails?.date}, {eventDetails?.time}
              </p>
            </div>

            <div className="mb-[16px] flex gap-[18px] items-center">
              <FaLocationDot className="text-whte" />
              <p className="text-xl font-medium">Telegram</p>
            </div>
            <p className="text-base font-medium">{eventDetails?.desc}</p>
          </div>

          <div className="w-[290px] h-[148px] bg-white rounded-lg px-[34px] pt-[14px] pb-[23px] flex flex-col justify-between items-center">
            <p className="text-gray-500 text-base">Event starting at</p>
            <p className="text-slate-900 text-xl font-bold text-center leading-[1]">
              {remainingTime}
            </p>
            <button className="w-full pt-3 pb-[13px] bg-indigo-600 rounded text-base font-medium">
              VOTE
            </button>
          </div>
        </div>

        <div className="mt-[105px]">
          <h1 className="text-2xl font-bold">Event Information</h1>

          <div className="mt-[21.5px] flex flex-col xmd:flex-row gap-[20px] xmd:gap-0 justify-between xmd:items-center">
            <div className="flex gap-[32px] items-center">
              <BsAlarm className="w-10 h-10" />
              <span>
                <p className="text-white text-xl font-bold">Duration</p>
                <p className="text-stone-300 text-base">10PM - 12PM</p>
              </span>
            </div>
            <div className="flex gap-[32px] items-center">
              <HiUserGroup className="w-10 h-10" />
              <span>
                <p className="text-white text-xl font-bold">Audience</p>
                <p className="text-stone-300 text-base">
                  Crypto enthusiast and web lovers
                </p>
              </span>
            </div>
            <div className="flex gap-[32px] items-center">
              <PiWarningCircleFill className="w-10 h-10" />
              <span>
                <p className="text-white text-xl font-bold">Attention</p>
                <p className="text-stone-300 text-base">
                  Attendance is strictly by RSVP
                </p>
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className="mt-[68px] text-white text-2xl font-bold">Comment</p>
          <div className="mt-[16px] w-full xl:w-[761px] h-[45px] flex border-[1px] border-[#F7F6FD] rounded-[8px]">
            <input
              type="text"
              placeholder="Type in your comment"
              className="flex-1 px-[20px] bg-transparent outline-none border-none"
            />
            <a
              href={eventDetails.telegram}
              target="blank"
              className="w-[200px] vsm:w-[50px] h-full bg-gray-500 rounded-[8px] grid place-items-center"
            >
              <BiLogoTelegram className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
