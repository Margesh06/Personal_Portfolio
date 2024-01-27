import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMongodb
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <FaPy />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <IoLogoAtom />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
