import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import API from "../utils/API";
import { Row, Col, Conatainer } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import TBody from "./TBody";

function AdminTables({ guests }) {
  console.log("tabble", guests);

  console.log(guests.map((guest) => guest.first_name));
  // const [guests, setGuests] = useState();

  // useEffect(() => {
  //   getGuests();
  // }, []);

  // const getGuests = async () => {
  //   const { data } = API.getAllGuests();
  //   setGuests(data);
  //   console.log(data);
  // };

  //get all the guest to fill table info

  return (
    <div>
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thread>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>RSVP</th>
                <th>Plus 1</th>
              </tr>
            </thread>
            <TBody guests={guests} />
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default AdminTables;
