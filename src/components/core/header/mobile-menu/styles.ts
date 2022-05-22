import { styled } from '@//styles';
import { keyframes } from '@stitches/react';

const StyledMenu = styled('div', {
  position: 'relative',
  display: 'none',
  cursor: 'pointer',
  '@md': {
    display: 'inline-block',
  },
  div: {
    width: '35px',
    height: '2px',
    backgroundColor: '#333',
    margin: '$12 0',
    transition: '0.4s',
  },
  '&.active .bar1': {
    '-webkit-transform': 'rotate(-45deg) translate(-12px, 10px)',
    transform: 'rotate(-45deg) translate(-12px, 10px)',
  },
  '&.active .bar2': {
    opacity: 0,
  },
  '&.active .bar3': {
    '-webkit-transform': 'rotate(45deg) translate(-8px, -8px)',
    transform: 'rotate(45deg) translate(-8px, -8px)',
  },
});

const showUp = keyframes({
  from: { height: 0, opacity: '0' },
  to: { height: '180px', opacity: '1' },
});

const StyledNav = styled('nav', {
  overflow: 'hidden',
  position: 'absolute',
  right: '$4',
  top: '$52',
  flexFlow: 'column nowrap',
  gap: '$28',
  px: '$28',
  py: '$20',
  animation: `${showUp} .3s ease forwards`,
  fontFamily: '$logo',
  color: 'White',
  fontSize: '$24',
  background: 'rgba(20,20,20, .95)',
  borderRadius: '$default',
  zIndex: '$accordion',
  variants: {
    visible: {
      show: {
        display: 'flex',
      },
      hide: {
        display: 'none',
      },
    },
  },
});

const StyledA = styled('a', {
  transition: 'color .2s',
  '&:hover': {
    color: '$backgroundYellow',
  },
});

export { StyledMenu, StyledNav, StyledA };
