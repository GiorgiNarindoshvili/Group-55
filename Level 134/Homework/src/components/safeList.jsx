import { useState } from "react"
import React from 'react'

const Namelist = () => {
    const[name, setName] = useState([])

    const addJohn = () => {
        setName(prev => [...prev, "John"])
    }

    const removeIndex = (indexRem) => {
        setName(prev => prev.filter((_, index) => index !== indexRem))
    }
  return (
    <div>
        <button onClick={addJohn}>Add John!</button>
        <ul>
            {name.map((items, index) => (
                <li key={index} onClick={() => removeIndex(index)}>{items}</li>
            ))}
        </ul>
    </div>  
  )
}

export default Namelist