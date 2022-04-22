import React,{useState} from "react";
import { Container, Row, Col, Form, Button,ToastContainer,Toast } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { newUser } from "../actions/userActions";

export default function ContactForm(props) {
  const [contact,setContact]=useState({
    name:"",
    profession:"",
    phone:"",
    email:"",
    website:"",
    data:"",
    avatar:""

  })
  // const [profession,setProfession]=useState("")
  // const [phone,setPhone]=useState("")
  // const [email,setEmail]=useState("")
  // const [website,setWebsite]=useState("")
  // const [address,setAddress]=useState("")
  // const [data,setData]=useState("")
  // const [avatar,setAvatar]=useState("")

const dispatch = useDispatch()
const state = useSelector(state => state)
console.log(state)

const [showA, setShowA] = useState(false);

const handleChange = (e)=>{
  
  setContact({
    ...contact,
    [e.target.name]:e.target.value
  })
  console.log(e.target.value)
}
const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newUser(contact))
    setShowA(true);
  };
  const closeToast = setTimeout(() => {
    setShowA(false);
  }, 3000);
  console.log(contact)
  return (
    <div>
      <Container className="my-3" style={{ textAlign: "left" }}>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <Form.Label as="legend">Contact Form</Form.Label>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFullname">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" name="name" value={contact.name} onChange={handleChange}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFullname">
                <Form.Label>Profession</Form.Label>
                <Form.Control type="text" placeholder="Profession" name="profession" value={contact.profession} onChange={handleChange}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" value={contact.email} onChange={handleChange}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone" name="phone" value={contact.phone} onChange={handleChange}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Website</Form.Label>
                <Form.Control type="url" placeholder="Website" name="website" value={contact.website} onChange={handleChange}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" name="address" value={contact.address} onChange={handleChange}/>
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
