import { styled } from '../../../styles'

const StyledHeader = styled(`header`, {
  width: `100%`,
  height: `$132`,
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,

  background: `$backgroundYellow`,
  px: `$52`,
  boxShadow: `0px 1px 0px rgba(0, 0, 0, 0.22);`,
})

const StyledNav = styled(`nav`, {
  display: `flex`,
  alignContent: `center`,
  gap: `$28`,
  filter: `drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25))`,

  '@md': {
    display: `none`,
  },
  a: {
    position: `relative`,
    transition: `color .2s`,
  },
  'a:hover': {
    color: `rgba(0, 0, 0, 0.70) !important`,
  },
  'a.active': {
    color: `$black`,
    fontWeight: `600`,
  },
  'a.active::after': {
    content: ``,
    height: `2px`,
    borderRadius: `$full`,
    width: `100%`,
    position: `absolute`,
    top: `5.45rem`,
    left: `0`,
    background: `rgba(0, 0, 0, 0.9)`,
  },
})

const StyledA = styled(`a`, {
  fontSize: `$24`,
  fontFamily: `Benne`,
  fontWeight: `300`,
  listStyle: `none`,
})

export { StyledHeader, StyledNav, StyledA }
