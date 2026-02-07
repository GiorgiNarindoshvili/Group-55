import React, { useState } from 'react'

const Counter = () => {
    const[counter, setCounter] = useState(0);
    return (
        <div className='bg-red-700 w-[300px] h-[200px]'>
            <p>Number is: {counter}</p><br />
            <button className='border border-gray-400 px-4 py-1 rounded hover:bg-gray-100 bg-[white] ' onClick={() => setCounter(counter + 1)}>Add 1</button>
            <button className='border border-gray-400 px-4 py-1 rounded hover:bg-gray-100 bg-[white]' onClick={() => setCounter(counter - 1)}>Subtract 1</button>
            <button className='border border-gray-400 px-4 py-1 rounded hover:bg-gray-100 bg-[white]' onClick={() => setCounter(0)}>Reset</button>
        </div>
  
  )
}

export default Counter