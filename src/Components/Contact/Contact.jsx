import React, { useRef } from "react";
import "./contact.css";
import { Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { Bounce } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_a325vqw",
        "template_5ut5czg",
        form.current,
        "Tm-An3NfFB76_uKXx"
      );
      console.log("Email sent successfully:", result.text);
    } catch (error) {
      console.error("Error sending email:", error.text);
    }

    // Reset the form fields
    e.target.reset();
  };

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
    </div>
  );
};

export default Contact;
