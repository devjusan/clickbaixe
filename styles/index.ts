import { createStitches, ScaleValue } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#000000',
      black: '#ffffff',
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
      '24': '1.5rem',
      '28': '1.75rem',
      '32': '2rem',
      '52': '3.25rem',
      '105': '6.5625rem',
      '132': '8.25rem',
    },
    radii: {
      full: '999999px',
      default: '5px',
    },
    fonts: {
      default: 'New York Medium',
      title: 'New York Extra Large',
      substitle: 'SF Mono',
      articleTitle: 'SF Pro Display',
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
