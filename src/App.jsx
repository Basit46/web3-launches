import React from "react";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto min-h-screen font-Inter bg-[#121418] text-white">
      <Navbar />
      <Hero />
      <Events />
      <Footer />
    </div>
  );
};

export default App;
