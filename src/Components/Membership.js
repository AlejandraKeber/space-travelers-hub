import React from 'react';

export default function Membership(props) {
  const { reserved } = props;
  let membership;
  if (reserved) {
    membership = <td className="status active">Active member</td>;
  } else {
    membership = <td className="status">Not a member</td>;
  }
  return (
    membership
  );
}
