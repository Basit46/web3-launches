import React, { useState, useRef } from "react";
import Event from "../components/Event";
import { useEventsContext } from "../context/eventsContext";
import DateFilter from "../components/DateFilter";
import { BiCalendarX } from "react-icons/bi";
import searchIcon from "../assets/Search.svg";
import heroImg from "../assets/heroImg.png";
import { Link as ScrollLnk } from "react-scroll";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Home = () => {
  const containerRef = useRef();
  const eventContainer = useRef();

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

  const handleScroll = (isLeft) => {
    alert(eventContainer.current.clientWidth + 40);
    if (isLeft) {
      containerRef.current.scrollLeft -=
        window.innerWidth > 1200
          ? 600
          : eventContainer.current.clientWidth + 40;
    } else {
      containerRef.current.scrollLeft +=
        window.innerWidth > 1200
          ? 600
          : eventContainer.current.clientWidth + 40;
    }
  };

  return (
    <div className="min-h-[100vh] w-full bg-white">
      <section
        id="events"
        className="mx-auto pt-[10px] w-[90%] h-fit overflow-hidden pb-[75.75px]"
      >
        <h1 className="text-black font-Satoshi text-center text-[40px] vsm:text-[60px] xmd:text-[80px] font-bold">
          Today Launch
        </h1>

        <div className="mx-auto mt-[10px] mb-[20px] vsm:mb-[35px] w-full xmd:w-[630px] h-[60px] bg-gray-200 rounded-xl border flex">
          <button
            onClick={() => filterBySearch(value)}
            className="w-[50px] h-full rounded-[8px] grid place-items-center"
          >
            <img src={searchIcon} alt="search icon" />
          </button>
          <input
            type="text"
            value={value}
            placeholder="Search events..."
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 px-[20px] text-neutral-500 bg-transparent outline-none border-none"
          />
        </div>

        <div className="h-[76px] px-[10px] xmd:py-0 flex items-center justify-center gap-[10px] md:gap-[30px]">
          {dateList.reverse().map((date, index) => (
            <DateFilter key={index} date={date} />
          ))}
        </div>

        <div className="hero-banner mt-[30px] relative w-full h-fit vsm:h-[255.85px] bg-indigo-600 bg-opacity-60 rounded-[11.438px] px-[10px] vsm:pl-[30px] md:pl-[67px] py-[20px]">
          <h1 className="text-stone-50 text-[25px] xmd:text-[39.18px] leading-[1.2] font-bold font-SpaceGrotesk xmd:leading-[44.67px]">
            Discover, Find, Attend and <br className="hidden vsm:block" />
            Submit your launch
          </h1>
          <p className="mt-[8.32px] mb-[27px] text-white text-[13.06px] leading-snug">
            Search for launch, attend launch and submit your launch
          </p>
          <div className="flex flex-col vsm:flex-row gap-[10px] vsm:gap-[20px]">
            <ScrollLnk
              to="launches"
              duration={500}
              smooth={true}
              offset={-200}
              className="w-fit px-[10px] md:px-12 py-[15.57px] cursor-pointer bg-white rounded-md border border-white text-indigo-600 text-sm font-medium leading-[13.81px]"
            >
              Upcoming launches
            </ScrollLnk>
            <Link
              to="/addevent"
              className="w-fit px-[10px] md:px-12 py-[15.57px] bg-transparent rounded-md border border-white text-white text-sm font-medium leading-[13.81px]"
            >
              Submit your launch
            </Link>
          </div>

          <img
            src={heroImg}
            className="hidden xmd:block absolute right-0 bottom-0 h-full"
            alt="hero Image"
          />
        </div>

        <div className="mt-[30px] w-full flex justify-between items-center">
          <h1 className="text-black text-3xl font-bold font-Satoshi">
            Popular Launch
          </h1>
          <div className="flex gap-[10px]">
            <button
              onClick={() => handleScroll(true)}
              className="h-[40px] w-[40px] rounded-full bg-[#494949] grid place-items-center"
            >
              <BsArrowLeft className="text-white text-[18.462px]" />
            </button>
            <button
              onClick={() => handleScroll(false)}
              className="h-[40px] w-[40px] rounded-full bg-[#494949] grid place-items-center"
            >
              <BsArrowRight className="text-white text-[18.462px]" />
            </button>
          </div>
        </div>

        <div id="launches" className="w-full mt-[20px] flex justify-center">
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

          {homeEvents && homeEvents.length > 0 && (
            <div
              ref={containerRef}
              className="w-full overflow-y-auto scroll-smooth duration-1000 pr-[15px]"
            >
              <div className="w-fit flex gap-x-[40px]">
                {homeEvents.map((event, index) => (
                  <Event
                    key={index}
                    event={event}
                    eventContainer={eventContainer}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
