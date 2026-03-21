import React, { useEffect, useEffectEvent, useState } from 'react'

const Likes = () => {
    const[likes, setLikes] = useState(0)


    const handleLikes = () => {
        setLikes(prev => prev + 1)
    }
    const reset =()=> {
        setLikes(0)
    }
    
  return (
    <div>
        <button onClick={handleLikes}>Like it!</button>
        <button onClick={reset}>Reset</button>
        <p>Like: {likes}</p>
        
    </div>
    
  )
}

export default Likes