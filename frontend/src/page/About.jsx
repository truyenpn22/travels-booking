import React from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import { Col, Container, Row } from "reactstrap";
import Newsletter from "../shared/Newsletter";
import experience from "../assets/images/logo6.png";
import Subtitle from "../shared/Subtitle";
import Testimonials from "../components/Testimonial/Testimonials";

const About = () => {
  return (
    <>
      <CommonSection title={"About Us"} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="h-100">
                <img
                  src={experience}
                  className="img-fluidw-100 h-100"
                  alt=""
                />
              </div>
            </Col>
            <Col lg="6">
              <h1 className="mb-4">
                Welcom to <span style={{color:"#1B9C85"}}>Tourist</span>
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                veritatis necessitatibus nemo fugiat cum rerum.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
                aliquid delectus laborum ab earum unde!
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="ri-arrow-right-s-line"></i>Frist className Flights
                  </p>
                  <p className="mb-0">
                    <i className="ri-arrow-right-s-line"></i>Frist className Flights
                  </p>
                  <p className="mb-0">
                    <i className="ri-arrow-right-s-line"></i>Frist className Flights
                  </p>
                  <p className="mb-0">
                    <i className="ri-arrow-right-s-line"></i>Frist className Flights
                  </p>
                  <p className="mb-0">
                    <i className="ri-arrow-right-s-line"></i>Frist className Flights
                  </p>
                  <div className="btn primary__btn py-3 px-5 mt-2 text-white fw-bold">
                    Read More
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>



      <Newsletter />
    </>
  );
};

export default About;
