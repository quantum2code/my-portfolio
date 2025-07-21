import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import HeroHeading from "./components/HeroHeading";
import BottomSection from "./components/BottomSection";
import Chips from "./components/Chips";
import { chipsConstructor } from "./utils/chipsConstructor";
import ProjectCards from "./components/ProjectCards";

// const mobileSceenLogic = "[@media(min-height:650px)]";
const techStackObj = {
  lang: ["javascript", "typescript", "Python"],
  library: ["React.js", "express.js", "motion", "drizzle"],
  utils: ["Vim", "Linux"],
};

const USERNAME = "quantum2code";
const repoNameArr = ["game_launcher", "express-jwt-auth", "DiceRoller"];

function App() {
  const sectionRefs = useRef([]);

  return (
    <>
      <div className="flex flex-col mx-[2rem] sm:flex-row sm:mx-[4rem] gap-[4rem]">
        <div className="sm:h-screen sm:w-[max(40%,20rem)]">
          <div
            className={`hidden sm:fixed sm:flex gap-4 text-gray-400 text-[15px] mt-3`}
          >
            <a>{`about [h]`}</a>
            <a>{`projects [p]`}</a>
            {/* <a>{`gallery [g]`}</a> */}
          </div>
          <div
            className={`sm:fixed h-full flex flex-col justify-between gap-[1rem]`}
          >
            <HeroHeading />
            <BottomSection sectionRefs={sectionRefs} />
          </div>
        </div>
        <div className="sm:w-[60%] gap-2 flex flex-col h-fit">
          <div
            id="sec1"
            ref={(el) => (sectionRefs.current[0] = el)}
            className="flex flex-col gap-1 sm:pt-[90px] "
          >
            <Card
              hideTitle={true}
              content={
                "I'm a cs undergrad student with interests in Web dev, Computer Graphics and Game engine, UI design and Digital painting. Glued to the terminal since 2020, learning and exploring vast world of software dev"
              }
            />

            <Card
              title={"Tech Stack"}
              hideContent={true}
              hideChips={false}
              addChips={chipsConstructor(techStackObj.lang)}
              addJSX={
                <div className="grid m-2 gap-2">
                  <div className="flex">
                    {chipsConstructor(techStackObj.library)}
                  </div>
                  <div className="flex">
                    {chipsConstructor(techStackObj.utils)}
                  </div>
                </div>
              }
            />
            {/* <Card
              title={"Interests"}
              addJSX={
                <div className="h-[7rem] flex items-center justify-center text-gray-600">
                  Wow so empty...
                </div>
              }
            /> */}
          </div>
          <div
            id="sec2"
            ref={(el) => (sectionRefs.current[1] = el)}
            className="flex flex-col gap-[23px]"
          >
            <Card
              title={"Projects"}
              addJSX={
                <div className="flex flex-col gap-3 items-center justify-center">
                  <div className="flex flex-col gap-4 w-full pl-7 pt-6 pr-5 pb-5">
                    {repoNameArr.map((repoName) => (
                      <ProjectCards
                        key={repoName}
                        username={USERNAME}
                        repoName={repoName}
                      />
                    ))}
                  </div>
                </div>
              }
            />
          </div>
          <div
            id="sec3"
            ref={(el) => (sectionRefs.current[2] = el)}
            className="flex flex-col gap-[23px]"
          >
            <Card
              title={"Experiences"}
              addJSX={
                <div className="h-[7rem] flex items-center justify-center text-gray-600">
                  Wow so empty...
                </div>
              }
            />
          </div>
          <div className="h-[10rem] text-gray-600 flex items-center justify-center">
            {":)"}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
