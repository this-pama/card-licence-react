import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Register from './register';

describe('test request licence page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Register />, div);
  });

  test('test snapshot ', () => {
    const component = renderer.create(<Register />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
