import { styled } from '@//styles';

const StyledFooter = styled(`footer`, {
  position: `relative`,
  display: `flex`,
  flexFlow: `nowrap column`,
  alignItems: `center`,
  justifyContent: `center`,
  py: `$52`,
  background: `$black`,
  textAlign: `center`,
  color: `$white`,
  height: `$400`,
});

const StyledAbout = styled(`div`, {
  all: `unset`,
  p: {
    fontSize: `$20`,
    fontFamily: `$subtitle`,
    strong: {
      fontFamily: `$logo`,
      fontWeight: `500`,
    },
  },
});

const StyledContent = styled(`div`, {
  all: `unset`,
  maxWidth: `60%`,
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

const StyledRights = styled(`span`, {
  position: `absolute`,
  bottom: `$16`,
  fontSize: `$16`,
  fontFamily: `$subtitle`,
});

export { StyledFooter, StyledAbout, StyledContent, StyledMedia, StyledRights };
