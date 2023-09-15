import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full pt-[40px] md:pt-[79px] px-[20px] md:px-0"
    >
      <h1 className="text-center text-[33px] vsm:text-[38px] md:text-[40px] xmd:text-[56px] font-bold text-purple-50 leading-[1.2]">
        Get access to upcoming event in the{" "}
        <span className="text-indigo-600">cryptocurrency</span> and{" "}
        <span className="text-indigo-600">Web3</span> Space
      </h1>
      <p className="mt-[20px] mb-[45px] text-center text-[13px] vsm:text-[15px] md:text-[16px] sm:text-0 font-medium">
        We are dedicated to providing you with information about upcoming events
        <br className="hidden md:block" />
        and launches in the web3 and cryptocurrency space
      </p>
      <button className="mx-auto block px-[69px] py-[13px] bg-indigo-600 rounded-2xl text-purple-50 font-bold">
        Discover Event
      </button>
    </section>
  );
};

export default Hero;
