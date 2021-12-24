import React, { useRef } from "react";
import { Form, Button, Row, Container } from "react-bootstrap";

function RSVPform() {
  const nameRef = useRef();
  const rsvpYesRef = useRef(null);
  const rsvpNoRef = useRef(null);
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("click");

    const guestInfo = await {
      name: nameRef.current.value,
      email: emailRef.current.value,
      rsvpNo: rsvpNoRef.current.checked,
      rsvpYes: rsvpYesRef.current.checked,
    };
    console.log("guest info", guestInfo);
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
        <Form.Check
          value="false"
          ref={rsvpYesRef}
          type="checkbox"
          label="RSVP Yes"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          ref={rsvpNoRef}
          value="false"
          type="checkbox"
          label="RSVP No"
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default RSVPform;
