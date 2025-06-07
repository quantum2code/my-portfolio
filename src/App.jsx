import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import HeroHeading from "./components/HeroHeading";
import BottomSection from "./components/BottomSection";

function App() {
  const sectionRefs = useRef([]);

  return (
    <>
      <div className="flex mx-[4rem]">
        <div className="h-screen w-[max(40%,30rem)]">
          <div className=" fixed flex gap-4 text-gray-400 text-[15px] mt-3">
            <a>{`home [h]`}</a>
            <a>{`projects [p]`}</a>
            <a>{`gallery [g]`}</a>
          </div>
          <div className="fixed h-full flex flex-col justify-between gap-[1rem]">
            <HeroHeading />
            <BottomSection sectionRefs={sectionRefs} />
          </div>
        </div>
        <div className="w-[60%] gap-1 flex flex-col h-fit">
          <div
            id="sec1"
            ref={(el) => (sectionRefs.current[0] = el)}
            className="flex flex-col gap-[23px] pt-[90px]"
          >
            <Card hideTitle={true} content={"I'm a 19 y/o cs undergrad student with interest sapning in Web dev, Computer Graphics and Game engine, UI design and Digital painting. Glued to my terminal since 2020, learning exploring vast world of software dev"}/>

            <Card title={"Tech Stack"} hideContent={true} hideChips={false}/>
            <Card />
            <Card />
          </div>
          <div
            id="sec2"
            ref={(el) => (sectionRefs.current[1] = el)}
            className="flex flex-col gap-[23px]"
          >
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div
            id="sec3"
            ref={(el) => (sectionRefs.current[2] = el)}
            className="flex flex-col gap-[23px]"
          >
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
