import Card from "./components/Card";

function App() {

  return (
    <>
      <div className="grid grid-cols-7 gap-[45px] h-fit max-w-[calc(100vw-10rem)] m-auto ">
        <div
          id="pin"
          className="flex flex-wrap justify-start col-span-3 gap-[45px] h-screen sticky top-0 border-r"
        >
          <div className="pt-[90px] w-full border-g">
            <h1>I'm</h1>
            <h1>Supriyo Purkait</h1>
            <h2>Just a WebDev with passion to build something useful...</h2>
          </div>
          <div className="w-full border-g">
            <div id="secTitle1" className="">About me</div>
            <div id="secTitle2">Projects</div>
            <div>Experience</div>
          </div>
        </div>
        <div
          id="active"
          className="gap-1 col-start-4 col-span-4 flex flex-col h-fit border-g"
        >
          <div id="sec1" className="flex flex-col gap-[23px] pt-[90px] border-b">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div id="sec2" className="flex flex-col gap-[23px]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
          <div id="sec3" className="flex flex-col gap-[23px]">
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
