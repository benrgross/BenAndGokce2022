import React from "react";
import AboutText from "../components/AboutText";
import EmojiImage from "../components/EmojiImage";
import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col>
          <EmojiImage />
        </Col>
        <Col></Col>
      </Row>
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
