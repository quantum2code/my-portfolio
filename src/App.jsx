import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import Slider from "./components/Slider";
import Socials from "./components/Socials";
import Sections from "./components/Sections";
import HeroHeading from "./components/HeroHeading";

function App() {
  const sectionRefs = useRef([]);
  let [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      // console.log(progress)
      setScrollY(progress);
      // console.log(scrollY)
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);

  return (
    <>
    <div className="flex mx-[4rem]">
      <div className="h-screen w-[40%] border-g">
      <HeroHeading />
      <Slider scrollY={scrollY} />
      <Sections sectionRefs={sectionRefs} />
      <Socials />
      </div>
      <div className="w-[60%] gap-1 flex flex-col h-fit border-g">
        <div
          id="sec1"
          ref={(el) => (sectionRefs.current[0] = el)}
          className="flex flex-col gap-[23px] pt-[90px]"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div
          id="sec2"
          ref={(el) => (sectionRefs.current[1] = el)}
          className="flex flex-col gap-[23px] border-r"
        >
          <Card />
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
          <Card />
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
