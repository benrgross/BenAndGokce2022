import React, { useRef, useState } from "react";
import API from "../utils/API";
import { Form, Button } from "react-bootstrap";

function Plus1({ guest }) {
  const [plus1, setPlust1] = useState();

  const nameRef = useRef();
  const rsvpYesRef = useRef(null);
  const rsvpNoRef = useRef(null);
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // define the guests info from the form
    const guestInfo = {
      email: guest,
      firstName: nameRef.current.value.split(" ")[0].trim(),
      lastName: nameRef.current.value.split(" ")[1].trim(),
      guestEmail: emailRef.current.value,
      no: rsvpNoRef.current.checked,
      RSVP: rsvpYesRef.current.checked,
    };
    // set guest info in state

    const { data } = await API.updateGuestPlus1(guestInfo);
    await console.log("guest", data);
  };

  return (
    <div>
      <Form>
        <h3>You have a plus one, please RSVP for them </h3>
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
            //   value="false"
            ref={rsvpYesRef}
            type="checkbox"
            label="RSVP Yes"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check ref={rsvpNoRef} type="checkbox" label="RSVP No" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Plus1;
