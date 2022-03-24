import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export default function ContactForm(props) {
  return (
    <div>
      <Container className="my-3" style={{ textAlign: "left" }}>
        <Form onSubmit={props.handleSubmit}>
          <fieldset>
            <Form.Label as="legend">Contact Form</Form.Label>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFullname">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFullname">
                <Form.Label>Profession</Form.Label>
                <Form.Control type="text" placeholder="Profession" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Website</Form.Label>
                <Form.Control type="phone" placeholder="Website" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFile">
                <Form.Label>Insert Your CV</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group as={Col} controlId="formFile">
                <Form.Label>Insert Your Photo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit" className="mb-2">
              Submit
            </Button>
          </fieldset>
        </Form>
      </Container>
    </div>
  );
}
