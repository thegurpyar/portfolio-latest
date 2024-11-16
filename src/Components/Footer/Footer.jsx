import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
const Footer = () => {
  const iconStyle = {
    color: "white",
    fontSize: "30px",
    borderRadius: "2px",
  };

  return (
    <div className="footer">
      <a
        className="footer-icon"
        href="tel:+918619443934"
        aria-label="Call Gurpyar"
      >
        <CallIcon style={iconStyle} />
      </a>
      <a
        className="footer-icon"
        href="https://www.instagram.com/accounts/login/?next=/gurpyardandiwal/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Instagram Profile"
      >
        <InstagramIcon style={iconStyle} />
      </a>
      <a
        className="footer-icon"
        href="https://docs.google.com/document/d/1hWGLod9xqlV44nvkMQsfK6kOi4XqpepE/edit?usp=sharing&ouid=102389274576037284742&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit StackOverflow Profile"
      >
        <TextSnippetIcon style={iconStyle} />
      </a>
    </div>
  );
};

export default Footer;
