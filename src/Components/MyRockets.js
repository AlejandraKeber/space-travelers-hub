import PropTypes from 'prop-types';
import '../css/MyRockets.css';

const MyRockets = ({
  name,
}) => (
  <li className="list">
    {name}
  </li>
);

MyRockets.propTypes = {
  name: PropTypes.node.isRequired,
};

export default MyRockets;
