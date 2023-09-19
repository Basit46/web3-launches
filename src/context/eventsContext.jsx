import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import { onSnapshot, collection, setDoc, doc } from "firebase/firestore";

const eventsContext = createContext();

const EventsContextProvider = ({ children }) => {
  const [recEvents, setRecEvents] = useState([]);
  const [events, setEvents] = useState(recEvents);
  const [homeEvents, setHomeEvents] = useState(recEvents);

  useEffect(() => {
    onSnapshot(collection(db, "events"), (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecEvents(updatedData);
      setEvents(updatedData);
      setHomeEvents(updatedData);
    });
  }, []);

  const addEvent = (newEvent) => {
    setDoc(doc(db, "events", newEvent.id), newEvent);
  };

  const filterByCategoryHome = (category) => {
    if (category === "All") {
      console.log("hello one", recEvents);
      setHomeEvents(recEvents);
    } else {
      setHomeEvents(recEvents.filter((event) => event.category === category));
    }
  };

  const filterByCategory = (category) => {
    if (category === "All") {
      console.log("hello one", recEvents);
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