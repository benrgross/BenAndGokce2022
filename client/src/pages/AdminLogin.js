import React, { useRef, useState, useEffect } from "react";
import API from "../utils/API";
import AdminTables from "../components/AdminTables";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

function AdminLogin() {
  // Define state hooks
  const [tokenState, setTokenState] = useState(false);
  const [guests, setGuests] = useState([]);

  // form reffs
  const userRef = useRef();
  const passRef = useRef();

  // page load function calls
  useEffect(() => {
    checkLogin();
    getGuests();
  }, []);

  // Function to get guests in database
  const getGuests = async () => {
    //GET all gests from db
    const { data } = await API.getAllGuests();
    // set guests in state
    setGuests(data);
  };

  // log in function with token
  const checkLogin = async () => {
    // if token in local store -> authorized app
    if (localStorage.getItem("token")) {
      JSON.parse(localStorage.getItem("token"));
      setTokenState(true);
    } else setTokenState(false);
  };
  const login = async (e) => {
    e.preventDefault();
    // if no token -> show form and get credentials
    const creds = {
      username: userRef.current.value,
      password: userRef.current.value,
    };

    // log in with passport function
    const { data } = await API.adminLogin(creds);
    const { token } = data;

    // set token in local storage
    localStorage.setItem("token", JSON.stringify(token));
    setTokenState(true);
    console.log(data);
  };

  return (
    <div>
      <Container fluid style={{ marginTop: "10%" }}>
        {tokenState ? (
          <AdminTables guests={guests} />
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
