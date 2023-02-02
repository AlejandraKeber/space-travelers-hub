import React from 'react';
import renderer from 'react-test-renderer';
import JoinBtn from '../Components/JoinBtn';

describe('JoinBtn component', () => {
  test('Test Join button render correctly', () => {
    const tree = renderer.create(<JoinBtn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
