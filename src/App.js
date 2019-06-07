import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './controller/login';
import Register from './view/register';
import Licence from './view/licence';
import CpLicenceApp from './controller/cpLicence';
import SubCpLicence from './view/subCpLicence';
import RetailerLicence from './view/retailerLicence';
import LicenceApp from './controller/licence';

export class NewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          ready: true
        }),
      1000
    );
  }

  render() {
    if (!this.state.ready) {
      return <App />;
    } else {
      return <CpLicenceApp />;
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default NewApp;
