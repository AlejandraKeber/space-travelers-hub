import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
        <NavLink
          to="/missions"
          style={({ isActive }) => (isActive ? { color: 'blue' } : { color: 'black' })}
        >
          Missions
        </NavLink>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? { color: 'blue' } : { color: 'black' })}
        >
          Rockets
        </NavLink>
        </li>
      </ul>
    </nav>
  )
}
