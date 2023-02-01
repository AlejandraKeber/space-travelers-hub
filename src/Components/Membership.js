import React from 'react';
import '../css/membership.css';

export default function Membership(props) {
  const { reserved } = props;
  let membership;
  if (reserved) {
    membership = <td className="status active"><button type="button">Active member</button></td>;
  } else {
    membership = <td className="status"><button type="button">Not a member</button></td>;
  }
  return (
    membership
  );
}
