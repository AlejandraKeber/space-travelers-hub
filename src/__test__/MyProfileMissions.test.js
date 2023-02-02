import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import MyProfileMissions from '../Components/MyProfileMissions';

describe('MyProfileMissions component', () => {
  test('Test MyProfileMissions render correctly', () => {
    const myProfileMissions = render(
      <Provider store={store}>
        <BrowserRouter>
          <MyProfileMissions />
        </BrowserRouter>
      </Provider>,
    );
    expect(myProfileMissions).toMatchSnapshot();
  });
});
