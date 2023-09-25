import React, { useState } from "react";
import Event from "../components/Event";
import { useEventsContext } from "../context/eventsContext";
import { FaSearch } from "react-icons/fa";
import DateFilter from "../components/DateFilter";
import { BiCalendarX } from "react-icons/bi";

const Home = () => {
  const { homeEvents, isFetching, filterBySearch, noEvents } =
    useEventsContext();
  const [value, setValue] = useState("");

  const currentDate = new Date();
  const dateList = [];

  // Loop to get the dates from current date to six days ago
  for (let i = 0; i < 6; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - i);

    // Format the date as 'yyyy-mm-dd' (or any desired format)
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    dateList.push(formattedDate);
  }

  return (
    <div className="w-full bg-[#F0F0F0]">
      <section
        id="events"
        className="mx-auto pt-[50px] xmd:pt-[100px] w-[90%] h-fit overflow-hidden pb-[75.75px]"
      >
        <h1 className="text-black text-center text-[40px] vsm:text-[60px] xmd:text-8xl font-bold">
          New Launches
        </h1>

        <div className="mx-auto mt-[35px] mb-[50px] vsm:mb-[100px] w-full xmd:w-[630px] h-[62px] rounded-[20px] bg-white flex border-[1px] border-[#F7F6FD]">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 px-[20px] text-black bg-transparent outline-none border-none"
          />
          <button
            onClick={() => filterBySearch(value)}
            className="w-[50px] h-full rounded-[8px] grid place-items-center"
          >
            <FaSearch className="text-black text-[20px]" />
          </button>
        </div>

        <div className="h-[76px] px-[10px] xmd:py-0 bg-blue-700 bg-opacity-30 flex items-center justify-center gap-[10px] md:gap-[30px]">
          {dateList.reverse().map((date, index) => (
            <DateFilter key={index} date={date} />
          ))}
        </div>

        <div className="w-full mt-[47px] flex flex-wrap vsm:gap-x-[24px] gap-y-[32px] justify-center">
          {isFetching && (
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          {noEvents && (
            <div className="flex flex-col items-center">
              <BiCalendarX className="text-[red] text-[200px]" />
              <h1 className="text-black text-center text-[1.5rem] vsm:text-[2.5rem]">
                No Events for today
              </h1>
            </div>
          )}

          {homeEvents &&
            homeEvents.map((event, index) => (
              <Event key={index} event={event} />
            ))}
        </div>

        {/* <button className="mt-[38.75px] mx-auto block text-black text-xl text-center">
          Show More
        </button> */}
      </section>
    </div>
  );
};

export default Home;
