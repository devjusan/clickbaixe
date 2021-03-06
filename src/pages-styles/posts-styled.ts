import { styled } from '../styles'

const StyledContainer = styled(`main`, {
  display: `flex`,
  flexFlow: `column nowrap`,
  alignItems: `center`,
  justifyContent: `center`,
  gap: `$32`,
  py: `$52`,

  h2: {
    fontSize: `$24`,
    textAlign: `center`,
    px: `$20`,
    maxWidth: `400px`,
    lineHeight: `$space$32`,
    position: `relative`,
    '@md': {
      px: `$12`,
    },
  },
})

const StyledContent = styled(`article`, {
  display: `flex`,
  flexFlow: `column nowrap`,
  alignItems: `center`,
  justifyContent: `center`,
  gap: `$32`,

  p: {
    maxWidth: `800px`,
    fontSize: `$20`,
    lineHeight: `22px`,
    overflowWrap: `break-word`,
    fontFamily: `$articleTitle`,
  },
  'ul li': {
    listStyle: `none`,
    fontFamily: `$articleTitle`,
    maxWidth: `800px`,
    fontSize: `$20`,
    lineHeight: `22px`,
  },
  'ul li > p': {
    marginBottom: `$20`,
  },
  'ul li p:first-child': {
    color: `$black`,
    fontWeight: `bold`,
  },
  li: {
    cursor: `initial !important`,
  },
  '.block-img': {
    img: {
      width: `100%`,
      height: 'auto',
      minHeight: '100%',
    },
  },
})

const StyledLine = styled(`div`, {
  width: `100%`,
  background: `$black`,
  borderRadius: `$full`,
  height: `2px`,
})

const StyledDisqusContainer = styled(`div`, {
  display: 'block',
  width: '100%',
  padding: '$32',
})

const StyledSteamContainer = styled('div', {
  px: '$28',
  width: '100%',
  maxWidth: '800px',
  iframe: {
    display: 'block',
    width: '100%',
  },
})

const StyledTrailerContainer = styled('div', {
  px: '$28',
  width: '100%',
  maxWidth: '800px',
  iframe: {
    display: 'block',
    height: '500px',
    width: '100%',
  },
})

export {
  StyledContainer,
  StyledContent,
  StyledLine,
  StyledDisqusContainer,
  StyledTrailerContainer,
  StyledSteamContainer,
}
