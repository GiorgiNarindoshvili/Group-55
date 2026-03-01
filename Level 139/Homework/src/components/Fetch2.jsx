import React, { useEffect, useState } from 'react'

const Fetch2 = () => {
  const[ap, setAp] = useState([])


  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
    .then((res) => res.json())
    .then((data) => {
        setAp(data)
        console.log(data)
    })
    .catch((err) => console.error(err))
  }, [])
  return (
    <>
        <div>
            {ap.map((items, index) => (
                <div key={index}>
                    <p>{items.email}</p>
                    <p>{items.username}</p>
                    <p>{items.password}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default Fetch2