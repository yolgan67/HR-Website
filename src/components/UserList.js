import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  InputGroup,
  FormControl,
  Offcanvas,
} from "react-bootstrap";
import { RingLoader } from "react-spinners";
import "./style.css";
import UserCard from "./UserCard";

import { Routes, Route, Link } from "react-router-dom";

export default function UserList(props) {
  const [filteredText, setFilteredText] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log("SORT",props.users.users.sort(function(a, b){
  //   return a.name.localeCompare(b.name)}))
  // }

  const onChangeFilter = (e) => {
    setFilteredText(e.target.value);
  };
  // Filtered list by name or profession while searching
  const filteredList = props.list.users.filter((user) => {
    return (
      user.name.toLowerCase().indexOf(filteredText.toLowerCase()) !== -1 ||
      user.profession.toLowerCase().indexOf(filteredText.toLowerCase()) !== -1
    );
  });

  // const emptyMessage = <h3 className="message">There are no user yet</h3>;
  const connectionMessage = (
    <h3 className="message">There is a Connection Problem</h3>
  );

  const userList = props.list.error.response
    ? connectionMessage
    : filteredList
        .sort(function (a, b) {
          return a.name.localeCompare(b.name);
        })
        .map((user, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.profession}</td>
              <td>
                <Link to={"user/" + user.id} onClick={handleShow}>
                  Details
                </Link>
              </td>
            </tr>
          );
        });
  return (
    <Container className="mt-3">
      <Row>
        <div>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header>
              <Offcanvas.Title>
                <Link
                  to="/candidates"
                  onClick={handleClose}
                  type="button"
                  class=" text-reset justify-content-end"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  Back To Page
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Routes>
                <Route path="user/:id" element={<UserCard />} />
              </Routes>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <Col>
          {/* Form start */}
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Fullname or Profession"
              aria-label="Fullname or Profession"
              aria-describedby="basic-addon2"
              onChange={onChangeFilter}
              type="search"
            />
          </InputGroup>
          {/* Form end */}
        </Col>
      </Row>
      {/* Table Start */}
      <Row>
        <Col>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Fullname</th>
                <th>Profession</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>{userList}</tbody>
          </Table>
        </Col>
      </Row>
      {/* Table End */}

      <Row>
        <RingLoader loading={props.list.fetching} className="ringloader" />
      </Row>
      {/* {!props.list.fetching && props.list.users.length === 0
        ? emptyMessage
        : ""} */}
    </Container>
  );
}
