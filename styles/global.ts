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
  textAlign: 'center',

  variants: {
    type: {
      title: {
        fontFamily: '$title',
        fontWeight: '700',
        fontSize: '$space$52',
        lineHeight: '$space$52',
      },
      logo: {
        fontFamily: '$logo',
        fontWeight: '400',
        fontSize: '$space$105',
        lineHeight: '$space$105',
      },
    },
  },

  defaultVariants: {
    type: 'title',
  },
});

export const Subtitle = styled('h2', {
  fontSize: '$space$24',
  textAlign: 'center',

  variants: {
    fonts: {
      subtitle: {
        fontFamily: '$subtitle',
        fontWeight: '400',
        lineHeight: '$space$32',
      },
      articleTitle: {
        fontFamily: '$articleTitle',
        fontWeight: '500',
        lineHeight: '$space$24',
      },
    },
  },

  defaultVariants: {
    fonts: 'articleTitle',
  },
});
