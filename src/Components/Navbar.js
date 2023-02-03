import React from 'react';
import { NavLink } from 'react-router-dom';
import MissionsLink from './MissionsLink';
import icon from '../img/icon.png';
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <nav className="flex">
      <div className="logo flex">
        <img src={icon} alt="Logo" />
        <h1>Space Travelers&apos; Hub</h1>
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
          <MissionsLink />
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
  );
}
