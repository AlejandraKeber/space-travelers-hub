import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMissions } from '../redux/missions/missions';

export default function MissionsLink() {
  const dispatch = useDispatch();
  const stateM = useSelector((state) => state.missionsStore.missions);
  const missionClickHandler = () => {
    if (!stateM.length) {
      dispatch(getMissions());
    }
  };
  return (
    <NavLink
      onClick={missionClickHandler}
      className="link"
      to="/missions"
      style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
    >
      Missions
    </NavLink>
  );
}
