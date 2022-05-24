import { styled } from '../../../../styles';

const StyledContainer = styled(`div`, {
  display: `flex`,
  alignContent: `center`,
  justifyContent: `flex-start`,
  flexFlow: `column wrap`,
  gap: `$28`,

  img: {
    transition: `transform .2s`,
    '&:hover': {
      transform: `scale(1.2)`,
    },
  },
});

export { StyledContainer };
