import React, { useState, useEffect } from 'react'

const Products = () => {
    const[info, setInfo] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setInfo(data)
            console.log(data)
        })
    }, [])

  return (
    <div>
        {info.map((item)=> {
            return(
                <div>
                    <p>{item.title}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Products