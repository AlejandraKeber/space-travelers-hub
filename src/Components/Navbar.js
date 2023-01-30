import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../img/icon.png';

export default function Navbar() {
  return (
    <nav>
      <img src={icon} />
      <h1>Space Travelers' Hub</h1>
      <ul>
        <li>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? { color: 'blue' } : { color: 'black' })}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          style={({ isActive }) => (isActive ? { color: 'blue' } : { color: 'black' })}
        >
          Missions
        </NavLink>
        <NavLink
          to="/myprofile"
          style={({ isActive }) => (isActive ? { color: 'blue' } : { color: 'black' })}
        >
          My Profile
        </NavLink>
        </li>
      </ul>
    </nav>
  )
}
