import React from 'react';
import LicenceView from '../view/licence';

export default class LicenceApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      username: '',
      serial: '',
      errMessage: '',
      spin: false,
      disable: true
    };
  }

  licence = async () => {
    console.log('licence start');

    this.setState({ spin: true });
    //  console.log(this.state.spin)
    var url = 'https://cardgenerationserver.herokuapp.com/v1//licence/add';
    var licenceFetch = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        fullName: this.state.fullName,
        serial: this.state.serial,
        username: this.state.username
      })
    });
    var response = await licenceFetch;
    var res = await response.json();
    console.log(res);
    if (res.serial) {
      console.log('successfully registered');
      this.setState({
        email: '',
        fullName: '',
        username: '',
        serial: '',
        isHome: true,
        errMessage: '',
        isSignIn: false,
        spin: false
      });
      //    return <App />
    } else {
      this.setState({
        errMessage: 'Error Occurred.',
        spin: false
      });
    }
  };

  handleEmail = username => {
    if (username.target.value.length > 0) {
      this.setState(
        {
          email: username.target.value
        },
        this.validateForm
      );
      console.log(username.target.value);
    } else {
      this.setState({
        email: '',
        errMessage: 'Email cannot be empty'
      });
    }
  };

  handleFullName = name => {
    if (name.target.value.length > 0) {
      this.setState(
        {
          fullName: name.target.value
        },
        this.validateForm
      );
      console.log(name.target.value);
    } else {
      this.setState({
        fullName: '',
        errMessage: 'Name cannot be empty'
      });
    }
  };

  handleSerial = name => {
    if (name.target.value.length > 0) {
      this.setState(
        {
          serial: name.target.value
        },
        this.validateForm
      );
      console.log(name.target.value);
    } else {
      this.setState({
        serial: '',
        errMessage: 'Serial cannot be empty'
      });
    }
  };

  handleUsername = name => {
    if (name.target.value.length > 0) {
      this.setState(
        {
          username: name.target.value
        },
        this.validateForm
      );
      console.log(name.target.value);
    } else {
      this.setState({
        username: '',
        errMessage: 'Username cannot be empty'
      });
    }
  };

  validateForm = () => {
    let testEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (
      this.state.email.length > 0 &&
      this.state.fullName.length > 0 &&
      testEmail.test(this.state.email) &&
      this.state.username.length > 0
    ) {
      this.setState({
        disable: false,
        errMessage: ''
      });
    } else {
      this.setState({
        disable: true
      });
    }
  };

  render() {
    return (
      <LicenceView
        email={this.state.email}
        fullName={this.state.fullName}
        username={this.state.username}
        serial={this.state.serial}
        handleEmail={this.handleEmail}
        handleFullName={this.handleFullName}
        handleUsername={this.handleUsername}
        handleSerial={this.handleSerial}
        licence={this.licence}
        errMessage={this.state.errMessage}
        spinner={this.state.spin}
        disable={this.state.disable}
      />
    );
  }
}
