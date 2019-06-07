import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logo from '../logo.svg';

export default class RetailerLicence extends React.Component {
  render() {
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
              <Form>
                <div
                  style={{ border: 1, color: 'white', backgroundColor: 'blue' }}
                >
                  <h3 style={{ textAlign: 'center', padding: 15 }}>
                    Register Retailer Card Licence
                  </h3>
                </div>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Serial Number</Form.Label>
                  <Form.Control type="text" placeholder="Device" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Button block variant="primary" type="submit">
                  Register Retailer Licence
                </Button>
              </Form>
            </Col>
            <Col sm="2" md="3" />
          </Row>
        </Container>
      </div>
    );
  }
}
