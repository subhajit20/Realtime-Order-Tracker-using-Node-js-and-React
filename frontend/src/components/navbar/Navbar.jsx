import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar p-4 shadow-md fixed w-full backdrop-filter backdrop-blur-md z-50 bg-opacity-50  bg-clip-padding'>
        <div className="navbar_container grid grid-cols-2 place-content-between justify-items-center text-base sm:text-2xl font-medium text-purple-900">
            <div className="product">
                <Link to="/">Product</Link>
            </div>
            <div className="orders">
                <Link to="/">Orders</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar