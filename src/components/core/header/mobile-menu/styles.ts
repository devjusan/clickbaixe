import { keyframes } from '@stitches/react'
import { styled } from '../../../../styles'

const StyledMenu = styled(`div`, {
  position: `relative`,
  display: `none`,
  cursor: `pointer`,
  '@md': {
    display: `inline-block`,
  },
  div: {
    width: `35px`,
    height: `2px`,
    backgroundColor: `#333`,
    margin: `$12 0`,
    transition: `0.4s`,
  },
  '&.active .bar1': {
    '-webkit-transform': `rotate(-45deg) translate(-12px, 10px)`,
    transform: `rotate(-45deg) translate(-12px, 10px)`,
  },
  '&.active .bar2': {
    opacity: 0,
  },
  '&.active .bar3': {
    '-webkit-transform': `rotate(45deg) translate(-8px, -8px)`,
    transform: `rotate(45deg) translate(-8px, -8px)`,
  },
})

const showUp = keyframes({
  from: { maxHeight: 0, opacity: `0` },
  to: { maxHeight: `300px`, opacity: `1` },
})

const StyledNav = styled(`nav`, {
  overflow: `hidden`,
  position: `absolute`,
  right: `$4`,
  top: `$52`,
  flexFlow: `column nowrap`,
  gap: `$28`,

  animation: `${showUp} .3s ease forwards`,
  fontFamily: `$logo`,
  fontSize: `$24`,
  background: `rgba(20,20,20, .98)`,
  borderRadius: `$default`,
  zIndex: `$accordion`,
  minWidth: `100%`,
  whiteSpace: `nowrap`,
  px: `$28`,
  py: `$20`,

  variants: {
    visible: {
      show: {
        display: `flex`,
      },
      hide: {
        display: `none`,
      },
    },
  },
})

const StyledA = styled(`a`, {
  color: `$white`,
  transition: `color .2s`,
  '&:hover': {
    color: `$backgroundYellow`,
  },
})

export { StyledMenu, StyledNav, StyledA }
