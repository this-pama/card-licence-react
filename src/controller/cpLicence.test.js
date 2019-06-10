import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import CpLicenceApp from './cpLicence';

describe('test CpLicenceApp page', () => {
  it('renders without crashing', () => {
    shallow(<CpLicenceApp />);
  });
});

describe('CpLicenceApp snapshot', () => {
  it('test snapshot', () => {
    const component = renderer.create(<CpLicenceApp />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.handleEmail;
    tree.props.handleFullName;
    tree.props.handleUsername;
    tree.props.handleSerial;
    tree.props.validateForm;
    tree.props.licence;
    tree.props.email;
    tree.props.fullName;
    tree.props.serial;
    tree.props.username;
    tree.props.spinner;
    tree.props.errMessage;
    tree.props.disable;

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('simulate events', () => {
  const wrapper = mount(<CpLicenceApp />);

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<CpLicenceApp licence={onButtonClick} />);
    wrapper.find('Button').simulate('click');
    // expect(onButtonClick).toHaveReturnedWith('errMessage', '');
  });
});

describe('Test internal states of methods', () => {
  const component = renderer.create(<CpLicenceApp />);
  const instance = component.getInstance();

  test('it change state', () => {
    expect(instance.state.fullName).toBe('');
    expect(instance.state.serial).toBe('');
    expect(instance.state.username).toBe('');
    expect(instance.state.email).toBe('');
    expect(instance.state.errMessage).toBe('');
    expect(instance.state.spin).toBe(false);
    const value = { target: { value: 'foo' } };
    instance.handleEmail(value);
    expect(instance.state.email).toBe('foo');
    instance.handleFullName(value);
    expect(instance.state.fullName).toBe('foo');
    instance.handleSerial(value);
    expect(instance.state.serial).toBe('foo');
    instance.handleUsername(value);
    expect(instance.state.username).toBe('foo');
  });

  test('validate form state', () => {
    instance.validateForm();
    expect(instance.state.disable).toBe(true);
  });

  test('spinner state', () => {
    instance.licence();
    expect(instance.state.spin).toBe(true);
  });
});
