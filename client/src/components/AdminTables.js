import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import API from "../utils/API";
import { Row, Col, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import TBody from "./TBody";

function AdminTables({ guests }) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <TBody guests={guests} />
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminTables;
