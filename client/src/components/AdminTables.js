import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import API from "../utils/API";
import { Row, Col, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import TBody from "./TBody";

function AdminTables({ guests }) {
  // useEffect(() => {
  //   countGuests();
  // }, []);

  // const countGuests = () => {
  //   let sum = 0;
  //   guests.forEach((guest) => {
  //     guest.plus_1 = 0 ? (sum += 1) : (sum += 1 + guest.plus_1);
  //   });

  //   console.log(sum);
  // };
  return (
    // <Container fluid id="main-table">
    <Row className="d-flex justify-content center">
      {/* <Col xs={0} md={4}></Col> */}
      <Col xs={12} md={8}>
        <Table striped bordered hover>
          <TBody guests={guests} />
        </Table>
      </Col>
      {/* <Col xs={0} md={4}></Col> */}
    </Row>
    // </Container>
  );
}

export default AdminTables;
