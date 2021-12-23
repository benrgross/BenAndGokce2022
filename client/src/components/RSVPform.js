import React from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

function RSVPform() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          enter the same email the invitation was sent to.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First and Last Name</Form.Label>
        <Form.Control type="name" placeholder="first and last name" />
      </Form.Group>
      <Container>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="RSVP Yes" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="RSVP No" />
          </Form.Group>
        </Row>
      </Container>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RSVPform;
