import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import RetailerLicence from './retailerLicence';

describe('test RetailerLicence view page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RetailerLicence />, div);
  });

  test('test snapshot of RetailerLicence view page', () => {
    const component = renderer.create(<RetailerLicence />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
