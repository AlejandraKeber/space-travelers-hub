import React from 'react';
import { useSelector } from 'react-redux';
import MyRockets from '../Components/MyRockets';
import '../css/Myprofile.css';

export default function Myprofile() {
  const rockets = useSelector((state) => state.rocket);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved).map((rocket) => (
    <MyRockets key={rocket.id} id={rocket.id} name={rocket.name} />
  ));

  return (
    <main className="MyProfile">
      <section className="MyMissions">
        <h2>My Missions</h2>
      </section>
      <section className="MyRockets">
        <h2>My Rockets</h2>
        <p>
          { reservedRockets }
        </p>
      </section>
    </main>
  );
}
