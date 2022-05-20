import { globalCss, styled } from '.';

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    border: 'none',
    boxSizing: 'border-box',
  },
  'body, button': {
    fontFamily: '$default',
  },
  body: {
    background: '$background',
    color: '$black',
  },
  'h1, h2, h3, h4': {
    color: '$black',
  },
});

export const Title = styled('h1', {
  fontFamily: '$title',
  fontWeight: '700',
  fontSize: '$52',
  lineHeight: '$52',
  textAlign: 'center',

  variants: {
    fonts: {
      title: {
        fontFamily: '$title',
        fontWeight: '700',
      },
      logo: {
        fontFamily: '$logo',
        fontWeight: '400',
      },
    },
  },

  defaultVariants: {
    fonts: 'title',
  },
});

export const Subtitle = styled('h2', {
  fontSize: '$24',
  textAlign: 'center',
  fontFamily: '$subtitle',
  fontWeight: '400',
  lineHeight: '$32',

  variants: {
    fonts: {
      subtitle: {
        fontFamily: '$subtitle',
        fontWeight: '400',
        lineHeight: '$32',
      },
      articleTitle: {
        fontFamily: '$articleTitle',
        fontWeight: '500',
        lineHeight: '$25',
      },
    },
  },

  defaultVariants: {
    fonts: 'articleTitle',
  },
});
