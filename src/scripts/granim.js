// Import the Granim library
import Granim from 'granim';

// Create a new Granim instance
const granimInstance = new Granim({
  // Target the canvas element where the gradient will be rendered
  element: '#granim-canvas',

  // Set the direction of the gradient animation
  direction: 'top-bottom', // Options: 'diagonal', 'left-right', 'top-bottom', 'radial'

  // Pause animation when canvas is not in view (e.g., scrolled off-screen)
  isPausedWhenNotInView: true,

  // Set the initial state when the page loads
  defaultStateName: 'static',

  // Define all states for Granim
  states: {
    // Static state with a single gradient (no animation)
    static: {
      gradients: [['#040918', '#091540']],
      loop: false, // No animation loop
    },

    // Animated state with transitioning gradients
    animated: {
      gradients: [['#ebf2fc', '#eef8f9']], // Add more gradients here for multiple transitions
      loop: true, // Enable continuous animation loop
    },
  },
});

// Export the instance for use elsewhere (e.g., in a theme toggle module)
export default granimInstance;
