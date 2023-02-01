import React from 'react';
import { string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joiningMission } from '../redux/missions/missions';
import '../css/mission.css';

export default function Mission(props) {
  const dispatch = useDispatch();
  const btnClickHandler = (event) => {
    const { id } = event.target;
    dispatch(joiningMission({ id }));
  };
  const {
    id, name, description,
  } = props;
  return (
    <tr>
      <td className="name">{name}</td>
      <td>{description}</td>
      <td className="status"><button type="submit" id={`${id}status`}>Not a member</button></td>
      <td className="joinBtn"><button type="submit" id={id} onClick={btnClickHandler}>Join Mission</button></td>
    </tr>
  );
}

Mission.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  id: string.isRequired,
};
