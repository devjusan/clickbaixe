import { styled } from '../../../styles';

const StyledContainer = styled(`div`, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$20',
  width: `100%`,
  boxShadow: `0px 1px 0px rgba(0, 0, 0, 0.22);`,
  px: `$32`,
  py: `$16`,

  div: {
    display: 'none',
    padding: '0 !important',
  },

  '@xlg': {
    div: {
      display: 'block !important',
    },
  },

  '@reset': {
    ul: {
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
    },
  },

  ul: {
    display: `flex`,
    flexFlow: `row nowrap`,
    justifyContent: `center`,
    alignItems: `center`,
    gap: `$44`,
    listStyle: `none`,
    overflow: 'hidden',
    transition: 'all .2s',
  },
});

const StyledButton = styled(`li`, {
  all: `initial`,
  fontFamily: `$logo`,
  fontSize: `$20`,
  fontWeight: `bold`,
  borderRadius: `inherit`,
  cursor: `pointer`,
  background: `rgba(33, 37, 41, .1)`,
  color: `rgba(33, 37, 41, .6)`,
  px: `$32`,
  py: `$12`,
  transition: `all .2s`,
  '&:hover': {
    color: `$white`,
    background: `$backgroundYellow`,
  },
});

const StyledLeftArrow = styled('div', {
  position: 'fixed',
  left: '2rem',
  cursor: 'pointer',
  img: {
    transition: 'transform 0.2s',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
});
const StyledRightArrow = styled('div', {
  position: 'fixed',
  right: '2rem',
  cursor: 'pointer',
  img: {
    transition: 'transform 0.2s',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
});

export { StyledContainer, StyledButton, StyledLeftArrow, StyledRightArrow };
