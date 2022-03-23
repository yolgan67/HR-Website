import React, { useEffect } from "react";
import { connect } from "react-redux";
import logo from "../logo.png";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { fetchUser } from "../actions/userActions";
import UserList from "./UserList";

export const Candidates = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);
  console.log("candidates", props.userReducer);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            HR React
          </Navbar.Brand>
          <Nav className="me-auto float-left">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="aboutUs">About Us</Nav.Link>
            <Nav.Link href="candidates">Candidates</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* navbar end */}
      <h1>Candidates</h1>
      <UserList users={props.userReducer} />
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({ userReducer });

const mapDispatchToProps = { fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
