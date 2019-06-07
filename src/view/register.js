import React from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import logo from '../logo.svg';
import PropTypes from 'prop-types';

export default class RegisterView extends React.Component {
  render() {
    const spinner = <Spinner animation="border" />;

    return (
      <div style={{ backgroundImage: logo }}>
        <Container>
          <Row>
            <Col sm="2" md="3" />
            <Col
              sm="8"
              md="6"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10
              }}
            >
              <div>
                <div
                  style={{ border: 1, color: 'white', backgroundColor: 'blue' }}
                >
                  <h3 style={{ textAlign: 'center', padding: 15 }}>
                    Card Licence Request
                  </h3>
                </div>
                <p style={{ paddingTop: 10, color: 'red' }}>
                  {this.props.errMessage}
                </p>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    value={this.props.fullName}
                    onChange={this.props.handleFullName}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={this.props.username}
                    onChange={this.props.handleUsername}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Device</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Device"
                    value={this.props.device}
                    onChange={this.props.handleDevice}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    value={this.props.phoneNumber}
                    onChange={this.props.handlePhoneNumber}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={this.props.email}
                    onChange={this.props.handleEmail}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    value={this.props.address}
                    onChange={this.props.handleAddress}
                  />
                </Form.Group>
                <Button
                  block
                  variant="primary"
                  type="submit"
                  onClick={this.props.request}
                  disabled={this.props.disable}
                >
                  {this.props.spinner ? spinner : null} Make Request
                </Button>
              </div>
            </Col>
            <Col sm="2" md="3" />
          </Row>
        </Container>
      </div>
    );
  }
}

RegisterView.propTypes = {
  fullName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  device: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  spinner: PropTypes.bool.isRequired,
  disable: PropTypes.bool.isRequired,
  handleFullName: PropTypes.func.isRequired,
  handleUsername: PropTypes.func.isRequired,
  handleDevice: PropTypes.func.isRequired,
  handlePhoneNumber: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handleAddress: PropTypes.func.isRequired,
  request: PropTypes.func.isRequired
};
