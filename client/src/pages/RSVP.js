import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RSVPform from "../components/RSVPform";

function RSVP() {
  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          <Container>
            <RSVPform />
          </Container>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default RSVP;
