import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stock from "../../Assets/Projects/stock.PNG";
import derm from "../../Assets/Projects/derm.PNG";
import hl from "../../Assets/Projects/hl.PNG";

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
              imgPath={hl}
              isBlog={false}
              title="Hostel Leave Management System"
              description="Developed a comprehensive hostel leave management web application with separate panels for students, staff, and admins to streamline the leave process. Students submit leave requests, which are reviewed and approved by wardens, generating a QR code displayed on the student dashboard. The system ensures secure entry and exit through QR code scanning, improving efficiency and security in leave management."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
