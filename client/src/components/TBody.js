import React from "react";
import { Table } from "react-bootstrap";

function TBody({ guests }) {
  //   console.log(guests.map((guest) => guest.first_name));
  return (
    <>
      <tbody>
        {/* {guests.map((guest) => {
          return (
            <tr
              key={guest._id}
              className=" text-center md:flex bg-white shadow rounded-md items-center justify-between "
            ></tr>
          );
        })} */}
      </tbody>
    </>
  );
}

export default TBody;
