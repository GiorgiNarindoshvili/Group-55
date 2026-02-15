import React, { useEffect, useState } from 'react'


const App = () => {
  const [info, setInfo] = useState([])


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      setInfo(data)
      console.log(data)
    })
    .catch((err) => console.error(err))
   
  }, [])
  return (
    <>
      {info.map((items, id) => (
        <div key={id}>
          <p>{items.name}</p>
          <p>{items.username}</p>
          <p>{items.email}</p>
          
        </div>
        
      ))}
    </>
  )
}

export default App