import React from 'react';
import { string, bool } from 'prop-types';
import JoinBtn from './JoinBtn';
import Membership from './Membership';
import '../css/mission.css';

export default function Mission(props) {
  const {
    id, name, description, reserved,
  } = props;
  return (
    <tr>
      <td className="name">{name}</td>
      <td>{description}</td>
      <Membership
        reserved={reserved}
      />
      <JoinBtn
        id={id}
        reserved={reserved}
      />
    </tr>
  );
}

Mission.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  id: string.isRequired,
  reserved: bool.isRequired,
};
