import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import myImg from "../../Assets/avatar.svg";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            
            {/* Mobile view image - shows below heading */}
            <div className="d-md-none text-center" style={{ paddingBottom: "30px" }}>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ maxWidth: "80%" }} />
            </div>
            
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img d-none d-md-block"
          >
            
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
