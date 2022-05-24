import { styled } from '@//styles';

const StyledContainer = styled('div', {
  width: '100%',
  overflowX: 'auto',
  borderBottom: '1px solid black',
  px: '$32',
  py: '$16',

  ul: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$44',
    listStyle: 'none',
  },
});

const StyledButton = styled('li', {
  all: 'initial',
  fontFamily: '$logo',
  fontSize: '$20',
  fontWeight: 'bold',
  borderRadius: 'inherit',
  cursor: 'pointer',
  background: 'rgba(33, 37, 41, .1)',
  color: 'rgba(33, 37, 41, .6)',
  px: '$32',
  py: '$12',
  borderRadius: '$full',
  transition: 'all .2s',
  '&:hover': {
    color: '$white',
    background: '$backgroundYellow',
  },
});

export { StyledContainer, StyledButton };
