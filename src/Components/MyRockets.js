import PropTypes from 'prop-types';
import '../css/MyRockets.css';

const MyRockets = ({
  name,
}) => (
  <ul className="MyRocketsUl">
    <li>
      {name}
    </li>
  </ul>
);

MyRockets.propTypes = {
  name: PropTypes.node.isRequired,
};

export default MyRockets;
