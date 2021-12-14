import React from "react";
import "../index.css";
import { Container, Row, Col, Image } from "react-bootstrap";

function SaveTheDateImg() {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            id="save-date"
            className="center"
            style={{ width: "70%", height: "75%" }}
            src="images/SaveTheDate.jpg"
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SaveTheDateImg;
