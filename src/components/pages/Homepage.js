import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../style.css";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

export default function Homepage() {
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
            src="https://fmpglobal.co.uk/wp-content/uploads/2019/05/shutterstock_1011468556-1024x576.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* Carousel End */}
      <Container className="homepageText">
        <Row>
          <Col className="my-4" md>
            The human resource profession can be interesting and satisfying, but
            sometimes very challenging. To stand out as a human resources
            manager, it is not enough to rely on your training, knowledge, or
            experience. You need to be on the lookout for resources that gather
            some of the best practices and issues in the human resources arena.
            However, because you will always be swamped with a plethora of
            information, it can be quite daunting to find credible sources that
            provide the information that you need, when you need it. To ease the
            challenge of having to shift through various web pages, here is a
            list of five top websites for human resources information. Although
            each of the websites in this list offer something different, all
            have great, relevant, and up-to-date information on different
            aspects of the industry.
          </Col>
        </Row>
      </Container>

      {/* Form Start */}
      <ContactForm />
      {/* Form End  */}

      <Footer />
    </div>
  );
}
