import React,{useState} from "react";
import { Container, Row, Col, Form, Button,ToastContainer,Toast } from "react-bootstrap";
export default function ContactForm(props) {
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
      <Container className="my-3" style={{ textAlign: "left" }}>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <Form.Label as="legend">Contact Form</Form.Label>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFullname">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" value="name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFullname">
                <Form.Label>Profession</Form.Label>
                <Form.Control type="text" placeholder="Profession" value="profession" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value="email"/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone" value="phone" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Website</Form.Label>
                <Form.Control type="url" placeholder="Website" value="website" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" value="address"/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFile">
                <Form.Label>Insert Your CV</Form.Label>
                <Form.Control type="file" value="data"/>
              </Form.Group>
              <Form.Group as={Col} controlId="formFile">
                <Form.Label>Insert Your Photo</Form.Label>
                <Form.Control type="file" value="avatar" />
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit" className="mb-2">
              Submit
            </Button>
          </fieldset>
        </Form>
      </Container>
        {/* Toast Start */}
        <ToastContainer className="p-3 footer " position="bottom-center">
        <Toast show={showA} onClose={closeToast}>
          <Toast.Header>
            <img
              src="./logo.png"
              className="rounded me-2"
              alt=""
              width="30"
              height="30"
            />
            <strong className="me-auto">HR React</strong>
          </Toast.Header>
          <Toast.Body className="bg-primary text-white">
            {" "}
            Your form has sent!
          </Toast.Body>
        </Toast>
      </ToastContainer>
      {/* Toast End */}
    </div>
  );
}
