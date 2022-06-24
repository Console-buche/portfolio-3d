import { createStitches } from '@stitches/react';

const { styled, css, theme } = createStitches({
  theme: {
    colors: {
      button: '#FF923E',
      light: '#FFFFFF'
    },
    space: {
      defaultGap: '50px'
    },
    size: {
      buttonCircle: '54px',
      cursorSize: 15
    }
  }
});

export { styled, theme };
