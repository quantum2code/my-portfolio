import Card from "./components/Card"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  // gsap.registerPlugin(useGSAP,ScrollTrigger);
  // useGSAP(()=>{
  //   gsap.to("#secActive",{
  //     scrollTrigger:{
  //       trigger: "#active",
  //       start:"top center",
  //       end:"+=20px",
  //       scrub:1,
  //       markers: true
  //     },
  //     fontSize: "24px"

  //   })
  // })
  // ignore the gsap code, didnt work

  return (
    <>
    <div className=" grid grid-cols-7 grid-rows-2 gap-[45px] h-screen max-w-[calc(100vw-10rem)] m-auto border-2 border-red-500">
      <div className="border-2 border-green-400 col-span-3 col-start-1 pt-[90px]">
        <h1>I'm</h1>
        <h1>
          Supriyo Purkait
        </h1>
        <h2>
          Just a WebDev with passion to build something useful...
        </h2>
      </div>
      <div id="secActive" className="border-2 border-green-400 col-span-3 col-start-1 row-start-2 ">
        list goes here...
      </div>
      <div className="gap-1 border-2 border-green-400 row-span-2 col-start-4 col-span-4 flex flex-col overflow-y-scroll  no-scrollbar">
      <div className="border-2 border-blue-500 flex flex-col gap-[23px]">
      <div className="h-[90px]"></div>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className="flex flex-col gap-[23px]" id="active">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
