import React, { useRef, useState, useEffect } from "react";
import API from "../utils/API";
import AdminTables from "../components/AdminTables";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

function AdminLogin() {
  const [tokenState, setTokenState] = useState(false);

  const userRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    if (localStorage.getItem("token")) {
      JSON.parse(localStorage.getItem("token"));
      setTokenState(true);
    } else setTokenState(false);
  };
  const login = async (e) => {
    e.preventDefault();

    const creds = {
      username: userRef.current.value,
      password: userRef.current.value,
    };

    const { data } = await API.adminLogin(creds);
    const { token } = data;

    localStorage.setItem("token", JSON.stringify(token));
    setTokenState(true);
    console.log(data);
  };

  return (
    <div>
      <Container fluid style={{ marginTop: "10%" }}>
        {tokenState ? (
          <AdminTables />
        ) : (
          <Row>
            <Col></Col>
            <Col>
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

                <Button variant="primary" type="submit" onClick={login}>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default AdminLogin;
