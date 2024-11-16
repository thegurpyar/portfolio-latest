export const options = {
  fullScreen: {
    enable: true,
    zIndex: -1, // Ensures particles are rendered behind other elements
  },
  fpsLimit: 120, // Limit the frames per second
  particles: {
    number: {
      value: 40, // Total number of particles
      density: {
        enable: true,
        area: 800, // Particles per this area
      },
    },
    color: {
      value: "#F900BF", // Particle color
      animation: {
        enable: true,
        speed: 10,
        sync: true, // All particles change color simultaneously
      },
    },
    opacity: {
      value: 0.5, // Particle transparency
    },
    size: {
      value: { min: 0.1, max: 2.5 }, // Random sizes for particles
    },
    links: {
      enable: true,
      distance: 100, // Maximum distance for linking particles
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6, // Speed of particle movement
      direction: "none", // Moves in random directions
      outModes: {
        default: "out", // Particles move outside the canvas
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse", // Push particles away on hover
      },
      onClick: {
        enable: true,
        mode: "push", // Add particles on click
      },
      resize: true, // Adjust particles when the window is resized
    },
    modes: {
      repulse: {
        distance: 200, // Distance to repulse particles
      },
      push: {
        quantity: 4, // Number of particles added on click
      },
    },
  },
  detectRetina: true, // Optimizes particles for high-DPI displays
  background: {
    color: "#3A3845", // Canvas background color
  },
};
