import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import MyProfileMissions from './MyProfileMissions';
import '../css/ReservedMissionsList.css';

export default function ReservedMissionsList() {
  const missions = useSelector((state) => state.missionsStore.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <ul className="reservedMissionsUl">
      {
        reservedMissions.map((ReservedMission) => (
          <MyProfileMissions
            key={uuidv4()}
            name={ReservedMission.name}
          />
        ))
      }
    </ul>
  );
}
