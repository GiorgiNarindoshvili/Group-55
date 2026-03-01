import React, { useEffect, useState } from 'react'
useEffect, useState
const Fetch3 = () => {
   const [info, setInfo] = useState(null)


  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((data) => {
        setInfo(data)
        console.log(data)
    })
    .catch((err) => console.error(err))
  }, [])
  return (
    <div>
        {info &&
         <p>{info.title}</p>}
    </div>
  )
}

export default Fetch3