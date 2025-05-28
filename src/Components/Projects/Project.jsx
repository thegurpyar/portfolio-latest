import React from "react";
import "./project.css";
import { Fade } from "react-awesome-reveal";


const projects = [
  {
    id: 1,
    title: "Rapido Ride",
   
    role: "Back-End developer",
    description: `
      Designed and developed a full-stack cab booking system for intra-city travel with a real-time fare calculation engine.
      Implemented dynamic pricing algorithms, including base fare, distance/time-based calculation, and surge pricing during peak hours.
      Used MongoDB to store and manage user data, driver availability, booking history, and live location data efficiently.
    `,
    link: "https://rapidoride.com/",
    image: "/ride.png", 
  },
  {
    id: 2,
    title: "Yatricabs",
   
    role: "Lead Backend Developer",
    description: `
      I played a key role in developing and optimizing the backend infrastructure for Yatri Cabs, a leading online cab booking platform. My contributions included:
      Backend Architecture & API Development – Designed and implemented RESTful APIs for admin, user, and driver management.
      Real-Time Location Tracking – Integrated Kafka & WebSockets for live cab tracking and seamless communication.
      Database Optimization – Utilized MongoDB with Mongoose for efficient data storage, handling user profiles, ride history, and payments.
    `,
    link: "https://yatricabs.com/", 
    image: "/yatricabs.png"
  },
  {
    id: 3,
    title: "SecretWorld",
  
    role: "Lead Backend Developer",
    description: `
      Created backend for an app “secret-world” where users can post their gigs and others complete gigs and earn money.
      Make use of websockets for chat between two persons with archive,mute,delete functionality.
      Implemented Stripe as a payment gateway.
      Make use of mongodb aggregation pipelines to effectively fetch chats,gigs etc.
      Collaborated with swift,kotlin team for implementing APIs.
    `,
    link: "https://secretworld.ai/", 
    image: "/secretWorld.png"
  },
  {
    id: 4,
    title: "Portfolio",

    role: "React js Developer",
    description: `
      This portfolio showcases my full-stack development skills. Feel free to explore it yourself. I take pride in being a great full-stack developer, with expertise in building robust, scalable, and user-friendly applications.
    `,
    link: "https://gurpyarsingh.netlify.app/",
    image: "gurpyar.png"
  },
];


function ProjectList() {
  return (
    <div className="Background">
      <div className="HeadTag">
        <h1>My Professional Work</h1>
      </div>
      <Fade cascade duration={250}>

      {projects.map((project) => (
        <div key={project.id} className="flex ">
      
          {project.image && (
            <div className="image-container">
              <img src={project.image} alt={project.title} className="image" />
            </div>
          )}

          <div className="About_Project">
            <h1 className="Head_Font">{project.title}</h1>
            {project.website && <h4>{project.website}</h4>}
            <h2>My role: {project.role}</h2>
           
            <p style={{ whiteSpace: "pre-line" }}>{project.description}</p>

            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn ">
                  Check Out
                </button>
              </a>
            )}
          </div>
        </div>
      ))}
      </Fade>

    </div>
  );
}

export default ProjectList;
