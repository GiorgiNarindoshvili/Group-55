import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import About from './components/About'
import Products from './components/Products'


const App = () => {
  return (
    <>
      <Navbar/>
      
      <Routes>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/Products' element={<Products/>}/>


      </Routes>
    </>
    
  )
}

export default App