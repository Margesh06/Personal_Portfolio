import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Resume_Margesh Modi.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            Work <strong className="purple">Experience</strong>
          </h1>

          {/* Fitpage - Software Engineer */}
          <div className="experience-card" style={{ marginBottom: "30px" }}>
            <Row>
              <Col md={8} xs={12}>
                <h4 style={{ fontWeight: "bold", textAlign: "left" }}>Fitpage</h4>
                <p style={{ color: "#b3b3b3", marginBottom: "5px", textAlign: "left" }}>
                  NextJS, NestJS, JavaScript, PostgreSQL
                </p>
              </Col>
              <Col md={4} xs={12} className="text-md-right text-left">
                <p style={{ color: "#b3b3b3" }}>Mumbai, Maharashtra</p>
              </Col>
            </Row>

            <div style={{ marginBottom: "20px" }}>
              <Row>
                <Col md={8} xs={12}>
                  <h5 style={{ fontStyle: "italic", textAlign: "left" }}>Software Engineer</h5>
                </Col>
                <Col md={4} xs={12} className="text-md-right text-left">
                  <p style={{ color: "#7fbacd", fontStyle: "italic" }}>Jun 2025 – Present</p>
                </Col>
              </Row>
              <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
                <li>
                  Designed and implemented <strong>low-latency, high-throughput backend services</strong> for high-traffic applications with a strong focus on scalability, reliability, and security.
                </li>
                <li>
                  Optimized <strong>SQL queries, indexes, and joins</strong> across critical PostgreSQL services, significantly reducing API response times and improving system efficiency.
                </li>
                <li>
                  Collaborated in <strong>Agile sprints</strong> with product managers and business stakeholders to deliver customer-facing features with measurable performance improvements.
                </li>
              </ul>
            </div>

            <div>
              <Row>
                <Col md={8} xs={12}>
                  <h5 style={{ fontStyle: "italic", textAlign: "left" }}>Software Engineer Intern</h5>
                </Col>
                <Col md={4} xs={12} className="text-md-right text-left">
                  <p style={{ color: "#7fbacd", fontStyle: "italic" }}>Jan 2025 – May 2025</p>
                </Col>
              </Row>
              <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
                <li>
                  Led the end-to-end revamp of <strong>training.fitpage.in</strong>, improving system performance and user experience, resulting in a <strong>50% increase in active users</strong> and a <strong>30% revenue growth</strong>.
                </li>
                <li>
                  Designed and deployed <strong>scalable, low-latency RESTful APIs</strong> for the <strong>Spolo app</strong>, supporting seamless feature integration under expected production load.
                </li>
              </ul>
            </div>
          </div>

          {/* Oopar Growth Ventures */}
          <div className="experience-card" style={{ marginBottom: "30px" }}>
            <Row>
              <Col md={8} xs={12}>
                <h4 style={{ fontWeight: "bold", textAlign: "left" }}>Oopar Growth Ventures Pvt Ltd</h4>
                <p style={{ color: "#b3b3b3", marginBottom: "5px", textAlign: "left" }}>
                  Angular, NodeJS, JavaScript, Firestore
                </p>
              </Col>
              <Col md={4} xs={12} className="text-md-right text-left">
                <p style={{ color: "#b3b3b3" }}>Bangalore, Karnataka</p>
              </Col>
            </Row>

            <div>
              <Row>
                <Col md={8} xs={12}>
                  <h5 style={{ fontStyle: "italic", textAlign: "left" }}>Software Engineer Intern</h5>
                </Col>
                <Col md={4} xs={12} className="text-md-right text-left">
                  <p style={{ color: "#7fbacd", fontStyle: "italic" }}>April 2024 – June 2024</p>
                </Col>
              </Row>
              <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
                <li>
                  Optimized core application features (chat, events, notifications) through refactoring and performance tuning, reducing load times by <strong>80%</strong>.
                </li>
                <li>
                  Developed a centralized <strong>Admin Dashboard</strong> and integrated <strong>OneSignal</strong> for scalable, automated user notifications.
                </li>
              </ul>
            </div>
          </div>

          {/* Download Resume Button */}
          <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;View Full Resume
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
