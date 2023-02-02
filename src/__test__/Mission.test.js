import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Mission from '../Components/Mission';

describe('Mission component', () => {
  test('Test Mission render correctly', () => {
    const mission = render(
      <Provider store={store}>
        <BrowserRouter>
          <Mission />
        </BrowserRouter>
      </Provider>,
    );
    expect(mission).toMatchSnapshot();
  });
});