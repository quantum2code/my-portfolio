import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import Slider from "./components/Slider";

const sections = ["About me", "Projects", "Experiences"];
const socials = [
  {
    name: "Github",
    logo: "",
    link: "",
  },
];

function App() {
  const ref = useRef([]);
  const scrollRef = useRef(null)
  const [visibleSec, setVisibleSec] = useState(null);
  let [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          
          if (entry.isIntersecting) {
            const index = ref.current.indexOf(entry.target);
            console.log("intersecting: ", sections[index]);
            setVisibleSec(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
      }
    );
    ref.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      ref.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

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
      <div className="grid grid-cols-7 gap-[45px] h-fit max-w-[calc(100vw-10rem)] m-auto ">
        <div className="flex flex-wrap justify-start col-span-3 gap-[45px] h-screen sticky top-0">
          <div className="pt-[90px] w-full border-g">
            <h1>I'm</h1>
            <h1>Supriyo Purkait</h1>
            <h2>Just a WebDev with passion to build something useful...</h2>
          </div>
          <div className="w-full flex">
            <Slider scrollY={scrollY}/>
            <div className="">
              <div className="w-full flex flex-col h-[50%] justify-between pl-[10px]">
                {sections.map((sec, index) => (
                  <h1
                    key={index}
                    className={`text-[20px] transition-transform origin-left duration-250 ease-in-out ${
                      visibleSec === index
                        ? "font-semibold scale-120 opacity-100"
                        : "opacity-60 scale-100"
                    }`}
                  >
                    {sec}
                  </h1>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="gap-1 col-start-4 col-span-4 flex flex-col h-fit">
          <div
            id="sec1"
            ref={(el) => (ref.current[0] = el)}
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
          </div>
          <div
            id="sec2"
            ref={(el) => (ref.current[1] = el)}
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
            ref={(el) => (ref.current[2] = el)}
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
