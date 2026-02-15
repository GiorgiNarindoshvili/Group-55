import React, { useState } from 'react'

const App = () => {
  const[count, setCount] = useState(0)

  const Increment = () => {
    setCount((prev) => prev + 1)
  }

  const Decrement = () => {
    setCount((prev) => prev - 1)
  }

  const Reset = () => {
    setCount((prev) => prev == 0)
  }
  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App