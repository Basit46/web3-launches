import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import { onSnapshot, collection, setDoc, doc } from "firebase/firestore";

const eventsContext = createContext();

const EventsContextProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [recEvents, setRecEvents] = useState([]);
  const [homeEvents, setHomeEvents] = useState(recEvents);
  const [currDate, setCurrDate] = useState("");

  const currentDate = new Date();

  useEffect(() => {
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

    setCurrDate(formattedDate);
  }, []);

  useEffect(() => {
    setHomeEvents(
      recEvents && recEvents.filter((event) => event.date == currDate)
    );
  }, [recEvents, currDate]);

  useEffect(() => {
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

  const addEvent = (newEvent) => {
    setDoc(doc(db, "events", newEvent.id), newEvent);
  };

  return (
    <eventsContext.Provider
      value={{
        homeEvents,
        addEvent,
        isFetching,
        currDate,
        setCurrDate,
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
