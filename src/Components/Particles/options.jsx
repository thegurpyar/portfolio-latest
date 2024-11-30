export const options = {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  fpsLimit: 60, // Reduced for smoother animations
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: 'rgb(249, 0, 191)',
      animation: {
        enable: true,
        speed: 5, // Reduced for smoother transitions
        sync: true
      }
    },
    opacity: {
      value: 0.4 // Slightly decreased for subtle visuals
    },
    size: {
      value: {
        min: 0.5, // Increased minimum size for better visibility
        max: 2
      }
    },
    links: {
      enable: true,
      distance: 100,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2, // Reduced for slower movement
      direction: 'none',
      outModes: {
        default: 'out'
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'repulse'
      },
      onClick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 200
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true,
  background: {
    color: '#3A3845'
  }
};
