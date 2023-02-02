import React from 'react';
import { createRoot } from 'react-dom/client';
import Rockets from '../pages/Rockets';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Rockets />);
});
