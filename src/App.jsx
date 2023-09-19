import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddEvent from "./pages/AddEvent";
import EventDetails from "./pages/EventDetails";
import Events from "./pages/Events";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto min-h-screen font-Inter bg-[#121418] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
