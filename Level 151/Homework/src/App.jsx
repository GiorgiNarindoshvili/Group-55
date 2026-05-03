import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav.jsx'
import Users from './Components/Users.jsx'
import UserParams from './Components/UserParams.jsx'
import Product from './Components/Product.jsx'
import ProductParams from './Components/ProductParams.jsx'

const App = () => {
  return (
    <>
      <Nav/>
      

      <Routes>
        <Route path='/users' element={<Users/>}/>
        <Route path="/users/:id" element={<UserParams/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:id' element = {<ProductParams/>}/>
      </Routes>
    </>
    
    
  )
}

export default App