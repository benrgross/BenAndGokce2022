import React from "react";
import { Button } from "react-bootstrap";

function TBody({ guests }) {
  return (
    <>
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
        {guests.map((guest, i) => {
          return (
            <tr
              key={guest._id}
              className=" text-center md:flex bg-white shadow rounded-md items-center justify-between "
            >
              <td> {i + 1} </td>
              <td> {guest.first_name}</td>
              <td> {guest.last_name}</td>
              <td> {guest.email}</td>
              {guest.RSVP ? <td>yes</td> : <td>no</td>}
              {guest.plus_1 ? <td>yes</td> : <td>no</td>}
              <td>
                {" "}
                <Button variant="primary">Send Email</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default TBody;
