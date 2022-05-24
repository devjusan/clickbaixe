import { styled } from '../styles';

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
      fontSize: `$32 !important`,
      px: `$12`,
    },
  },
});

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
});

const StyledLine = styled(`div`, {
  width: `100%`,
  background: `$black`,
  borderRadius: `$full`,
  height: `2px`,
});

export { StyledContainer, StyledContent, StyledLine };
