import React from "react";

const LoadingModal = () => {
  return (
    <div className="absolute z-[10] top-0 left-0 w-full h-full bg-black/70 flex flex-col items-center justify-center gap-[40px]">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1 className="text-[1.5rem] text-white font-bold">Adding Event...</h1>
    </div>
  );
};

export default LoadingModal;
