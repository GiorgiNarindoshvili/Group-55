import React, { useContext } from 'react'
import { UserContext } from './ComponentA'

const ComponentB = () => {
    const user = useContext(UserContext)
  return (
   <div className='border border-amber-600'>
        <h1>Component twooo</h1>
        <h3>{`zdrasti ${user}`}</h3>
   </div>
  )
}

export default ComponentB