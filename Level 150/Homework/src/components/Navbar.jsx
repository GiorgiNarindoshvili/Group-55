import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='flex w-[100%] bg-blue-600 h-[60px] p-3.5 justify-around'>
        <Link to="/home">Home Page</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Page</Link>
        <Link to="/Products">Products</Link>

    </nav>
  )
}

export default Navbar