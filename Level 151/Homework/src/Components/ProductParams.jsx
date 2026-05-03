import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const ProductParams = () => {
    const{id} = useParams()
    
    const[product, setProduct] = useState([])


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.error(err))
    })


  return (
    <div>
        <img src={product.image} alt="" />
        <p>{product.description}</p>
        <p>{product.price}</p>
    </div>
  )
}

export default ProductParams