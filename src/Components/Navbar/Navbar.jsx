import React, { useState } from "react";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [toggleStyle, setToggleStyle] = useState({
    backgroundColor: "#1b242f",
  });

  const handleToggle = () => {
    setExpanded((prevExpanded) => (prevExpanded ? false : "expanded"));
  };

  const handleMouseEnter = () => {
    setToggleStyle({ backgroundColor: "white" });
  };

  const handleMouseLeave = () => {
    setToggleStyle({ backgroundColor: "#1b242f" });
  };

  return (
    <Navbar
      className="navbar-custom"
      sticky="top"
      expand="sm"
      expanded={expanded}
      collapseOnSelect
    >
      <div style={{ marginLeft: "60px" }}>
        <Navbar.Toggle
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={toggleStyle}
          onClick={handleToggle}
        />
        <Navbar.Collapse>
          <Nav>
            <Link
              className="nav-links"
              activeClass="active"
              to="home"
              smooth={true}
              duration={100}
              onClick={() => setExpanded(false)}
            >
              Home
            </Link>
            <Link
              className="nav-links"
              activeClass="active"
              to="about"
              smooth={true}
              offset={-50}
              duration={100}
              onClick={() => setExpanded(false)}
            >
              About
            </Link>
            <Link
              className="nav-links"
              activeClass="active"
              to="portfolio"
              smooth={true}
              offset={-50}
              duration={100}
              onClick={() => setExpanded(false)}
            >
              Portfolio
            </Link>
            <Link
              className="nav-links"
              activeClass="active"
              to="contact"
              smooth={true}
              offset={-50}
              duration={100}
              onClick={() => setExpanded(false)}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
