import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { GoLocation } from "react-icons/go";

function HeroHeading() {
  return (
    <div className="flex flex-col items-start w-full pt-[75px]">
      {/* <h1 className="text-[30px] text-gray-500">I'm</h1> */}
      <h1 className="text-[35px] mb-1 font-semibold">Supriyo Purkait</h1>
      <div className="flex gap-1 py-1 text-gray-500 items-center">
        <GoLocation />
        Kokalta, India
      </div>
      <h2 className="text-[20px] text-gray-400 font-light">
        <span className="text-gray-400 font-medium"> Frontend dev</span>
        <span> with</span>
        <br />
        <span className="text-gray-400 font-medium">passion to build </span>
        something
        <br /> useful
      </h2>
    </div>
  );
}

export default HeroHeading;
