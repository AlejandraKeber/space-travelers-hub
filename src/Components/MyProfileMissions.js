import React from 'react';
import { string } from 'prop-types';

export default function MyProfileMissions(props) {
  const { name } = props;
  return (
    <li>{name}</li>
  );
}

MyProfileMissions.propTypes = {
  name: string.isRequired,
};
