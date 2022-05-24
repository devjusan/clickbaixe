import { styled } from '@//styles';

const StyledContainer = styled(`main`, {
  display: `flex`,
  flexFlow: `column nowrap`,
  alignItems: `center`,
  justifyContent: `center`,
  gap: `$32`,
});

const StyledPost = styled(`article`, {
  display: `flex`,
  flexFlow: `column nowrap`,
  gap: `$20`,
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

export { StyledContainer, StyledPost };
