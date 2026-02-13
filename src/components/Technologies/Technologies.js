import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "../About/Techstack";

function Technologies() {
  return (
    <Container fluid className="tech-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Technologies </strong>I Work With
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default Technologies;
