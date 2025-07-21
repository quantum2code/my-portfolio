import React, { useState, useEffect } from "react";

const sections = ["About me", "Projects", "Experiences"];

function Sections({ sectionRefs, animationEnabled = true }) {
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
    <div className="w-[95%] fixed left-1/2 translate-x-[-50%] sm:translate-x-0 top-3 sm:static flex sm:flex-col  justify-between sm:px-0 px-3 sm:h-[11rem] backdrop-blur-xl sm:backdrop-blur-0 rounded-xl">
      {sections.map((sec, index) => (
        <a
          key={index}
          href={`#sec${index + 1}`}
          className={`sm:text-xl text-sm font-extralight p-2 transition-transform sm:origin-left origin-center duration-250 ease-in-out ${
            visibleSec === index && animationEnabled
              ? " scale-110 text-gray-50"
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
