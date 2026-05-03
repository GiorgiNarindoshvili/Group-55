import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Users = () => {
    const[user, setUser] = useState([])


    useEffect(() => {
        fetch("https://fakestoreapi.com/users")
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.error(err))
    }, [])

   return (
    <div>
        {user.map((items, id) => (
            <Link to={`/users/${id}`}><div key={id} className='border border-black'>
                <p>{items.username}</p>
                <p>{items.number}</p>
                <p>{items.email}</p>
                <p>{items.password}</p>
            </div></Link>
        ))}
    </div>
  )
}

export default Users