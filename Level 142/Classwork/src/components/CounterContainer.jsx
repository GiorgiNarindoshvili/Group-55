import React, { useState, useEffect } from 'react'
import CounterPresent from './CounterPresent'



const CounterContainer = () => {
    const[count, setCount] = useState(0)

    useEffect(() => {
        console.log("component loaded")
    }, [])


    const increase = () => {
        setCount(prev => prev + 1)
    }
  return <CounterPresent count={count} onIncrease={increase}/>
    
  
}

export default CounterContainer