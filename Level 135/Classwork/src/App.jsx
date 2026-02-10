import React, { useState } from 'react'

const App = () => {
  const [state, setState] = useState([])
  const[input, setInput] = useState("")

  const addItem = () => {
    
    setState(prev => [...prev, input])
    setInput("")
  }

  const removeItem = (remi) => {
    setState((prev) => prev.filter((_, index) => index !== remi))
  }
  return (
    <div>
      <input type="text" placeholder='Add your task' value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addItem}>add anything</button>

      <ul>
        {state.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App