import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const[api, setApi] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setApi(data))
    .catch(err => console.error(err))
  }, [])


  return(
    <div className='grid grid-cols-3 gap-2.5'>
        {api.map((items, id) => (
            <Link to={`/product/${id}`}><div key={id}>
                <img src={items.image} alt="product" />
                <h1 className='text-4xl'>{items.title}</h1>

            </div>
            </Link>
        ))}
    </div>
  )
}

export default Product