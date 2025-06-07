import React from "react";

function HeroHeading() {
  return (
    <div className=" fixed flex flex-col items-start pt-[80px] pl-[1rem] w-full">
      <h1 className="text-[30px] text-gray-500">I'm</h1>
      <h1 className="text-[35px]">Supriyo Purkait</h1>
      <h2 className="text-[25px] text-gray-500">
        Just a<span className="text-white"> WebDev</span> <span> with</span>
        <br />
        <span className="text-white">passion to build</span> something
        <br /> useful...
      </h2>
    </div>
  );
}

export default HeroHeading;
