import React from 'react'
import Chips from './Chips'

function Card({title,content,hideTitle, hideContent, hideChips=true}) {
  return (
    // <div className='rounded-[12px]'>
    <div className='bg-[#111111] rounded-[8px] h-fit m-1 p-2 border-gray-500 hover:border-dashed border-2'>
     <div hidden={hideTitle} className='font-bold text-xl text-white' >
      <span className='text-green-500'>{"* "}</span>
      {title}
     </div>
     <p haidden={hideContent} className='p-1 pt-0 text-gray-300'>{content}</p>
     <div hidden={hideChips} className='flex-wrap flex h-full gap-2 m-2'>
      <Chips content={"javascript"}/>
      <Chips content={"React.js"}/>
      <Chips content={"Node.js"}/>
     </div>
     <div hidden={hideChips} className='flex-wrap flex h-full gap-2 m-2 mt-3'>
      <Chips content={"Vim"}/>
      <Chips content={"Linux"}/>
      </div>
    </div>
    // </div>
  )
}

export default Card