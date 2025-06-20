import React, { useState, useEffect } from "react";

const sections = ["About me", "Projects", "Experiences"];

function Sections({ sectionRefs , animationEnabled = false}) {
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
        threshold: [0.3],
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
    <div className="w-[90%] fixed left-1/2 translate-x-[-50%] sm:translate-x-0 top-3 sm:static flex sm:flex-col sm:h-[10rem] justify-between backdrop-blur-xl rounded-xl">
      {sections.map((sec, index) => (
        <a
          key={index}
          href={`#sec${index+1}`}
          className={`sm:text-[18px] font-extralight p-2 transition-transform origin-left duration-250 ease-in-out ${
            visibleSec === index && animationEnabled
              ? " scale-120 text-gray-50"
              : "text-gray-400 scale-100"
          }`}
        >
          {`${sec}`}
        </a>
      ))}
    </div>
  );
}

export default Sections;
