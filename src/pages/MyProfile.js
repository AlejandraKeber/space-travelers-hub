import React from 'react';
import '../css/Myprofile.css';
import ReservedMissionsList from '../Components/ReservedMissionsList';

export default function Myprofile() {
  return (
    <main className="MyProfile">
      <section className="MyMissions">
        <h2>My Missions</h2>
        <ReservedMissionsList />
      </section>
      <section className="MyRockets">
        <h2>My Rockets</h2>
      </section>
    </main>
  );
}
