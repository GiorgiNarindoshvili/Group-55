import React, { useState, useEffect, useEffectEvent } from 'react'

const UseEffecteve = () => {

    const[count, setCount] = useState(0)


    const counter = useEffectEvent(() => {
        setCount(prev => prev + 1)
    })


    useEffect(() => {
        const intervalId = setInterval(() => {
            counter()
        }, 1000)
         

    return () => {
        clearInterval(intervalId)
    }
    }, [])
  return (
    <div>
        <p>{count}</p>
    </div>
  )
}

export default UseEffecteve