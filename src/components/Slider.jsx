import React from "react";

function Slider({ scrollY }) {
  return (
    <div className="w-[8%] relative mt-[18px]">
      <div className="h-[calc(50%-20px)] w-full relative top-0">
        <div
          className="absolute left-[50%] rounded-[100%] bg-white w-[12px] h-[12px] translate-[-50%] z-10"
          style={{ top: `${scrollY}%` }}
        ></div>
      </div>

      <div className="absolute top-0 left-[50%] translate-x-[-50%] h-full w-[2px] bg-white opacity-50 rounded-b-full"></div>
    </div>
  );
}

export default Slider;
