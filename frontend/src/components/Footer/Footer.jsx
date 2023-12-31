import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: "/home",
    display: "home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallerry",
    display: "Gallerry",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
            <h1 class="m-0 d-flex" style={{color:"#1B9C85"}}><i class="ri-map-pin-fill me-0"></i>Tourist</h1>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0">
                <h6 className="d-flex gap-1">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">VietNamese,Thu Duc,TPHCM</p>
              </ListGroupItem>
            </ListGroup>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0">
                <h6 className="d-flex gap-1">
                  <span>
                  <i className="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">phantruyen19722@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0">
                <h6 className="d-flex gap-1">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  Phone: 
                </h6>
                <p className="mb-0"> +81 1900888222</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className="text-center pt-5">
            <p className="copyright">Copyright {year}, design and developer by Ngoc Truyen</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
