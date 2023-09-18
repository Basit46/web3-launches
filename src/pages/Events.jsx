import React, { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import Event from "../components/Event";
import { useEventsContext } from "../context/eventsContext";
import { useSearchParams } from "react-router-dom";
import { categories } from "../constants/categories";

const Events = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //Global state
  const { events, filterByCategory, filterBySearch } = useEventsContext();

  //Local state
  const [searchText, setSearchText] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    if (searchParams.get("search")) {
      return;
    }
    filterByCategory(searchParams.get("category"));
  }, [searchParams.get("category")]);

  const updateSearchParams = (category) => {
    setSearchParams({ category });
  };

  const searchByName = () => {
    setSearchParams({ search: searchText });
    filterBySearch(searchText);
    setIsSearched(true);
  };

  const clearSearch = () => {
    setIsSearched(false);
    setSearchText("");
    setSearchParams({ category: "All" });
  };

  return (
    <div className="w-full py-[50px] px-[40px]">
      <div className="mx-auto w-[761px] h-[45px] flex border-[1px] border-[#F7F6FD] rounded-[8px]">
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

      <div className="mt-[61px] flex justify-between gap-[50px]">
        <div className="w-fit flex flex-col gap-[21px]">
          <h1 className="text-white text-xl font-bold">Filter</h1>
          {categories.map((category) => (
            <button
              onClick={() => updateSearchParams(category)}
              key={category}
              className={`${
                searchParams.get("category") === category && "font-bold"
              } text-white text-left text-lg`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex-1 flex flex-wrap gap-[20px]">
          {events.length > 0 &&
            events.map((event) => <Event key={event.id} event={event} />)}
        </div>
      </div>
    </div>
  );
};

export default Events;
