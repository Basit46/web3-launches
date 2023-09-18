import React from "react";
import Hero from "../components/Hero";
import Event from "../components/Event";
import { useEventsContext } from "../context/eventsContext";
import { categories } from "../constants/categories";

const Home = () => {
  const { events } = useEventsContext();
  return (
    <div>
      <Hero />
      <section
        id="events"
        className="events mx-auto mt-[100px] w-[90%] min-h-[800px] overflow-hidden pt-px pb-[75.75px] rounded-tl-[40px] rounded-tr-[40px] border-l border-r border-t border-neutral-600"
      >
        <ul className="hidden vsm:flex bg-zinc-900 w-full pt-[25px] pb-[33px] items-center justify-center gap-[10px] sm:gap-[35px]">
          <li>All</li>
          <li>ICO</li>
          <li>Launch</li>
          <li>NFT Mint</li>
          <li>Conferences</li>
        </ul>

        <select
          defaultValue="All"
          className="mt-[20px] block vsm:hidden mx-auto w-[80%] h-[30px] bg-transparent text-white border-[1px] border-white outline-none px-[5px]"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="mt-[47px] flex flex-wrap gap-x-[24px] gap-y-[32px] justify-center">
          {events.length > 0 &&
            events.map((event, index) => <Event key={index} event={event} />)}
        </div>
        <a
          href="#"
          className="mt-[38.75px] mx-auto block text-indigo-600 text-center"
        >
          See All
        </a>
      </section>
    </div>
  );
};

export default Home;
