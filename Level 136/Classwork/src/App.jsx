import React, { useState, useEffect } from 'react'

const App = () => {
  const[count, setCount] = useState(0)


  useEffect(() => {
    console.log(count)
  }, [count])
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
    
  )
}


//useEffect გამოიყენება იმისთვის რომ გავუშვათ გარკვეული ფუნქცია მდგომარეობის შემდეგ, ფუნქცია შეიძლება იყოს დამოკიდებული როგორც მდგომარეობის შეცვლაზე ასევე არაფერზე.

export default App