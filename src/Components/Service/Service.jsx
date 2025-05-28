import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-scroll";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

import "./Service.css";

function Service() {
  const [setExpanded] = useState(false);
  const card = [
    {
      id: 1,
      image: "UIUX.png",
      Heading: "UI/UX Design",
      Para: "I have experience creating UI/UX designs and SEO-optimized web applications.",
    },
    {
      id: 2,
      image: "/website-content.png",
      Heading: "Website design & Development",
      Para: "I have two years of industry experience in developing user-friendly web applications.",
    },
    {
      id: 3,
      image: "/hired.png",
      Heading: "Hire Me",
      Para: "You can hire me to create your dream web application.",
    },
    {
      id:4,
      image: "/CI_CD.webp",
      Heading: "Scalable Back-End",
      Para: "Efficient queries and caching, and use CI/CD pipelines for fast, reliable deployment and scalable backend."
    }
  ];
  return (
    <div className="Background1">
      <div className="flex">
        <h2 className="flex2">
          <h1>
            <span className="dash">-</span>Service
          </h1>

          <h1>
            <span className="dash">Service</span> I Provide
          </h1>
        </h2>

        <button className="btn">
          <Link
            //  className="nav-links"
            activeClass="active"
            to="about"
            smooth={true}
            offset={-50}
            duration={100}
            onClick={() => setExpanded(false)}
          >
            About
          </Link>
          <img src="/right_Arow.png" alt="" className="image1" />
        </button>
      </div>
      <div className="information">
            <Fade cascade duration={250}>
        {card.map((cards) => (
          <Card
            className="info"
            key={cards.id}
            style={{ width: "18rem ", padding: "1rem" }}
          >
            {cards.image && <img src={cards.image} alt="" className="image1" />}
            <Card.Body>
              <Card.Title className="title">{cards.Heading}</Card.Title>
              <Card.Text>{cards.Para}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        </Fade>
      </div>
      <div></div>
    </div>
  );
}

export default Service;
