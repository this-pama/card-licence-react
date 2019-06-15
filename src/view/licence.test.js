import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Licence from './licence';

describe('test licence page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Licence />, div);
  });

  test('test snapshot', () => {
    const component = renderer.create(<Licence />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
