import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import ReservedMissionsList from '../Components/ReservedMissionsList';

describe('ReservedMissionsList component', () => {
  test('Test ReservedMissionsList render correctly', () => {
    const reservedMissionsList = render(
      <Provider store={store}>
        <BrowserRouter>
          <ReservedMissionsList />
        </BrowserRouter>
      </Provider>,
    );
    expect(reservedMissionsList).toMatchSnapshot();
  });
});