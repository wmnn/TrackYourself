import React from 'react'
import Check from './Check'

function ListItem({Wert, Text}) {
  return (
    <li className="flex justify-between">
        <div className="flex">
            <Check />
            <p>{Text}</p>
        </div>
        <p>{Wert}</p>
    </li>
  )
}

export default ListItem