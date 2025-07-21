import React from "react";

function Chips({ content = "empty" }) {
  return (
    <div className="flex gap-2 mr-2 rounded-full p-2 px-3.5 font-medium text-[#ffffff90] bg-[#33333390] hover:bg-linear-0 from-[#0a4a2190] to-[#22222290] to-70% tracking-wider hover:text-green-500 text-[15px] text-center  hover:scale-98 transition-[scale] cursor-pointer ">
      <span>{"•"}</span>
      {content}
    </div>
  );
}

export default Chips;
