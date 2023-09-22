import React from "react";
import { useEventsContext } from "../context/eventsContext";
import { formatDate2 } from "../utils/formatDate2";

const DateFilter = ({ date }) => {
  const { currDate, setCurrDate } = useEventsContext();
  return (
    <button
      onClick={() => setCurrDate(date)}
      className={`${
        currDate == date
          ? "text-neutral-100 bg-black"
          : "bg-neutral-100 text-black"
      } w-fit hover:border-black border-2 rounded-[10px] py-[14px] px-[47px] text-xl font-bold`}
    >
      {formatDate2(date)}
    </button>
  );
};

export default DateFilter;
