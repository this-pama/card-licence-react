import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UpdateLicenceView from './updateLicence';

describe('test updateLicenceView', () => {
  it('renders updateLicenceView without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UpdateLicenceView />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('test snapshot of updateLicenceView view page', () => {
    const component = renderer.create(<UpdateLicenceView />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
