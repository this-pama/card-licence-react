import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CpLicence from './cpLicence';

describe('test cpLicence view page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CpLicence />, div);
  });

  test('test snapshot of cpLicence view page', () => {
    const component = renderer.create(<CpLicence />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
