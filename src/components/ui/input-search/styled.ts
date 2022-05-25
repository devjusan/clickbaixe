import { styled } from '../../../styles';

const StyledContainer = styled('form', {
  position: 'relative',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const StyledInput = styled('input', {
  display: 'block',
  height: '100%',
  borderRadius: '$default',
  transition: 'outline 0.2s',
  padding: '$12',
  fontFamily: '$logo',
  fontSize: '$16',

  '&:hover': {
    outline: '1px solid black',
  },

  '&::placeholder': {
    color: '#999',
    fontSize: '.9rem',
  },
});

const StyledImageContainer = styled('div', {
  position: 'absolute',
  right: '$20',
  top: '$16',
});

export { StyledContainer, StyledInput, StyledImageContainer };
