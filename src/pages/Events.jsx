import React from "react";
import { FaSearch } from "react-icons/fa";
import Event from "../components/Event";

const Events = () => {
  return (
    <div className="w-full py-[50px] px-[40px]">
      <div className="mx-auto w-[761px] h-[45px] flex border-[1px] border-[#F7F6FD] rounded-[8px]">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-[20px] bg-transparent outline-none border-none"
        />
        <button className="w-[50px] h-full bg-[#453DDB] rounded-[8px] grid place-items-center">
          <FaSearch />
        </button>
      </div>

      <div className="mt-[61px] flex justify-between gap-[50px]">
        <ul className="w-fit flex flex-col gap-[21px] ">
          <h1 className="text-white text-xl font-bold">Filter</h1>
          <li className="text-white text-lg font-normal">ICO</li>
          <li className="text-white text-lg font-normal">Token Launches</li>
          <li className="text-white text-lg font-normal">NFT drops</li>
          <li className="text-white text-lg font-normal">Conferences</li>
          <li className="text-white text-lg font-normal">IDO</li>
        </ul>
        <div className="flex-1 flex flex-wrap gap-[20px]">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </div>
  );
};

export default Events;
