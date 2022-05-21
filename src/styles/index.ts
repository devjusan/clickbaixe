import { createStitches, ScaleValue } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      background: '#ffffff',
      backgroundYellow: '#ffd900',
    },
    space: {
      '0': '0px',
      '1': '1px',
      '4': '0.25rem',
      '8': '0.5rem',
      '12': '0.75rem',
      '16': '1rem',
      '20': '1.25rem',
      '28': '1.75rem',
      '32': '2rem',
      '52': '3.25rem',
      '105': '6.5625rem',
      '132': '8.25rem',
    },
    sizes: {
      '28': '1.75rem',
      '32': '2rem',
      '52': '3.25rem',
      '105': '6.5625rem',
      '132': '8.25rem',
      '1120': '1120px',
      '400': '400px',
    },
    fontSizes: {
      '12': '0.75rem',
      '16': '1rem',
      '20': '1.25rem',
      '24': '1.5rem',
      '32': '2rem',
      '44': '2.75rem',
      '52': '3.25rem',
      '105': '6.5625rem',
    },
    radii: {
      full: '999999px',
      default: '5px',
    },
    fonts: {
      default: 'New York Medium',
      title: 'New York Extra Large',
      subtitle: 'Benne',
      articleTitle: 'SF Pro Display',
      logo: 'Montserrat',
    },
    zIndices: {
      default: 1,
      upper: 2,
      accordion: 5,
    },
    transitions: {
      default: 'all 0.2s ease',
    },
  },
  utils: {
    px: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
