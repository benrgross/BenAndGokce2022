import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import API from "../utils/API";
import { Container, Table, Row, Col } from "react-bootstrap";

function AdminTables() {
  const [guests, setGuests] = useState();

  useEffect(() => {
    getGuests();
  }, []);

  const getGuests = async () => {
    console.log("hello");
    const { data } = await API.getAllGuests();
    setGuests(data);
    console.log(data);
  };

  return <div>hello</div>;
}

export default AdminTables;
