import PropTypes from 'prop-types';
import '../css/MyRockets.css';

import React from 'react';

export default function MyRockets(props) {
  const { name } = props;
  return (
    <li className="list">
      {name}
    </li>
  );
}

MyRockets.propTypes = {
  name: PropTypes.node.isRequired,
};

