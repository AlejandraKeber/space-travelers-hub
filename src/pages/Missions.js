import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Mission from '../Components/Mission';
import '../css/mission.css';

export default function Missions() {
  const missions = useSelector((state) => state.missionsStore.missions);
  return (
    <table>
      <tbody>
        <tr className="tableHeader">
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <td />
        </tr>
        {
          missions.map((mission) => (
            <Mission
              key={uuidv4()}
              id={mission.id}
              name={mission.name}
              description={mission.description}
            />
          ))
        }
      </tbody>
    </table>
  );
}
