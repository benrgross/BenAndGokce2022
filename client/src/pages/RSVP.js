import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import RSVPform from "../components/RSVPform";

function RSVP() {
  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          <Container className="form-cont">
            <RSVPform />
          </Container>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default RSVP;
