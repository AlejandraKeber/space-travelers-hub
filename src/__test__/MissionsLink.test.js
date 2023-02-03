import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import MissionsLink from '../Components/MissionsLink';

describe('MissionsLink component', () => {
  test('Test MissionsLink render correctly', () => {
    const missionsLink = render(
      <Provider store={store}>
        <BrowserRouter>
          <MissionsLink />
        </BrowserRouter>
      </Provider>,
    );
    expect(missionsLink).toMatchSnapshot();
  });
});