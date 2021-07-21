import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
      <Link to='/'>
        <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to='/'>
            <h5>Home</h5>
            </Link>
          </li>
          <li>
            <Link to='/about'>
            <h5>About</h5>
            </Link>
          </li>
          
        </ul>

      </div>
      
    </nav>

  )
}

export default Navbar
