import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RSVPform from "../components/RSVPform";

function RSVP() {
  return (
    <>
      <Row>
        <Col></Col>
        <Col sm={4} md={4} lg={4}>
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
