import PropTypes from 'prop-types';
import '../css/MyRockets.css';

const MyRockets = ({
  name,
}) => (
<<<<<<< HEAD
  <ul className="MyRocketsUl">
    <li>
      {name}
    </li>
  </ul>
=======
  <li className="list">
    {name}
  </li>
>>>>>>> 022d02b49408d72544758428e9ea8d8384481626
);

MyRockets.propTypes = {
  name: PropTypes.node.isRequired,
};

export default MyRockets;
