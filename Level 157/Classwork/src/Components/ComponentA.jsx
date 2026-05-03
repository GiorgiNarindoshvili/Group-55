import React from 'react'
import { createContext, useState } from 'react'
import ComponentB from './ComponentB'


export const UserContext = createContext()


const ComponentA = () => {
    const[user, setUser] = useState("Gio")

  return (
    <div className='p-7 border-solid border-amber-950'>
        <div className='border border-solid border-amber-950'>
            <h1>Component oneee</h1>

            <h3>{`zdrasti ${user}`}</h3>
        </div>
        
    <br /><br /><br /><br /><br /><br /><br /><br />
        <UserContext.Provider value={user}>
            <ComponentB/>
        </UserContext.Provider>
    </div>
  )
}

export default ComponentA