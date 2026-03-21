import React, { useEffect, useState } from 'react'
import UserView from './UserView'

const Third = () => {
    const[users, setUsers] = useState([])


    useEffect(() => {
        setTimeout(() => {
            setUsers([
                { id: 1, name1: "Luka" },
                { id: 2, name1: "Nino" },
                { id: 3, name1: "Giorgi" }
            ])
            
        }, 1000)
    }, [])
  return (
    <UserView users={users}/>
  )
}

export default Third