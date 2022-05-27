import { keyframes } from '@stitches/react'
import { styled } from '../../../styles'

const StyledContainer = styled(`div`, {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$20',
  width: `100%`,
  height: '100%',
  boxShadow: `0px 1px 0px rgba(0, 0, 0, 0.22);`,
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

  ul: {
    display: `flex`,
    flexFlow: `row wrap`,
    justifyContent: `center`,
    alignItems: `center`,
    gap: `$44`,
    px: '$12',
    listStyle: `none`,
    transition: 'all .2s',
    overflowX: 'auto',

    '@lg': {
      gap: `$20`,
    },
  },
})

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

  '@lg': {
    px: `$16`,
    py: `$8`,
    fontSize: `$16`,
  },
})

const toggleAnimation = keyframes({
  from: { right: '50%' },
  to: { right: '51%' },
})

const StyledRightArrow = styled('div', {
  position: 'absolute',
  right: '50%',
  top: '72.5%',
  transform: 'rotate(90deg)',
  animation: `${toggleAnimation} .8s ease-in-out infinite alternate`,
})

export { StyledContainer, StyledButton, StyledRightArrow }
