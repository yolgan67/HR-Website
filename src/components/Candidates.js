import React, { Component } from 'react'
import logo from "../logo.png";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Carousel,
  Form,
  Button,
  Toast,
  ToastContainer,
} from "react-bootstrap";

export default class Candidates extends Component {
  render() {
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
          <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="aboutUs" >About Us</Nav.Link>
            <Nav.Link  href="candidates">Candidates</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
  }
}
