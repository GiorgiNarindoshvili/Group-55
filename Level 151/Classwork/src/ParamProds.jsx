import React from 'react'
import { useParams } from 'react-router-dom'



const ParamProds = () => {
    const{id} = useParams()

  return (
    <div>
        <h1>Product Id : {id}</h1>
    </div>
  )
}

export default ParamProds