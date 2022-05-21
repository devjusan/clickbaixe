import { globalCss, styled } from '.';

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    border: 'none',
    boxSizing: 'border-box',
  },
  body: {
    background: '$background',
    color: '$black',
    fontFamily: '$default',
  },
  'h1, h2, h3, h4': {
    color: '$black',
  },
  'button, a, li': {
    cursor: 'pointer',
  },
});

export const StyledMain = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '$1120',
  minHeight: 'calc(100vh - 400px)',
});

export const StyleTitle = styled('h1', {
  textAlign: 'center',

  variants: {
    type: {
      title: {
        fontFamily: '$title',
        fontWeight: '700',
        fontSize: '$52',
        lineHeight: '$space$52',
      },
      logo: {
        fontFamily: '$logo',
        fontWeight: '400',
        fontSize: '$44',
        lineHeight: '$space$105',
      },
    },
  },

  defaultVariants: {
    type: 'title',
  },
});

export const StyledSubtitle = styled('h2', {
  fontSize: '$24',
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
