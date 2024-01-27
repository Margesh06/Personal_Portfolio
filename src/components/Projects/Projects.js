import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stock from "../../Assets/Projects/stock.PNG";
import derm from "../../Assets/Projects/derm.PNG";
import win from "../../Assets/Projects/win.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Market PortFolio"
              description="Developed an interactive stock market portfolio project allowing users to buy, sell, and fostering a hands-on learning experience.
              .Additionally,I had integrated OpenCV for face logging, enhancing the project’s security and user authentication by implementing a facial recognition system during login"
              ghLink="https://github.com/Margesh06/Stock-Market-Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={derm}
              isBlog={false}
              title="dermAID"
              description="Developed an Skin Disease Detection AI Tool which is a cutting-edge solution designed to assist healthcare professionals and individuals in identifying various skin conditions accurately and efficiently.Designed a app With an intuitive interface, users can easily upload images, receive diagnoses, and access valuable information about detected conditions, all while prioritizing privacy and security"
              ghLink="https://github.com/Margesh06/dermAID"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={win}
              isBlog={false}
              title="Win11Lite"
              description="Developed a Web application that seamlessly integrates entertainment and utility .It Includes classic games like Snake and Dice, a QR code generator for quick data sharing, weather updates for
informed planning.It offers to-do list manager, and a virtual band system for musical enjoyment, offering a versatile and engaging user
experience."
              ghLink="https://github.com/Margesh06/Windows11_clone"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
