import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Event from "../components/Event";
import { useEventsContext } from "../context/eventsContext";
import { categories } from "../constants/categories";
import { Link } from "react-router-dom";

const Home = () => {
  const { homeEvents, filterByCategoryHome } = useEventsContext();
  const [searchCateg, setSearchCateg] = useState("All");
  useEffect(() => {
    filterByCategoryHome(searchCateg);
  }, [searchCateg]);

  return (
    <div className="w-full">
      <Hero />
      <section
        id="events"
        className="mx-auto mt-[100px] w-[90%] h-fit overflow-hidden pt-px pb-[75.75px] rounded-tl-[40px] rounded-tr-[40px] border-l border-r border-t border-neutral-600"
      >
        <div className="hidden vsm:flex bg-zinc-900 w-full pt-[25px] pb-[33px] items-center justify-center gap-[10px] sm:gap-[35px]">
          {categories.map((category) => (
            <button
              onClick={() => {
                filterByCategoryHome(category);
                setSearchCateg(category);
              }}
              key={category}
              className={`${
                searchCateg == category
                  ? "hover:text-purple-50 font-bold"
                  : "text-zinc-500"
              } text-center text-lg cursor-pointer`}
            >
              {category}
            </button>
          ))}
        </div>

        <select
          value={searchCateg}
          onChange={(e) => {
            setSearchCateg(e.target.value);
          }}
          className="mt-[20px] block vsm:hidden mx-auto w-[80%] h-[30px] bg-transparent text-white border-[1px] border-white outline-none px-[5px]"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="w-full mt-[47px] flex flex-wrap vsm:gap-x-[24px] gap-y-[32px] justify-center">
          {homeEvents &&
            homeEvents.map((event, index) => (
              <Event key={index} event={event} />
            ))}
        </div>
        <Link
          to="/events"
          className="mt-[38.75px] mx-auto block text-indigo-600 text-center"
        >
          See All
        </Link>
      </section>
    </div>
  );
};

export default Home;
