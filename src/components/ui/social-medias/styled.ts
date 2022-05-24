import { styled } from '@//styles';

const StyledContainer = styled(`aside`, {
  h2: {
    fontSize: `16px`,
    background: `$backgroundYellow`,
    display: `inline-block`,
    padding: `8px 16px`,
    letterSpacing: `1.2px`,
    borderBottomLeftRadius: `8px`,
    borderTopLeftRadius: `24px`,
    borderBottomRightRadius: `24px`,
    borderTopRightRadius: `8px`,
  },
});

const StyledMedia = styled(`div`, {
  display: `flex`,
  justifyContent: `center`,
  flexFlow: `row nowrap`,
  gap: `$20`,
  marginTop: `$12`,
  svg: {
    cursor: `pointer`,
    '&:hover': {
      fill: `$backgroundYellow`,
    },
    transition: `fill .2s`,
  },
});

export { StyledContainer, StyledMedia };
