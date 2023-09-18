import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import { onSnapshot, collection } from "firebase/firestore";

const eventsContext = createContext();

const EventsContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const colRef = collection(db, "events");
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(updatedData);
      setEvents(updatedData);
    });
  }, []);

  return (
    <eventsContext.Provider value={{ events }}>
      {children}
    </eventsContext.Provider>
  );
};

export default EventsContextProvider;

export const useEventsContext = () => {
  return useContext(eventsContext);
};
