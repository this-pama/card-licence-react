import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import LoginApp from './login';

describe('test login App page', () => {
  it('renders without crashing', () => {
    shallow(<LoginApp />);
  });
});

describe('login app snapshot', () => {
  it('test snapshot', () => {
    const component = renderer.create(<LoginApp />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.handleEmail;
    tree.props.handlePassword;
    tree.props.validateForm;
    tree.props.logIn;
    tree.props.email;
    tree.props.password;
    tree.props.spinner;
    tree.props.errMessage;
    tree.props.disable;

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('simulate events', () => {
  const wrapper = mount(<LoginApp />);

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<LoginApp logIn={onButtonClick} />);
    wrapper.find('Button').simulate('click');
    // expect(onButtonClick).toHaveReturnedWith('errMessage', '');
  });
});

describe('Test internal states of methods', () => {
  const component = renderer.create(<LoginApp />);
  const instance = component.getInstance();

  test('it change state', () => {
    expect(instance.state.password).toBe('');
    expect(instance.state.email).toBe('');
    expect(instance.state.errMessage).toBe('');
    expect(instance.state.spin).toBe(false);
    const value = { target: { value: 'foo' } };
    instance.handleEmail(value);
    expect(instance.state.email).toBe('foo');
    instance.handlePassword(value);
    expect(instance.state.password).toBe('foo');
  });

  test('validate form state', () => {
    instance.validateForm();
    expect(instance.state.disable).toBe(true);
  });

  test('spinner state', () => {
    instance.logIn();
    expect(instance.state.spin).toBe(true);
  });
});
