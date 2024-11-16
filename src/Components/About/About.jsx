import React from "react";
import "./about.css";
import { Container, Row, Col } from "react-bootstrap";
import HexagonIcon from "@mui/icons-material/Hexagon";
import SpeedIcon from "@mui/icons-material/Speed";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Slide, Fade } from "react-awesome-reveal";

const About = () => {
  const styles = {
    hexagon: {
      color: "#04c2c9",
      fontSize: "150px",
    },
    icon: {
      display: "block",
      position: "relative",
      fontSize: "50px",
      margin: "0 auto",
      bottom: "100px",
      marginBottom: "-40px",
      color: "#EFFFFD",
    },
  };

  const features = [
    {
      title: "Fast",
      description: "Fast load times and lag-free interaction, my highest priority.",
      Icon: SpeedIcon,
    },
    {
      title: "Responsive",
      description: "My layouts will work on any device, big or small.",
      Icon: ScreenshotMonitorIcon,
    },
    {
      title: "Intuitive",
      description: "Strong preference for easy-to-use, intuitive UX/UI.",
      Icon: LightbulbIcon,
    },
    {
      title: "Dynamic",
      description: "Websites don't have to be static; I love making pages come to life.",
      Icon: RocketLaunchIcon,
    },
  ];

  return (
    <div id="about" className="about">
      <div className="header" style={{ marginTop: "50px" }}>
        ABOUT
      </div>

      <Container fluid style={{ marginTop: "5%", backgroundColor: "white" }}>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} xs={12} sm={6} lg={3}>
              <div style={{ textAlign: "center" }}>
                <Fade>
                  <HexagonIcon style={styles.hexagon} />
                  <feature.Icon style={styles.icon} />
                </Fade>
                <Slide duration={500}>
                  <h1>{feature.title}</h1>
                  <p>{feature.description}</p>
                </Slide>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About;
