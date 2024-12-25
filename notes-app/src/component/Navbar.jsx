import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex gap-10'>
      <NavLink to="/">Home</NavLink>
        <NavLink to="/pastes">Pastes</NavLink>
    </div>
  )
}

export default Navbar