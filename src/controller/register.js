import React from 'react';
import RequestView from '../view/register';

export default class RequestApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      username: '',
      device: '',
      phoneNumber: '',
      address: '',
      errMessage: '',
      spin: false,
      disable: true
    };
  }

  request = async () => {
    console.log('send request');

    this.setState({ spin: true });
    //  console.log(this.state.spin)
    var url = 'https://cardgenerationserver.herokuapp.com/v1/request/request';
    var licenceFetch = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.fullName,
        device: this.state.device,
        username: this.state.username,
        phone: this.state.phoneNumber,
        address: this.state.address
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

  handleDevice = name => {
    if (name.target.value.length > 0) {
      this.setState(
        {
          device: name.target.value
        },
        this.validateForm
      );
      console.log(name.target.value);
    } else {
      this.setState({
        device: '',
        errMessage: 'Device cannot be empty'
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

  handlePhoneNumber = name => {
    if (name.target.value.length > 0) {
      this.setState(
        {
          phoneNumber: name.target.value
        },
        this.validateForm
      );
      console.log(name.target.value);
    } else {
      this.setState({
        phoneNumber: '',
        errMessage: 'Phone Number cannot be empty'
      });
    }
  };

  handleAddress = name => {
    if (name.target.value.length > 0) {
      this.setState(
        {
          address: name.target.value
        },
        this.validateForm
      );
      console.log(name.target.value);
    } else {
      this.setState({
        address: '',
        errMessage: 'Address cannot be empty'
      });
    }
  };

  validateForm = () => {
    let testEmail = /@/;
    if (
      this.state.email.length > 0 &&
      this.state.fullName.length > 0 &&
      testEmail.test(this.state.email) &&
      this.state.username.length > 0
    ) {
      this.setState({
        disable: false
      });
    } else {
      this.setState({
        disable: true
      });
    }
  };

  render() {
    return (
      <RequestView
        email={this.state.email}
        fullName={this.state.fullName}
        username={this.state.username}
        device={this.state.device}
        phoneNumber={this.state.phoneNumber}
        address={this.state.address}
        handleEmail={this.handleEmail}
        handleFullName={this.handleFullName}
        handleUsername={this.handleUsername}
        handleDevice={this.handleDevice}
        handlePhoneNumber={this.handlePhoneNumber}
        handleAddress={this.handleAddress}
        request={this.request}
        errMessage={this.state.errMessage}
        spinner={this.state.spin}
        disable={this.state.disable}
      />
    );
  }
}
