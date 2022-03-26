import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Navbar bg="dark " variant="dark" >
        <Container>
          <Row>
            <Navbar.Brand as={Col} href="/">
              <img
                alt=""
                src="../logo.png"
                width="50"
                height="50"
                className="d-inline-block align-top ms-5"
              />
              <span className="fs-1">HR React</span>
            </Navbar.Brand>
          </Row>
          <div className="me-5 float-end">
            <Link to="" className="footerText" as={Col}>
             
              Contact Us
            </Link>
            <Link to="" className="footerText " as={Col}>
              info@hr-react.com
            </Link>
          </div>
          {/* <div>@Copyright 2022</div> */}
        </Container>
      </Navbar>
    </div>
 
  );
}
