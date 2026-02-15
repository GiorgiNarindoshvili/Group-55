import React from 'react'
import { useState } from 'react'

const Counterpro = () => {
  const[count, setCount] = useState(0)
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
        <button onClick={() => setCount((prev) => prev + 5)}>+5</button>
    </div>
    
  )
}

export default Counterpro