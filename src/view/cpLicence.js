import React from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import logo from '../logo.svg';
import PropTypes from 'prop-types';

export default class CpLicenceView extends React.Component {
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
                marginTop: 50
              }}
            >
              <div>
                <div
                  style={{ border: 1, color: 'white', backgroundColor: 'blue' }}
                >
                  <h3 style={{ textAlign: 'center', padding: 15 }}>
                    Register CP Card Licence
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
                  <Form.Label>Serial Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Serial Number"
                    value={this.props.serial}
                    onChange={this.props.handleSerial}
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
                <Button
                  block
                  variant="primary"
                  type="submit"
                  disabled={this.props.disable}
                  onClick={this.props.licence}
                >
                  {this.props.spinner ? spinner : null} Register CP Licence
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
CpLicenceView.propTypes = {
  fullName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  serial: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  spinner: PropTypes.bool.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handleFullName: PropTypes.func.isRequired,
  handleSerial: PropTypes.func.isRequired,
  handleUsername: PropTypes.func.isRequired,
  licence: PropTypes.func.isRequired,
  errMessage: PropTypes.string.isRequired
};
