import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <h2>Profile</h2>
      <ul>
        <li>
          <NavLink to={'/'} className={({isActive}) => `${isActive ? 'activeNav' : 'disableNav'}`} style={{textDecoration : 'none'}}>
            Home
          </NavLink>
        </li> 
              
        <li>
          <NavLink to={'/about'} className={({isActive}) => `${isActive ?'activeNav' : 'disableNav'}`} style={{textDecoration : 'none'}}>
            About
          </NavLink>
        </li> 

        <li>
          <NavLink to={'/github'} className={({isActive}) => `${isActive ? 'activeNav' : 'disableNav'}`} style={{textDecoration : 'none'}}>
            Github
          </NavLink>
        </li>

        <li>
          <NavLink to={'/services'} className={({isActive}) => `${isActive ? 'activeNav' : 'disableNav'}`} style={{textDecoration : 'none'}}>
            Services
          </NavLink>
        </li>
        
      </ul>
    </div>
  )
}

export default Header