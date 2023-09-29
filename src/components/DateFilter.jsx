import React from "react";
import { useEventsContext } from "../context/eventsContext";
import { formatDate2 } from "../utils/formatDate2";

const DateFilter = ({ date }) => {
  const { currDate, setCurrDate, filterByDate } = useEventsContext();
  return (
    <button
      onClick={() => {
        setCurrDate(date);
        filterByDate(date);
      }}
      className={`${
        currDate == date
          ? "bg-[#1BB502] text-white"
          : "bg-[#AFBCAD] text-[#E4DCDC]"
      } w-[18%] hover:border-black border-transparent border-2 rounded-xl py-[8px] xl:py-[14px] text-[15px] xl:text-xl font-bold`}
    >
      {formatDate2(date)}
    </button>
  );
};

export default DateFilter;
