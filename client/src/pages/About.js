import React from "react";
import AboutText from "../components/AboutText";
import EmojiImage from "../components/EmojiImage";
import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col md={6} sm={6} lg={6}>
          <EmojiImage />
          <AboutText />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default About;
