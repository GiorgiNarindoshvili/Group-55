import React from 'react'
import { Link } from 'react-router-dom'


const Products = () => {
    const products = [
        {id: 1, name: "Iphone"},
        {id: 2, name: "Samsnung"},
        {id: 3, name: "Xiaomi"},
    ]

  return (
    <div>
        <h1>Products</h1>

        {products.map(product => (
            <div key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </div>
        ))}

    </div>
  )
}

export default Products