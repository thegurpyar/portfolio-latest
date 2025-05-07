import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
        href="https://wa.me/+918619443934"
        aria-label="Chat"
      >
        <WhatsAppIcon style={iconStyle} />
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
        href="https://docs.google.com/document/d/1EiCo34VO1_zEIxLFrlz_rcVmtFHEikw5bTDt08aNdaI"
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
