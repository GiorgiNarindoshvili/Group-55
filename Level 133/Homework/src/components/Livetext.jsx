import React, { useState } from 'react'

const Livetext = () => {
    const[change, setChange] = useState("")
  return (
    <div>
        <label htmlFor="nga">Put your message</label><br />
        <input type="text" id='nga' onChange={(e) => setChange(e.target.value)}/>
        <br /><br /><br />
        <p>{change}</p>
    </div>
  )
}

export default Livetext