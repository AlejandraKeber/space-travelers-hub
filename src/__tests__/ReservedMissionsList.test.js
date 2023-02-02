import React from 'react';
import { createRoot } from 'react-dom/client';
import ReservedMissionsList from '../Components/ReservedMissionsList';

it('renders without crashing', () => {
  const div = document.createElement('ul');
  const root = createRoot(div);
  root.render(<ReservedMissionsList />);
});
