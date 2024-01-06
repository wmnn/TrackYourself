import React from 'react'

function Button({text, buttonAction}) {
  return (
    <div className="rounded p-2 hover:cursor-pointer bg-slate-800 text-white w-[240px]" onClick={buttonAction}>
        <p>{text}</p>
    </div>
  )
}

export default Button