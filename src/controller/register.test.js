import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import RequestApp from './register';

describe('test request App page', () => {
  it('renders without crashing', () => {
    shallow(<RequestApp />);
  });
});

describe('test request app snapshot', () => {
  it('test snapshot', () => {
    const component = renderer.create(<RequestApp />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.handleEmail;
    tree.props.handleFullName;
    tree.props.handleUsername;
    tree.props.handleDevice;
    tree.props.handleAddress;
    tree.props.handlePhoneNumber;
    tree.props.validateForm;
    tree.props.request;
    tree.props.email;
    tree.props.fullName;
    tree.props.device;
    tree.props.username;
    tree.props.phoneNumber;
    tree.props.address;
    tree.props.spinner;
    tree.props.errMessage;
    tree.props.disable;

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('simulate events', () => {
  const wrapper = mount(<RequestApp />);

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<RequestApp licence={onButtonClick} />);
    wrapper.find('Button').simulate('click');
    // expect(onButtonClick).toHaveReturnedWith('errMessage', '');
  });
});

describe('Test internal states of methods', () => {
  const component = renderer.create(<RequestApp />);
  const instance = component.getInstance();

  test('it change state', () => {
    expect(instance.state.fullName).toBe('');
    expect(instance.state.device).toBe('');
    expect(instance.state.address).toBe('');
    expect(instance.state.phoneNumber).toBe('');
    expect(instance.state.username).toBe('');
    expect(instance.state.email).toBe('');
    expect(instance.state.errMessage).toBe('');
    expect(instance.state.spin).toBe(false);
    const value = { target: { value: 'foo' } };
    instance.handleEmail(value);
    expect(instance.state.email).toBe('foo');
    instance.handleFullName(value);
    expect(instance.state.fullName).toBe('foo');
    instance.handleDevice(value);
    expect(instance.state.device).toBe('foo');
    instance.handleUsername(value);
    expect(instance.state.username).toBe('foo');
    instance.handleAddress(value);
    expect(instance.state.address).toBe('foo');
    instance.handlePhoneNumber(value);
    expect(instance.state.phoneNumber).toBe('foo');
  });

  test('validate form state', () => {
    instance.validateForm();
    expect(instance.state.disable).toBe(true);
  });

  test('spinner state', () => {
    instance.request();
    expect(instance.state.spin).toBe(true);
  });
});
