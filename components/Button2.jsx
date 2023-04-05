import React from 'react'

function Button2({text, buttonAction}) {
  return (
    <>
    <button onClick={buttonAction} className="rounded mt-2 h-8 w-full bg-[#369623] hover:cursor-pointer hover:translate-y-[-4px] hover:bg-[#0b6a16] transition-all"><p className='text-white'>{text}</p></button>
    </>
    
  )
}

export default Button2