import React, { useRef } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

function SignUpAdmin() {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div>
      <Container fluid style={{ marginTop: "10%" }}>
        <Row>
          <Col></Col>
          <Col>
            <h2>Sign Up</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>user name</Form.Label>
                <Form.Control
                  ref={userRef}
                  type="username"
                  placeholder="user name"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>password</Form.Label>
                <Form.Control
                  ref={passRef}
                  type="password"
                  placeholder="password"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUpAdmin;
