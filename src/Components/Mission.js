import React from 'react';
import { string } from 'prop-types';
import '../css/mission.css';

export default function Mission(props) {
  const {
    id, name, description,
  } = props;
  return (
    <tr>
      <td className="name">{name}</td>
      <td>{description}</td>
      <td className="status"><button type="submit" id={`${id}status`}>Not a member</button></td>
      <td className="joinBtn"><button type="submit" id={id}>Join Mission</button></td>
    </tr>
  );
}

Mission.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  id: string.isRequired,
};
