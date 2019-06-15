import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SubCpLicence from './subCpLicence';

describe('test SubCpLicence view page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SubCpLicence />, div);
  });

  test('test snapshot of SubCpLicence view page', () => {
    const component = renderer.create(<SubCpLicence />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
