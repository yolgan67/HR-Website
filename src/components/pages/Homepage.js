import React, { useState } from "react";
import {
  Carousel,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import "../style.css";
import ContactForm from "../ContactForm";


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
      {/* Carousel Start */}
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 capture"
            src="./images/capture1.png"
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
            src="./images/capture3.png"
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
              src="./logo.png"
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
      <ContactForm  handleSubmit={handleSubmit}/>
      {/* Form End  */}
    </div>
  );
}
