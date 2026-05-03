import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='w-full bg-blue-700 h-18 justify-around flex items-center'>
        <Link to="/users">Users</Link>
        <Link to="/product">Products</Link>
    </nav>
  )
}

export default Nav