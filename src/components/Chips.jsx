import React from 'react'

function Chips({content="empty"}) {
  return (
    <div className='w-fit h-fit rounded-full p-1.5 px-3.5 bg-[#333333] text-[15px] text-gray-300 text-center border-1 border-gray-400 hover:scale-98 '>{"• "}{content}</div>
  )
}

export default Chips