import React from "react";
import Slider from "./Slider";
import Socials from "./Socials";
import Sections from "./Sections";

function BottomSection({ sectionRefs }) {
  return (
    <div className=" flex h-[50%]">
      <Slider />
      <div className="flex flex-col gap-[4rem]">
        <Sections sectionRefs={sectionRefs} />
        <Socials />
      </div>
    </div>
  );
}

export default BottomSection;
