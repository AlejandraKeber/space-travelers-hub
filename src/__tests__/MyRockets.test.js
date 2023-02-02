import React from 'react';
import { createRoot } from 'react-dom/client';
import MyRockets from '../Components/MyRockets';

it('renders without crashing', () => {
  const li = document.createElement('li');
  const root = createRoot(li);
  root.render(<MyRockets />);
});
