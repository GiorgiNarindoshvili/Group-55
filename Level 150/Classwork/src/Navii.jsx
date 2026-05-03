import React from 'react'
import { Link } from 'react-router-dom'
const Navii = () => {
  return (
    <nav className='flex justify-center gap-5 p-9'>
        <Link to="/home">Home Page</Link>
        <Link to="/about">About Page</Link>
    </nav>
  )
}

export default Navii