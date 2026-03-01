import React, { useEffect, useState } from 'react'

const Fetch1 = () => {
   const[Api, setApi] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        setApi(data)
        console.log(data)
    })
    .catch((err) => console.error(err))
  }, [])
  return (
    <div>
       {Api.map((items, id) => (
        <div key={id} style={{border: "1px solid black", width: "500px"}}>
            <p>{items.title}</p>
            <img src={items.image} alt="images" />
            <p>{items.category}</p>
            <p>{items.price}</p>
        </div>
       ))}
    </div>
       
    
  )
}

export default Fetch1