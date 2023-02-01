import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import icon from '../img/icon.png';
import '../css/Navbar.css';

export default function Navbar() {
  const dispatch = useDispatch();
  const stateM = useSelector((state) => state.missionsStore.missions);
  const missionClickHandler = () => {
    if (!stateM.length) {
      dispatch(getMissions());
    }
  };
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
          <NavLink
            onClick={missionClickHandler}
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
  );
}
