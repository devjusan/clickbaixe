import { globalCss } from '.';

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
