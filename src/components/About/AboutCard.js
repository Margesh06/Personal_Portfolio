import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m <span className="purple">Margesh Modi</span>, a software engineer with a strong focus on building scalable, high-performance backend systems.
            I currently work at <span className="purple">Fitpage</span>, where I design and optimize production APIs and PostgreSQL databases for high-traffic applications.
            <br />
            <br />
            I’ve led performance-critical improvements that directly impacted user growth and revenue, and I enjoy taking ownership of problems from design to deployment.
            I’m driven by writing clean, efficient code and building systems that scale reliably in real-world conditions.
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
