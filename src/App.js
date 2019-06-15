import React from 'react';
import './App.css';
import LoginApp from './controller/login';

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
      2000
    );
  }

  render() {
    if (!this.state.ready) {
      return <App />;
    } else {
      return <LoginApp />;
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ color: 'blue' }}>Welcome to Cardolin</h3>
        <p>The Home Hub for Card Licencing.</p>
      </header>
    </div>
  );
}

export default NewApp;
