import Card from "./components/Card";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);
  useGSAP(()=>{
    gsap.to("#secActive",{
      scrollTrigger:{
        trigger: "#active",
        start:"top top",
        end:"bottom bottom",
        scrub:1,
        pin: "#pin",
        markers: true
      },
    })
  })

  return (
    <>
      <div className=" grid grid-cols-7 grid-rows-2 gap-[45px] h-screen max-w-[calc(100vw-10rem)] m-auto ">
        <div id="pin" className="flex flex-wrap col-span-3 row-span-2 gap-[45px]">
        <div className="pt-[90px] w-full h-[50%] border-g">
          <h1>I'm</h1>
          <h1>Supriyo Purkait</h1>
          <h2>Just a WebDev with passion to build something useful...</h2>
        </div>
        <div
          className="w-full h-full border-g"
        >
          list goes here...
        </div>
        </div>
        <div id="active" className="gap-1 row-span-2 col-start-4 col-span-4 flex flex-col h-fit border-g">
          <div className="flex flex-col gap-[23px] pt-[90px] border-b">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex flex-col gap-[23px]">
            <Card />
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
        </div>
      </div>
    </>
  );
}

export default App;
