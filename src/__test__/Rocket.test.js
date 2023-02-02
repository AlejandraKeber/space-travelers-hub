import React from 'react';
import { createRoot } from 'react-dom/client';
import Rocket from '../Components/Rocket';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Rocket />);
});
