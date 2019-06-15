import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import Login from './login';

describe('test login page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
  });

  test('page to test snapshot', () => {
    const component = renderer.create(<Login />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('simulate events', () => {
  const wrapper = mount(<Login />);

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<Login logIn={onButtonClick} />);
    wrapper.find('Button').simulate('click');
    // expect(onButtonClick).to.have.property('errMessage', '');
  });
});
