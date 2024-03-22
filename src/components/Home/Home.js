import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import photo from "./../../Assets/p.png"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
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

              <div style={{ padding: 50, textAlign: "left"}}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={photo}
                alt="home pic"
                className="img-fluid"
                style={{width: "600px",height:"590px",position:"absolute",top: "40px",right: "200px"}}
                
              />
              
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
  {/* <img
    src={photo}
    alt="home pic"
    className="img-fluid"
    style={{
      width: "100%",  // Set width to 100% for responsiveness
      maxWidth: "600px", // Limit maximum width to 600px
      height: "auto",  // Allow the height to adjust proportionally
      position: "relative", // Change position to relative for stacking in small screens
      top: "40px",
      right: "0",
    }}
  /> */}
  <style>
    {/* {`
      @media (min-width: 768px) {
        img {
          width: "600px";
          height: "590px";
          position: absolute;
          top: "40px";
          right: "200px";
        }
      }
    `} */}
  </style>
</Col>

            

            

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
