import { styled } from '../styles';

const StyledContainer = styled(`article`, {
  display: `flex`,
  flexFlow: `row wrap`,
  alignItems: `flex-start`,
  justifyContent: `center`,
  gap: `$28`,
});

const StyledCategory = styled(`div`, {
  background: `$backgroundYellow`,
  py: `$28`,
  px: `$32`,
  borderRadius: `$default`,
  span: {
    marginBottom: `$20`,
    display: `block`,
    color: `#999`,
    fontFamily: `$logo`,
  },
});

const StyledLeftContainer = styled(`aside`, {
  display: `flex`,
  flexFlow: `column nowrap`,
  gap: `$44`,
});
const StyledRightContainer = styled(`aside`, { width: `100%%` });

export {
  StyledContainer,
  StyledCategory,
  StyledLeftContainer,
  StyledRightContainer,
};
