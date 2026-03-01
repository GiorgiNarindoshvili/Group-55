import React, { useEffect, useEffectEvent, useState } from 'react'

const App = () => {
  const[timer, setTimer] = useState(0)

  const tm = useEffectEvent(() => {
    setTimer(prev => prev + 1) 
  })

  

  useEffect(() => {
    const intervalId = setInterval(() => {
      tm()
    }, 1000)
 

    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
    <div>
      <p>{timer}</p>
    </div>
  )
}

export default App