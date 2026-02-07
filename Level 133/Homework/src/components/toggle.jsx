import React, { useState } from 'react'

const Toggle = () => {
    const[toggle, setToggle] = useState(false)
  return (
    <div className={toggle ? "bg-black text-black min-h-screen" : 'bg-white text-black min-h-screen'}>
        <button className='border border-gray-400 px-4 py-1 rounded hover:bg-gray-100 bg-[white]' onClick={() => setToggle(!toggle)}>Switch the color</button>
    </div>
    
  )
}

export default Toggle