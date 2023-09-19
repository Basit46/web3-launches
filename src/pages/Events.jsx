import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import Event from "../components/Event";
import { useEventsContext } from "../context/eventsContext";
import { categories } from "../constants/categories";

const Events = () => {
  //Global state
  const { events, filterByCategory, filterBySearch } = useEventsContext();

  //Local state
  const [searchCateg, setSearchCateg] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const searchByCategory = (category) => {
    setSearchCateg(category);
    filterByCategory(category);
  };

  const searchByName = () => {
    filterBySearch(searchText);
    setIsSearched(true);
  };

  const clearSearch = () => {
    setIsSearched(false);
    setSearchText("");
  };

  return (
    <div className="w-full py-[50px] px-[20px] xmd:px-[40px]">
      <div className="mx-auto w-full xmd:w-[761px] h-[45px] flex border-[1px] border-[#F7F6FD] rounded-[8px]">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="flex-1 px-[20px] bg-transparent outline-none border-none"
        />
        {!isSearched ? (
          <button
            onClick={searchByName}
            className="w-[50px] h-full bg-[#453DDB] rounded-[8px] grid place-items-center"
          >
            <FaSearch />
          </button>
        ) : (
          <button
            onClick={clearSearch}
            className="w-[50px] h-full bg-[red] rounded-[8px] grid place-items-center"
          >
            <FaTimes />
          </button>
        )}
      </div>

      <div className="mt-[61px] flex flex-col xmd:flex-row justify-between gap-[50px]">
        <div className="w-fit flex flex-wrap xmd:flex-col gap-x-[10px] xmd:gap-[21px]">
          <h1 className="text-white text-xl font-bold">
            Filter<span className="xmd:hidden">:</span>
          </h1>
          {categories.map((category) => (
            <button
              onClick={() => searchByCategory(category)}
              key={category}
              className={`${
                searchCateg === category &&
                "underline underline-offset-4 xmd:no-underline font-bold"
              } text-white w-fit h-fit text-left text-lg`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex-1 flex justify-center xmd:justify-start flex-wrap gap-[20px]">
          {events &&
            events.map((event) => <Event key={event.id} event={event} />)}
        </div>
      </div>
    </div>
  );
};

export default Events;
