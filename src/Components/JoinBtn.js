import React from 'react';
import { useDispatch } from 'react-redux';
import { joiningMission, leavingMission } from '../redux/missions/missions';

export default function JoinBtn(prop) {
  const { reserved, id } = prop;
  const dispatch = useDispatch();
  const joinBtn = (event) => {
    const { id } = event.target;
    dispatch(joiningMission({ id }));
  };
  const leaveBtn = (event) => {
    const { id } = event.target;
    dispatch(leavingMission({ id }));
  };
  let button;
  if (reserved) {
    button = <td className="leave btn"><button type="submit" id={id} onClick={leaveBtn}>Leave Mission</button></td>;
  } else {
    button = <td className="join btn"><button type="submit" id={id} onClick={joinBtn}>Join Mission</button></td>;
  }
  return (
    button
  );
}
