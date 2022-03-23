import React, { useState } from "react";
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
import logo from "../logo.png";
import capture1 from "../images/capture1.png";
import capture3 from "../images/capture3.png";
import "./style.css";


export default function Homepage() {
  const [showA, setShowA] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowA(true);
   
  };
  const closeToast = setTimeout(() => {
    setShowA(false);
  }, 3000);

  return (
    <div>
      {/* NavBar Start */}
      
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
      {/* NavBar-End */}
      {/* Carousel Start */}
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 capture"
            src={capture1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="capture">
          <img
            className=" capture"
            src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 capture"
            src={capture3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* Carousel End */}
{/*
      {/* Toast Start */}
      <ToastContainer className="p-3" position="bottom-center">
        <Toast show={showA} onClose={closeToast}>
          <Toast.Header>
            <img
              src={logo}
              className="rounded me-2"
              alt=""
              width="30"
              height="30"
            />
            <strong className="me-auto">HR React</strong>
          </Toast.Header>
          <Toast.Body> Your form has sent!</Toast.Body>
        </Toast>
      </ToastContainer>
      {/* Toast End */}

      {/* Form Start */}
      <Container
        className="my-3"
        style={{ textAlign: "left", border: "1px solid black" }}
      >
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <Form.Label as="legend">Contact Form</Form.Label>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFullname">
                <Form.Label>Fullname</Form.Label>
                <Form.Control type="text" placeholder="Enter fullname" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit" className="mb-2">
              Submit
            </Button>
          </fieldset>
        </Form>
      </Container>
      {/* Form End  */}
    </div>
  );
}
