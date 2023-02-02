import React from 'react';
import { createRoot } from 'react-dom/client';
import MyProfileMissions from '../Components/MyProfileMissions';

it('renders without crashing', () => {
  const table = document.createElement('li');
  const root = createRoot(table);
  root.render(<MyProfileMissions />);
});
