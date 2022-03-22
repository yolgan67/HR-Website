import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import {Container,Navbar,Nav,Carousel} from 'react-bootstrap'
import logo from '../logo.png'
import capture1 from '../images/capture1.png'
import capture2 from '../images/capture2.png'
import capture3 from '../images/capture3.png'

export default function Homepage() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      HR react
      </Navbar.Brand>
      <Nav className="me-auto float-left">
      <Nav.Link href="#features">About Us</Nav.Link>
      <Nav.Link href="#pricing">Candidates</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={capture1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={capture2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 capture"
      src={capture3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
