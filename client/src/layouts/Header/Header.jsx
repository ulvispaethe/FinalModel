import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <Link to="/">Home</Link>
        <Link to="/add">Add Page</Link>
        <Link to="/wishlist">Wishlist</Link>
    </div>
  )
}

export default Header