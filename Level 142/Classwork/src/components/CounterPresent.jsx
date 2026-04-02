import React from 'react'

const CounterPresent = ({ count, onIncrease }) => {
  return (
    <>
        <p>Count: {count}</p>
        <button onClick={onIncrease}>Click to increase</button>
    </>
    
  )
}

export default CounterPresent