import React, { useEffect, useState } from "react";
import Event from "../components/Event";
import { useEventsContext } from "../context/eventsContext";
import { categories } from "../constants/categories";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const { homeEvents, filterByCategoryHome } = useEventsContext();
  const [searchCateg, setSearchCateg] = useState("All");
  useEffect(() => {
    filterByCategoryHome(searchCateg);
  }, [searchCateg]);

  return (
    <div className="w-full bg-[#F0F0F0]">
      <section
        id="events"
        className="mx-auto pt-[100px] w-[90%] h-fit overflow-hidden pb-[75.75px]"
      >
        <h1 className="text-black text-center text-8xl font-bold">
          New Launches
        </h1>

        <div className="mx-auto mt-[35px] mb-[100px] w-full xmd:w-[630px] h-[62px] rounded-[20px] bg-white flex border-[1px] border-[#F7F6FD]">
          <input
            type="text"
            className="flex-1 px-[20px] text-black bg-transparent outline-none border-none"
          />
          <button className="w-[50px] h-full rounded-[8px] grid place-items-center">
            <FaSearch className="text-black text-[20px]" />
          </button>
        </div>

        <div className="h-[76px] bg-blue-700 bg-opacity-30 flex items-center justify-center gap-[10px] sm:gap-[30px]">
          <button className="w-fit bg-neutral-100 rounded-[10px] py-[14px] px-[47px] text-xl font-bold text-black">
            12SEPT
          </button>
          <button className="w-fit bg-neutral-100 rounded-[10px] py-[14px] px-[47px] text-xl font-bold text-black">
            12SEPT
          </button>
          <button className="w-fit bg-neutral-100 rounded-[10px] py-[14px] px-[47px] text-xl font-bold text-black">
            12SEPT
          </button>
          <button className="w-fit bg-neutral-100 rounded-[10px] py-[14px] px-[47px] text-xl font-bold text-black">
            12SEPT
          </button>
        </div>

        <div className="w-full mt-[47px] flex flex-wrap vsm:gap-x-[24px] gap-y-[32px] justify-center">
          {homeEvents &&
            homeEvents.map((event, index) => (
              <Event key={index} event={event} />
            ))}
        </div>

        <button className="mt-[38.75px] mx-auto block text-black text-xl text-center">
          Show More
        </button>
      </section>
    </div>
  );
};

export default Home;
