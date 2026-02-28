import React, { useState, useEffect} from 'react'

const App = () => {
  const[info, setInfo] = useState([])

  useEffect(() => {
    let run = true

    fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((data) => {
      if(run){
        setInfo(data)
        console.log(data)
      }
    })
    .catch((err) => console.error(err))

    return () => {
      run = false;
    }
  }, [])

  return(
    <div>
      {info.map((items, index) => (
        <div key={index}>
          <h1>{items.title}</h1>
          <p>{items.description}</p>
          <img src={items.image} alt="images" />
          <p>{items.price}</p>
          <p>{items.category}</p>
        </div>
      ))}
    </div>
  )
}



export default App