import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../img/icon.png';
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <nav className="flex">
      <div className="logo flex">
        <img src={icon} alt="Logo" />
        <h1>Space Travelers' Hub</h1>
      </div>
      <ul className="flex">
        <li>
          <NavLink
            className="link"
            to="/"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
          >
            Rockets
        </NavLink>
        </li>
        <li>
          <NavLink
            className="link"
            to="/missions"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link"
            to="/myprofile"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
