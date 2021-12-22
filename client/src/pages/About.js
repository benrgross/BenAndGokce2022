import React from "react";
import AboutText from "../components";
import { Row, Col, Container } from "react-bootstrap";

function About() {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col>
          {" "}
          <AboutText />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default About;
