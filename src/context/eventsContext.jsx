import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import { onSnapshot, collection, setDoc, doc } from "firebase/firestore";

const eventsContext = createContext();

const EventsContextProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [recEvents, setRecEvents] = useState([]);
  const [events, setEvents] = useState(recEvents);
  const [homeEvents, setHomeEvents] = useState(recEvents);

  useEffect(() => {
    onSnapshot(collection(db, "events"), (snapshot) => {
      setIsFetching(true);
      const updatedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecEvents(updatedData);
      setEvents(updatedData);
      setHomeEvents(updatedData);
      setIsFetching(false);
    });
  }, []);

  const addEvent = (newEvent) => {
    setDoc(doc(db, "events", newEvent.id), newEvent);
  };

  const filterByCategoryHome = (category) => {
    if (category === "All") {
      setHomeEvents(recEvents);
    } else {
      setHomeEvents(recEvents.filter((event) => event.category === category));
    }
  };

  const filterByCategory = (category) => {
    if (category === "All") {
      setEvents(recEvents);
    } else {
      setEvents(recEvents.filter((event) => event.category === category));
    }
  };

  const filterBySearch = (text) => {
    if (text === "") {
      setEvents(recEvents);
    } else {
      setEvents(
        recEvents.filter((event) =>
          event.name.toLowerCase().includes(text.trim().toLowerCase())
        )
      );
    }
  };

  return (
    <eventsContext.Provider
      value={{
        events,
        homeEvents,
        addEvent,
        filterByCategory,
        filterByCategoryHome,
        filterBySearch,
        isFetching,
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
