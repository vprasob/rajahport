import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Welcome to <span className="purple"> Rata </span> Communications
              <br/> Digital Studio
            </h1>
            <p className="home-about-body">
            Rata Communications was established in the year 2014, all operations were 
            handled from UAE, Australia and now from Bengaluru, is an oasis of 
            learning, we hold regular cultural programs, Camps for Children, 
            workshops, exhibitions and events with sincere endeavor to create 
            awareness about cultural, heritage and Arts amongst the people.
              <br />
              <br />
              Rata Film Production Studio, a subsidy of Rata Communications, is 
              committed to cater to the art of film making with a full-fledged studio, 
              which includes cameras, production and post production facilities.
            </p>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
