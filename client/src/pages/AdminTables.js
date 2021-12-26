import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";

function AdminTables() {
  const userRef = useRef();
  const passRef = useRef();
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>user name</Form.Label>
          <Form.Control ref={userRef} type="username" placeholder="user name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AdminTables;
