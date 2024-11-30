import React, { useRef, useState } from "react";
import "./contact.css";
import { Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { Bounce } from "react-awesome-reveal";
import Loader from "../Loader/Loader"; // Import the Loader component

const Contact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false); // State to track loading status

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      if(result){
        setShowAlert(true);
      }
      setAlertMessage("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error.text);
      setAlertMessage("Failed to send email. Please try again.");
    } finally {
      setLoading(false); // Hide loader after email is sent
    }

    e.target.reset();
  };

  const closeAlert = () => setShowAlert(false);

  return (
    <div id="contact">
      <Container fluid style={{ padding: "0", margin: "0", background: "white" }}>
        <div style={{ background: "#252934", marginTop: "50px" }} className="contact">
          <Bounce duration={1000}>
            <h1 className="header" style={{ color: "#fff", marginTop: "-5%" }}>CONTACT</h1>
          </Bounce>
          <p style={{ color: "rgb(4, 194, 201)", fontWeight: "600" }}>
            Have a question or want to work together?
          </p>

          <form onSubmit={sendEmail} ref={form} style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your Message"
                name="message"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-light"
              style={{
                width: "auto",
                margin: "20px auto",
                textTransform: "uppercase",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </Container>

      {showAlert && (
        <div className="custom-alert">
          <div className="alert-content">
            <p>{alertMessage}</p>
            <button onClick={closeAlert} className="btn btn-light">
              Close
            </button>
          </div>
        </div>
      )}

      {loading && <Loader />} {/* Display loader when sending email */}
    </div>
  );
};

export default Contact;
