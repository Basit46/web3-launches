import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import { onSnapshot, collection, setDoc, doc } from "firebase/firestore";

const eventsContext = createContext();

const EventsContextProvider = ({ children }) => {
  const [recEvents, setRecEvents] = useState([]);
  const [events, setEvents] = useState(recEvents);

  const colRef = collection(db, "events");
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecEvents(updatedData);
    });
  }, []);

  const addEvent = (newEvent) => {
    setDoc(doc(db, "events", newEvent.id), newEvent);
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
      value={{ events, addEvent, filterByCategory, filterBySearch }}
    >
      {children}
    </eventsContext.Provider>
  );
};

export default EventsContextProvider;

export const useEventsContext = () => {
  return useContext(eventsContext);
};
