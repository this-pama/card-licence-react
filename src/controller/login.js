import React from 'react';
import LoginView from '../view/login';

export default class LoginApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errMessage: '',
      spin: false,
      disable: true
    };
  }

  logIn = async (email, password) => {
    console.log('login start');

    this.setState({ spin: true });
    //  console.log(this.state.spin)
    var url = 'https://cardgenerationserver.herokuapp.com/login';
    var loginFetch = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    });
    var response = await loginFetch;
    var res = await response.json();
    console.log(res);
    if (res.text === 'login successful') {
      console.log('Log in successful');
      this.setState({
        isHome: true,
        errMessage: '',
        isSignIn: false,
        spin: false
      });
      //    return <App />
    } else if (res.text) {
      console.log(res.text);
      this.setState({
        errMessage: res.text,
        spin: false
      });
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
      // console.log(username.target.value);
    } else {
      this.setState({
        email: '',
        errMessage: 'Email cannot be empty'
      });
    }
  };

  handlePassword = password => {
    if (password.target.value.length > 0) {
      this.setState(
        {
          password: password.target.value
        },
        this.validateForm
      );
      // console.log(password.target.value);
    } else {
      this.setState({
        password: '',
        errMessage: 'Password cannot be empty'
      });
    }
  };

  validateForm = () => {
    let testEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      testEmail.test(this.state.email)
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
      <LoginView
        email={this.state.email}
        password={this.state.password}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        logIn={this.logIn}
        errMessage={this.state.errMessage}
        spinner={this.state.spin}
        disable={this.state.disable}
      />
    );
  }
}
