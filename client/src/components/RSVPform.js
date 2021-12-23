import React, { useRef } from "react";
import { Form, Button, Row, Container } from "react-bootstrap";

function RSVPform() {
  const nameRef = useRef();
  const rsvpYesRef = useRef();
  const rsvpNoRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("click");

    const name = nameRef.current.value;
    // const guestInfo = {
    //   email: emailRef.current.value,
    //   rsvpNo: rsvpNoRef.current.value,
    //   rsvpYes: rsvpYesRef.current.value,
    // };
    console.log("guest info", name);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          enter the same email the invitation was sent to.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First and Last Name</Form.Label>
        <Form.Control
          ref={nameRef}
          type="name"
          placeholder="first and last name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check ref={rsvpYesRef} type="checkbox" label="RSVP Yes" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check ref={rsvpNoRef} type="checkbox" label="RSVP No" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default RSVPform;
