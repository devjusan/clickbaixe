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
  article: {
    maxWidth: '$1120',
    py: '$72',
  },
});

export const StyledMain = styled('main', {
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'column nowrap',
  minHeight: 'calc(100vh - 400px)',
});

export const StyleTitle = styled('h1', {
  textAlign: 'center',
  maxWidth: '650px',
  px: '$20',

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
      mobile: {
        fontSize: '$32',
        lineHeight: '$space$44',
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
  px: '$20',
  maxWidth: '400px',
  lineHeight: '$space$32',
  position: 'relative',
  variants: {
    type: {
      subtitle: {
        fontFamily: '$subtitle',
        fontWeight: '400',
      },
      articleTitle: {
        fontFamily: '$articleTitle',
        fontWeight: '500',
      },
    },
  },

  defaultVariants: {
    type: 'articleTitle',
  },
});
