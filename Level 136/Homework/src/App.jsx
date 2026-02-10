import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const[information, setInfo] = useState([])


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      setInfo(data)
    })
    .catch((error) => console.error(error))
  }, [])
  console.log(information)
  return (
    <div className='grid grid-cols-3 gap-5'>
      
      {information.map((items) => (
      <div id={items.id} className='border border-blue-600 rounded-2xl flex flex-col border-2 w-[390px] items-center justify-center' >
          <p>{items.title}</p>
          <p>{items.price}</p>
          <p>{items.description}</p>
          <img src={items.image} alt={items.title} id={items.id} />
          <button className='bg-sky-400 rounded-3xl w-[200px] flex justify-center items-center h-[40px] hover:bg-sky-500 hover:w-[210px] hover:h-[50px] duration-[0.3s]'>Buy</button>
      </div>
        
      ))}
      
      
    </div>
  )
}

export default App