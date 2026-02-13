import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiPostgresql,
  SiTypescript,
  SiFastapi,
  SiNestjs,
  SiRedis,
  SiRubyonrails,
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiExpress,
  SiNextdotjs,
  SiAngular,
} from "react-icons/si";

function Techstack() {
  const labelStyle = { 
    fontSize: "14px", 
    marginTop: "8px", 
    marginBottom: "0", 
    color: "#b3b3b3" 
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={labelStyle}>TypeScript</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
        <p style={labelStyle}>NestJS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={labelStyle}>Node.js</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p style={labelStyle}>Next.js</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
        <p style={labelStyle}>Angular</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={labelStyle}>Java</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p style={labelStyle}>C++</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={labelStyle}>JavaScript</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={labelStyle}>React</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={labelStyle}>MongoDB</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={labelStyle}>PostgreSQL</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={labelStyle}>Python</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <p style={labelStyle}>FastAPI</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <p style={labelStyle}>Redis</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRubyonrails />
        <p style={labelStyle}>Rails</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p style={labelStyle}>AWS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p style={labelStyle}>Docker</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={labelStyle}>Express</p>
      </Col>

    </Row>
  );
}

export default Techstack;
