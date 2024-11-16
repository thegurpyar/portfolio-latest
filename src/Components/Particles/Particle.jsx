import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Particles } from "@tsparticles/react";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load the full tsparticles package
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#F900BF",
            animation: {
              enable: true,
              speed: 10,
              sync: true,
            },
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 0.1, max: 2.5 },
          },
          links: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 200,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
        background: {
          color: "#3A3845",
        },
      }}
    />
  );
};

export default Particle;
