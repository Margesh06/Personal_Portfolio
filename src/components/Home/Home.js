import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import photo from "./../../Assets/p.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Margesh Modi</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* Image Section */}
            <Col md={5} className="d-none d-md-flex justify-content-center align-items-center" style={{ paddingBottom: 20 }}>
              <img
                src={photo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxWidth: "100%",  // Makes sure the image is responsive and adjusts to the screen size
                  height: "auto",     // Maintains aspect ratio
                  objectFit: "contain", // Ensures the image fits without distortion
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
