import React, { useState, useEffect } from "react";

const sections = ["About me", "Projects", "Experiences"];

function Sections({ sectionRefs }) {
  const [visibleSec, setVisibleSec] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let maxIndex = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            maxIndex = sectionRefs.current.indexOf(entry.target);
            console.log("intersecting: ", sections[maxIndex]);
          }
        });
        if (maxIndex !== null) setVisibleSec(maxIndex);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0.2,1],
      }
    );
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionRefs]);
  return (
    <div className="fixed bottom-[10rem] flex flex-col h-[10rem] justify-between m-0 pl-[3rem] border-r">
      {sections.map((sec, index) => (
        <h1
          key={index}
          className={`text-[20px] p-0 transition-transform origin-left duration-250 ease-in-out ${
            visibleSec === index
              ? "font-semibold scale-120 opacity-100"
              : "opacity-60 scale-100"
          }`}
        >
          {sec}
        </h1>
      ))}
    </div>
  );
}

export default Sections;
