import React, { useRef, useState } from "react";
import { Form, Button, Row, Container } from "react-bootstrap";
import API from "../utils/API";

function RSVPform() {
  // create initial state with state hook
  const [guest, setGuest] = useState({
    firstName: "",
    lastName: "",
    email: "",
    rsvpYes: false,
    rsvpNo: false,
  });

  // define my form references
  const nameRef = useRef();
  const rsvpYesRef = useRef(null);
  const rsvpNoRef = useRef(null);
  const emailRef = useRef();

  // function that extracts form value and sets it in state
  const handleSubmit = async (e) => {
    e.preventDefault();

    // define the guests info from the form
    const guestInfo = await {
      firstName: nameRef.current.value.split(" ")[0].trim(),
      lastName: nameRef.current.value.split(" ")[1].trim(),
      email: emailRef.current.value,
      rsvpNo: rsvpNoRef.current.checked,
      rsvpYes: rsvpYesRef.current.checked,
    };
    // set guest info in state
    await setGuest(guestInfo);

    const { data } = await API.getGuest(guest.firstName, guest.lastName);
    console.log("guest", data);
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
