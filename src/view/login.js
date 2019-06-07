import React from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class LoginView extends React.Component {
  render() {
    const spinner = <Spinner animation="border" />;

    return (
      <Container>
        <Row>
          <Col sm="2" md="3" />
          <Col
            sm="8"
            md="6"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50
            }}
          >
            <div>
              <div
                style={{ border: 1, color: 'white', backgroundColor: 'blue' }}
              >
                <h3 style={{ textAlign: 'center', padding: 15 }}>
                  Card Licencing
                </h3>
              </div>
              <p style={{ paddingTop: 10, color: 'red' }}>
                {this.props.errMessage}
              </p>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="testEmail"
                  value={this.props.email}
                  onChange={this.props.handleEmail}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={this.props.password}
                  onChange={this.props.handlePassword}
                />
              </Form.Group>
              <Button
                block
                variant="primary"
                type="submit"
                onClick={() =>
                  this.props.logIn(this.props.email, this.props.password)
                }
                disabled={this.props.disable}
              >
                {this.props.spinner ? spinner : null} Login
              </Button>
            </div>
          </Col>
          <Col sm="2" md="3" />
        </Row>
      </Container>
    );
  }
}

LoginView.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  errMessage: PropTypes.string.isRequired,
  spinner: PropTypes.bool.isRequired,
  disable: PropTypes.bool.isRequired
};
