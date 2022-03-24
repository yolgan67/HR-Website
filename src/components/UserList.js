import React, { useState} from "react";
import {
  Container,
  Row,
  Col,
  Table,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { RingLoader } from "react-spinners";
import "./style.css";
import UserCard from "./UserCard";

import { Routes, Route, Link } from "react-router-dom";

export default function UserList(props) {
  const [filteredText, setFilteredText] = useState("");

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

  const emptyMessage = <h3 className="message">There are no user yet</h3>;
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
                <Link to={"user/"+user.id} >
                  Details
                </Link>
              </td>
            </tr>
          );
        });
  return (
    <Container className="mt-3">
      <Row>
        <Col md={{ offset: 3, span: 6 }}>
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
        <Col md={{offset:3,span:6}}>
  <Routes>
        <Route path="user/:id" element={<UserCard />} />
      </Routes>
        </Col>
        <Col md={{ offset: 2, span: 8 }}>
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
        <Col md={{ offset: 5 }}>
          <RingLoader loading={props.list.fetching} className="ringloader" />
        </Col>
      </Row>
      {!props.list.fetching && props.list.users.length === 0
        ? emptyMessage
        : ""}
    </Container>
  );
}
