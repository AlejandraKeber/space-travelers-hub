import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getRocket, reserveRocket, cancelRocket } from '../redux/rockets/rockets';
import '../css/RocketsContainer.css';

const Rocket = ({
  id, name, img, description, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="rocket flex">
      <img src={img} alt="rocket" />
      <div className="rocket-details">
        <h2>{name}</h2>
        <div className="rocket-description">
          <p>
            {' '}
            {reserved && (
            <span style={{ backgroundColor: '#0d6efd', color: '#fff' }}>{ reserved && 'Reserved' }</span>
            )}
            {' '}
            {description}
          </p>
          {!reserved && (
          <button type="button" onClick={() => dispatch(reserveRocket(id))}>Reserve Rocket</button>
          )}
          {reserved && (
          <button style={{ backgroundColor: '#fff', color: '#5a5a5a' }} type="button" onClick={() => dispatch(cancelRocket(id))}>Cancel Reservation</button>
          )}
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  reserved: PropTypes.bool.isRequired,
};

const RocketsContainer = () => {
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocket());
    }
  }, [dispatch, rockets.length]);
  return (
    <>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          type={rocket.type}
          img={rocket.image}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </>
  );
};

export default RocketsContainer;
