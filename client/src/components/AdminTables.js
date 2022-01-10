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
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>RSVP</th>
                <th>Plus 1</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest) => {
                return (
                  <tr
                    key={guest._id}
                    className=" text-center md:flex bg-white shadow rounded-md items-center justify-between "
                  >
                    <td> 1 </td>
                    <td> {guest.first_name}</td>
                    <td> {guest.last_name}</td>
                    <td> {guest.email}</td>
                    {guest.RSVP ? <td>yes</td> : <td>no</td>}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminTables;
