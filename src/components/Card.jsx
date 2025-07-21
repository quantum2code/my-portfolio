function Card({ title, content, hideTitle, hideContent, addJSX = null }) {
  return (
    // <div className='rounded-[12px]'>
    <div className="bg-[#111111] rounded-2xl h-fit m-1 p-4 border-neutral-700 hover:border-dashed border-2">
      <div hidden={hideTitle} className="font-bold text-xl text-white">
        <span className="text-green-500">{"* "}</span>
        {title}
      </div>
      <p hidden={hideContent} className="p-1 pt-0 text-gray-300">
        {content}
      </p>
      <div className="flex flex-col gap-4 w-full pl-7 pt-6 pr-5 pb-5">
        {addJSX}
      </div>
    </div>
    // </div>
  );
}

export default Card;
