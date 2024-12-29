import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div  className="navbar flex flex-row gap-4 place-cotent-evenly" >
      <NavLink to="/">Home</NavLink>
        <NavLink to="/past">Pastes</NavLink>
    </div>
  )
}

export default Navbar
