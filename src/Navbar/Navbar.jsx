import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <NavLink to="/" className={'navHead'}>Prerna</NavLink>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/clients">Clients</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={'signUp_class'}>Sign Up</NavLink>
        </li>
      </ul>

      <button className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  )
}

export default Navbar
