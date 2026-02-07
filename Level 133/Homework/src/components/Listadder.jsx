import React, { useState } from 'react'

const Listadder = () => {
    const[text, setText] = useState("")
    const[list, setList] = useState([])
  return (
    <div>
        <label htmlFor=""></label>
        <input type="text"  onChange={e => setText(e.target.value)}  className="border p-1 mr-2"/>
        <button className="border px-3 py-2" onClick={() => {
            setList([...list, text])
            setText('')
        }}>Add smthn</button>
        <ul>
            {list.map((items, index) => (
            <li key={index}>{items}</li>
        ))}
        </ul>
        
    </div>
  )
}

export default Listadder