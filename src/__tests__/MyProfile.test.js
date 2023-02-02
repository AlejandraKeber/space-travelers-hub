import React from 'react';
import { createRoot } from 'react-dom/client';
import MyProfile from '../pages/MyProfile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<MyProfile />);
});
