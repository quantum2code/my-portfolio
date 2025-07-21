import React from "react";
import GDGCSVG from "./SVG/gdgcSVG";

const SubCard = () => {
  return (
    <div className="grid w-full gap-3 border-1 border-neutral-700 hover:border-green-600 hover:bg-linear-0 from-green-950 to-[none] to-20% p-4 rounded-2xl transition-all">
      <div className="flex gap-4">
        <div className="sm:w-35 w-20 rounded-xl hover:outline-1 outline-green-600">
          <GDGCSVG />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <a className="text-neutral-400 font-bold sm:text-xl text-sm">
            Completed GenAI workshop from GDGC MSIT
          </a>
          <p className="text-neutral-500 text-[12px] sm:text-sm line-clamp-4">
            Gained in-depth insights into Google's latest advancements in
            generative AI, including hands-on sessions on cloud skill boost
            labs,
            <br />
            Learned to use industry standard tools at GCP and Google AI Studio
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubCard;
