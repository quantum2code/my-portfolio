import React from "react";
import Chips from "./Chips";

function Card({
  title,
  content,
  hideTitle,
  hideContent,
  hideChips = true,
  addChips = null,
  addJSX = null,
}) {
  return (
    // <div className='rounded-[12px]'>
    <div className="bg-[#111111] rounded-[8px] h-fit m-1 p-4 border-neutral-700 hover:border-dashed border-2">
      <div hidden={hideTitle} className="font-bold text-xl text-white">
        <span className="text-green-500">{"* "}</span>
        {title}
      </div>
      <p hidden={hideContent} className="p-1 pt-0 text-gray-300">
        {content}
      </p>
      <div hidden={hideChips} className="flex-wrap flex h-full gap-2 m-2">
        {addChips}
      </div>
      {addJSX}
    </div>
    // </div>
  );
}

export default Card;
