import React from 'react';
import renderer from 'react-test-renderer';
import Membership from '../Components/Membership';

describe('Membership component', () => {
  test('Test Membership render correctly', () => {
    const tree = renderer.create(<Membership />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
