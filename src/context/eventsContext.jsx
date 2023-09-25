import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import { onSnapshot, collection, setDoc, doc } from "firebase/firestore";

const eventsContext = createContext();

const EventsContextProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [recEvents, setRecEvents] = useState([]);
  const [homeEvents, setHomeEvents] = useState(recEvents);
  const [currDate, setCurrDate] = useState("");
  const [noEvents, setNoEvents] = useState(false);

  const currentDate = new Date();

  useEffect(() => {
    setNoEvents(false);
    onSnapshot(collection(db, "events"), (snapshot) => {
      setIsFetching(true);
      const updatedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecEvents(updatedData);
      setIsFetching(false);
    });
  }, []);

  useEffect(() => {
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

    setCurrDate(formattedDate);
  }, []);

  useEffect(() => {
    if (currDate == "") {
      return;
    }
    filterByDate(currDate);
  }, [recEvents]);

  const filterByDate = (currDate) => {
    const filteredList =
      recEvents && recEvents.filter((event) => event.date == currDate);

    setHomeEvents(filteredList);
    if (filteredList.length < 1) {
      setNoEvents(true);
    } else {
      setNoEvents(false);
    }
  };

  const addEvent = (newEvent) => {
    setDoc(doc(db, "events", newEvent.id), newEvent);
  };

  const filterBySearch = (text) => {
    setHomeEvents(
      recEvents.filter((event) =>
        event.name.toLowerCase().includes(text.toLowerCase())
      )
    );
    setCurrDate("");
  };

  return (
    <eventsContext.Provider
      value={{
        homeEvents,
        addEvent,
        isFetching,
        currDate,
        setCurrDate,
        filterByDate,
        filterBySearch,
        noEvents,
      }}
    >
      {children}
    </eventsContext.Provider>
  );
};

export default EventsContextProvider;

export const useEventsContext = () => {
  return useContext(eventsContext);
};
