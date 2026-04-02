import React, {useEffect, useState} from 'react'

const Fetch = () => {
    const[info, setInfo] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
        .then(res => res.json())
        .then(data => {
            setInfo(data)
        }) 
        
    }, []) 
  return (
    <div>
        {info.map(user => {
            return (
            <p key={user.id}>{user.title}</p>
        )
        })}
    </div>
  )
}

export default Fetch