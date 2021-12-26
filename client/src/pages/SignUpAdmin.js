import React, { useRef } from "react";
import API from "../utils/API";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

function SignUpAdmin() {
  const userRef = useRef();
  const passRef = useRef();

  const signUpUser = async (e) => {
    e.preventDefault();

    const creds = {
      username: userRef.current.value,
      password: userRef.current.value,
    };

    const { data } = API.adminSignUp(creds);
    console.log(data);
  };

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

              <Button variant="primary" type="submit" onClick={signUpUser}>
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
