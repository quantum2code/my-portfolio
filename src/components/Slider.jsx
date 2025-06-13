import React, { useState, useEffect } from "react";

function Slider() {
  let [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollY(progress);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);



  return (
    <div className="w-[2rem] relative left-[-0.5rem] hidden sm:block">
      <div className="h-[calc(10rem-30px)] w-full relative top-[17px]">
        <div
          className="absolute left-[50%] rounded-[100%] bg-gray-400 w-[12px] h-[12px] translate-[-50%] z-10"
          style={{ top: `${scrollY}%` }}
        ></div>
      </div>

      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] h-[calc(100%-17px)] w-[2px] bg-gray-400 opacity-50 rounded-b-full"></div>
    </div>
  );
}

export default Slider;
