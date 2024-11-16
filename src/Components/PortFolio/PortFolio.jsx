import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const PortFolio = () => {
  return (
    <div id="portfolio">
      <Container fluid>
        <Row>
          {/* Left Section: About and Location */}
          <Col lg={6} xs={12} sm={12} md={12}>
            <div className="portfolio">
              <div className="round-image"></div>
              <p>
                I'm a Full-Stack Web Developer specializing in the{" "}
                <strong>MERN stack</strong>, with a strong focus on developing
                scalable and efficient applications.
              </p>
              <p>
                I love to build innovative solutions and create applications
                that make an impact.
              </p>
              <p>
                <a
                  href="https://docs.google.com/document/d/1hWGLod9xqlV44nvkMQsfK6kOi4XqpepE/edit?usp=sharing&ouid=102389274576037284742&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(4, 194, 201)" }}
                >
                  View my resume.
                </a>
              </p>
              <p>
                <a href="#contact" style={{ color: "rgb(4, 194, 201)" }}>
                  Let's collaborate on something amazing.
                </a>
              </p>
            </div>
          </Col>

          {/* Right Section: Skills */}
          <Col lg={6} xs={12} sm={12} md={12}>
            <Fade cascade duration={200}>
              {/* Skill Blocks */}
              <div className="skill-block">
                <div className="skill-name">Node.js</div>
                <div className="container">
                  <div className="skills node">95%</div>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-name">React.js</div>
                <div className="container">
                  <div className="skills react">80%</div>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-name">JavaScript</div>
                <div className="container">
                  <div className="skills js">75%</div>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-name">MongoDB</div>
                <div className="container">
                  <div className="skills react">80%</div>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-name">DevOps</div>
                <div className="container">
                  <div className="skills dev">85%</div>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-name">AWS</div>
                <div className="container">
                  <div className="skills react">80%</div>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-name">HTML CSS</div>
                <div className="container">
                  <div className="skills html">80%</div>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-name">Python</div>
                <div className="container">
                  <div className="skills python">75%</div>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PortFolio;
