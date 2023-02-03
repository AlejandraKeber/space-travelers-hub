import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import JoinBtn from '../Components/JoinBtn';

describe('JoinBtn component', () => {
  test('Test Join button render correctly', () => {
    const joinBtn = render(
      <Provider store={store}>
        <BrowserRouter>
          <JoinBtn />
        </BrowserRouter>
      </Provider>,
    );
    expect(joinBtn).toMatchSnapshot();
  });
});
