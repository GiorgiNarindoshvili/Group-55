import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserParams = () => {
    const{id} = useParams()

    const[user1, setUser1] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser1(data))
        .catch(err => console.error(err))
    }, [])
  return(
    <div>
        <p>{user1.username}</p>
            
        
    </div>
  )
}

export default UserParams