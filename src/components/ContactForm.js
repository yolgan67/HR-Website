import React from 'react'
import {
  Container,
  Row,
  Col,

  Form,
  Button,

} from "react-bootstrap";
export default function ContactForm(props) {
  return (
    <div><Container
    className="my-3"
    style={{ textAlign: "left", border: "1px solid black" }}
  >
    <Form onSubmit={props.handleSubmit}>
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
        <Form.Group controlId="formFile" className="mb-3">
<Form.Label>Default file input example</Form.Label>
<Form.Control type="file" />
</Form.Group>
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
  </Container></div>
  )
}
