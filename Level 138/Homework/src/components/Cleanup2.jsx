import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Cleanup2 = () => {
    const[timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000) 


        return () => {
        clearInterval(interval)
    }
    })

    
  return (
    <div>
        <p>{timer}</p>
    </div>
  )
}

export default Cleanup2